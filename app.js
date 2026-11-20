let progress = JSON.parse(localStorage.getItem("ootProgress")) || {};
let currentFilter = "all";
let currentAge = "all";

// Item serve para a idade escolhida se for da idade, ou "any" (qualquer uma)
function matchesAge(item) {
    return currentAge === "all" || item.age === "any" || item.age === currentAge;
}

const dungeonsList = [
    "Deku Tree",
    "Dodongo's Cavern",
    "Jabu-Jabu's Belly",
    "Forest Temple",
    "Fire Temple",
    "Water Temple",
    "Shadow Temple",
    "Spirit Temple",
    "Bottom of the Well",
    "Ice Cavern",
    "Ganon's Castle"
];

// ==================== GERAÇÃO ====================
function generateRegions() {
    const regionContainer = document.getElementById("regions-container");
    const dungeonContainer = document.getElementById("dungeons-container");

    regionContainer.innerHTML = "";
    dungeonContainer.innerHTML = "";

    Object.keys(regions).forEach(regionName => {
        if (dungeonsList.includes(regionName)) return;
        regionContainer.appendChild(createRegionGroup(regionName, false));
    });

    dungeonsList.forEach(dungeonName => {
        dungeonContainer.appendChild(createRegionGroup(dungeonName, true));
    });
}

// Guarda referências dos elementos de cada região pra atualizar sem recriar tudo
const regionElements = {};

function createRegionGroup(regionName, isDungeon) {
    const div = document.createElement("div");
    div.className = "region-group";

    const button = document.createElement("button");
    if (isDungeon) button.classList.add("dungeon-btn");
    button.addEventListener("click", () => openRegion(regionName));

    const label = document.createElement("span");
    label.className = "region-btn-label";
    label.textContent = `${regionName} ${isDungeon ? '🏰' : ''}`;

    const progressTrack = document.createElement("div");
    progressTrack.className = "region-progress-track";
    const progressFill = document.createElement("div");
    progressFill.className = "region-progress-fill";
    progressTrack.appendChild(progressFill);

    button.appendChild(label);
    button.appendChild(progressTrack);

    const content = document.createElement("div");
    content.id = regionName;
    content.className = "content";

    div.appendChild(button);
    div.appendChild(content);

    regionElements[regionName] = { group: div, label, progressFill };

    return div;
}

// ==================== FEEDBACK VISUAL DE PROGRESSO POR REGIÃO ====================
function updateRegionButtonStates() {
    Object.keys(regions).forEach(regionName => {
        const els = regionElements[regionName];
        if (!els) return;

        const items = regions[regionName];
        const total = items.length;
        const completedCount = items.filter(item => progress[item.id]).length;
        const percent = total ? Math.round((completedCount / total) * 100) : 0;
        const isComplete = total > 0 && completedCount === total;
        const isDungeon = dungeonsList.includes(regionName);

        els.progressFill.style.width = `${percent}%`;
        els.label.textContent = `${isComplete ? '✅ ' : ''}${regionName} ${isDungeon ? '🏰' : ''}`;
        els.group.classList.toggle('region-complete', isComplete);
    });
}

// ==================== RENDERIZA E MOSTRA UMA REGIÃO (sem mexer nas outras) ====================
function renderAndShowRegion(regionName) {
    const content = document.getElementById(regionName);
    if (!content) return;

    let html = `<h3>${regionName}</h3>`;

    if (dungeonsList.includes(regionName)) {
        const checked = progress[`dungeon_${regionName}`] ? "checked" : "";
        html += `
        <div class="dungeon-complete">
            <label>
                <input type="checkbox" class="dungeon-checkbox" ${checked}>
                <strong>🏆 Marcar como Completada</strong>
            </label>
        </div>`;
    }

    if (regions[regionName] && regions[regionName].length > 0) {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

        regions[regionName].forEach(item => {
            if (currentFilter !== "all" && item.type !== currentFilter) return;
            if (!matchesAge(item)) return;
            if (searchTerm) {
                const matchesName = item.name.toLowerCase().includes(searchTerm);
                const matchesNote = (item.note || "").toLowerCase().includes(searchTerm);
                if (!matchesName && !matchesNote) return;
            }

            const checked = progress[item.id] ? "checked" : "";
            let icon = "";
            switch (item.type) {
                case "goldSkulltula": icon = "🕷"; break;
                case "heartPiece":    icon = "❤️"; break;
                case "song":          icon = "🎵"; break;
                case "greatFairy":    icon = "🧚"; break;
                case "magicBean":     icon = "🌱"; break;
                case "maskQuest":     icon = "🎭"; break;
                case "swordQuest":    icon = "⚔️"; break;
            }
            if (item.icon) icon = item.icon;

            // Passo travado: só libera depois que o anterior estiver marcado
            const locked = item.requires && !progress[item.requires];

            const ageText = item.age === "child" ? "👦 Child" : item.age === "adult" ? "🧔 Adult" : "👦🧔 Both";
            const timeText = item.time === "night" ? "🌙 Night" : "☀️🌙 Any";

            html += `
            <div class="item${locked ? ' locked' : ''}">
                <label>
                    <input type="checkbox" class="item-checkbox" data-item-id="${item.id}" ${checked} ${locked ? 'disabled' : ''}>
                    <strong>${icon} ${item.name}</strong>
                </label>
                <div class="item-meta">${ageText} • ${timeText}</div>
                ${locked ? '<div class="lock-note">🔒 Conclua o passo anterior para liberar este.</div>' : ''}
                <small>${item.note || ''}</small>
                ${item.wikiImage ? `<a href="${item.wikiImage}" target="_blank" rel="noopener noreferrer" class="wiki-link">📍 Ver imagem da localização</a>` : ''}
            </div>`;
        });
    }

    content.innerHTML = html || `<p style="color:#888;">Nenhum item encontrado.</p>`;
    content.classList.add('show');

    const dungeonCheckbox = content.querySelector('.dungeon-checkbox');
    if (dungeonCheckbox) {
        dungeonCheckbox.addEventListener('change', () => toggleDungeon(regionName));
    }

    content.querySelectorAll('.item-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => toggleItem(checkbox.dataset.itemId));
    });
}

// ==================== OPEN REGION (clique manual: só uma aberta por vez) ====================
function openRegion(regionName) {
    const content = document.getElementById(regionName);
    if (!content) return;

    const isCurrentlyOpen = content.classList.contains('show');

    // Fecha todas as regiões abertas (inclusive a atual, se já estiver aberta)
    document.querySelectorAll(".content.show").forEach(el => el.classList.remove('show'));

    if (isCurrentlyOpen) {
        // Já estava aberta: só fecha (comportamento de clicar de novo pra recolher)
        return;
    }

    renderAndShowRegion(regionName);
}

// ==================== FILTRO GLOBAL (abre regiões relevantes) ====================
function applyGlobalFilter() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

    document.querySelectorAll(".content").forEach(content => {
        content.classList.remove('show');
    });

    const noFilterActive = currentFilter === "all" && currentAge === "all" && !searchTerm;

    Object.keys(regions).forEach(regionName => {
        const hasMatchingItem = regions[regionName].some(item => {
            const matchesType = currentFilter === "all" || item.type === currentFilter;
            const matchesSearch = !searchTerm
                || item.name.toLowerCase().includes(searchTerm)
                || (item.note || "").toLowerCase().includes(searchTerm);
            return matchesType && matchesSearch && matchesAge(item);
        });

        const els = regionElements[regionName];
        if (els) {
            els.group.style.display = (noFilterActive || hasMatchingItem) ? "" : "none";
        }

        if (!noFilterActive && hasMatchingItem) {
            renderAndShowRegion(regionName);
        }
    });
}

// ==================== TOGGLES ====================
function toggleItem(itemId) {
    progress[itemId] = !progress[itemId];

    // Desmarcar um passo desmarca os seguintes (cascata)
    if (!progress[itemId]) {
        let changed = true;
        while (changed) {
            changed = false;
            Object.values(regions).forEach(list => list.forEach(it => {
                if (it.requires && progress[it.id] && !progress[it.requires]) {
                    progress[it.id] = false;
                    changed = true;
                }
            }));
        }
    }

    localStorage.setItem("ootProgress", JSON.stringify(progress));
    updateProgress();

    // Se a região tem passos encadeados, redesenha para atualizar os cadeados
    Object.keys(regions).forEach(regionName => {
        if (regions[regionName].some(it => it.id === itemId) && regions[regionName].some(it => it.requires)) {
            renderAndShowRegion(regionName);
        }
    });
}

function toggleDungeon(dungeonName) {
    progress[`dungeon_${dungeonName}`] = !progress[`dungeon_${dungeonName}`];
    localStorage.setItem("ootProgress", JSON.stringify(progress));
    updateProgress();
}

function updateProgress() {
    let skulls = 0, hearts = 0, songs = 0, fairies = 0, beans = 0, maskDone = 0, maskTotal = 0, swordDone = 0, swordTotal = 0, bagDone = 0, bagTotal = 0, total = 0, completed = 0, dungeonsDone = 0;

    Object.values(regions).forEach(region => {
        region.forEach(item => {
            total++;
            if (item.id.startsWith("MASK_")) maskTotal++;
            if (item.id.startsWith("BG_")) swordTotal++;
            if (item.id.startsWith("BAG_")) bagTotal++;
            if (progress[item.id]) {
                completed++;
                if (item.type === "goldSkulltula") skulls++;
                if (item.type === "heartPiece") hearts++;
                if (item.type === "song") songs++;
                if (item.type === "greatFairy") fairies++;
                if (item.type === "magicBean") beans++;
                if (item.id.startsWith("MASK_")) maskDone++;
                if (item.id.startsWith("BG_")) swordDone++;
                if (item.id.startsWith("BAG_")) bagDone++;
            }
        });
    });

    dungeonsList.forEach(d => {
        if (progress[`dungeon_${d}`]) dungeonsDone++;
    });

    document.getElementById("skullCount").textContent = skulls;
    document.getElementById("heartCount").textContent = hearts;
    document.getElementById("completion").textContent = total ? Math.round((completed / total) * 100) : 0;
    document.getElementById("dungeonCount").textContent = `${dungeonsDone}/11`;

    const songEl = document.getElementById("songCount");
    const fairyEl = document.getElementById("fairyCount");
    const beanEl = document.getElementById("beanCount");
    if (songEl) songEl.textContent = songs;
    if (fairyEl) fairyEl.textContent = fairies;
    if (beanEl) beanEl.textContent = beans;
    const maskEl = document.getElementById("maskCount");
    const swordEl = document.getElementById("swordCount");
    if (maskEl) maskEl.textContent = `${maskDone}/${maskTotal}`;
    if (swordEl) swordEl.textContent = `${swordDone}/${swordTotal}`;
    const bagEl = document.getElementById("bagCount");
    if (bagEl) bagEl.textContent = `${bagDone}/${bagTotal}`;

    updateRegionButtonStates();
}

// ==================== EVENTOS (um único DOMContentLoaded) ====================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            currentFilter = this.dataset.type;
            applyGlobalFilter();
        });
    });

    document.querySelectorAll(".age-btn").forEach(btn => {
        btn.addEventListener("click", function () {
            document.querySelectorAll(".age-btn").forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            currentAge = this.dataset.age;
            applyGlobalFilter();
        });
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", () => {
            applyGlobalFilter();
        });
    }
});

// Inicialização
generateRegions();
updateProgress();
console.log("App carregado");
