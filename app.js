let progress = JSON.parse(localStorage.getItem("ootProgress")) || {};
let currentFilter = "all";

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

function createRegionGroup(regionName, isDungeon) {
    const div = document.createElement("div");
    div.className = "region-group";

    const button = document.createElement("button");
    if (isDungeon) button.classList.add("dungeon-btn");
    button.textContent = `${regionName} ${isDungeon ? '🏰' : ''}`;
    button.addEventListener("click", () => openRegion(regionName));

    const content = document.createElement("div");
    content.id = regionName;
    content.className = "content";

    div.appendChild(button);
    div.appendChild(content);
    return div;
}

// ==================== OPEN REGION (múltiplas regiões abertas) ====================
function openRegion(regionName) {
    const content = document.getElementById(regionName);
    if (!content) return;

    const isCurrentlyOpen = content.classList.contains('show');

    if (isCurrentlyOpen) {
        content.classList.remove('show');
        return;
    }

    let html = `<h3>${regionName}</h3>`;

    if (dungeonsList.includes(regionName)) {
        const checked = progress[`dungeon_${regionName}`] ? "checked" : "";
        html += `
        <div class="dungeon-complete">
            <label>
                <input type="checkbox" onchange="toggleDungeon('${regionName}')" ${checked}>
                <strong>🏆 Marcar como Completada</strong>
            </label>
        </div>`;
    }

    if (regions[regionName] && regions[regionName].length > 0) {
        const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

        regions[regionName].forEach(item => {
            if (currentFilter !== "all" && item.type !== currentFilter) return;
            if (searchTerm && !item.name.toLowerCase().includes(searchTerm)) return;

            const checked = progress[item.id] ? "checked" : "";
            let icon = "";
            switch (item.type) {
                case "goldSkulltula": icon = "🕷"; break;
                case "heartPiece":    icon = "❤️"; break;
                case "song":          icon = "🎵"; break;
                case "greatFairy":    icon = "🧚"; break;
                case "magicBean":     icon = "🌱"; break;
            }

            const ageText = item.age === "child" ? "👦 Child" : item.age === "adult" ? "🧔 Adult" : "👦🧔 Both";
            const timeText = item.time === "night" ? "🌙 Night" : "☀️🌙 Any";

            html += `
            <div class="item">
                <label>
                    <input type="checkbox" onchange="toggleItem('${item.id}')" ${checked}>
                    <strong>${icon} ${item.name}</strong>
                </label>
                <div>${ageText} • ${timeText}</div>
                <small>${item.note || ''}</small>
            </div>`;
        });
    }

    content.innerHTML = html || `<p style="color:#888;">Nenhum item encontrado.</p>`;
    content.classList.add('show');
}

// ==================== FILTRO GLOBAL (abre regiões relevantes) ====================
function applyGlobalFilter() {
    const searchTerm = document.getElementById("searchInput").value.toLowerCase().trim();

    document.querySelectorAll(".content").forEach(content => {
        content.classList.remove('show');
    });

    // Sem filtro de tipo e sem busca: não há o que abrir automaticamente
    if (currentFilter === "all" && !searchTerm) return;

    Object.keys(regions).forEach(regionName => {
        const hasMatchingItem = regions[regionName].some(item => {
            const matchesType = currentFilter === "all" || item.type === currentFilter;
            const matchesSearch = !searchTerm || item.name.toLowerCase().includes(searchTerm);
            return matchesType && matchesSearch;
        });
        if (hasMatchingItem) {
            openRegion(regionName);
        }
    });
}

// ==================== TOGGLES ====================
function toggleItem(itemId) {
    progress[itemId] = !progress[itemId];
    localStorage.setItem("ootProgress", JSON.stringify(progress));
    updateProgress();
}

function toggleDungeon(dungeonName) {
    progress[`dungeon_${dungeonName}`] = !progress[`dungeon_${dungeonName}`];
    localStorage.setItem("ootProgress", JSON.stringify(progress));
    updateProgress();
}

function updateProgress() {
    let skulls = 0, hearts = 0, songs = 0, fairies = 0, beans = 0, total = 0, completed = 0, dungeonsDone = 0;

    Object.values(regions).forEach(region => {
        region.forEach(item => {
            total++;
            if (progress[item.id]) {
                completed++;
                if (item.type === "goldSkulltula") skulls++;
                if (item.type === "heartPiece") hearts++;
                if (item.type === "song") songs++;
                if (item.type === "greatFairy") fairies++;
                if (item.type === "magicBean") beans++;
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
