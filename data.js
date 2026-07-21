const regions = {
    "Kokiri Forest": [
        { id: "KF_GS_17", type: "goldSkulltula", name: "Casa dos Irmãos Sábios", age: "child", time: "night", note: "Skulltula #17 - Atrás da casa dos Know-It-All Brothers, no lado sudoeste da vila. Só aparece à noite." },
        { id: "KF_MB_03", type: "magicBean", name: "Feijão atrás da Loja", age: "child", time: "any", note: "Feijão Mágico #3 - No mesmo solo macio ao lado da Kokiri Shop. A planta faz um passeio pela vila e termina perto de 26 Rupees — divertido, mas não vale muito o custo do feijão." },
        { id: "KF_GS_20", type: "goldSkulltula", name: "Atrás da Loja Kokiri", age: "child", time: "any", note: "Skulltula #20 - Bem atrás da Kokiri Shop tem um trecho de solo macio. Solte bugs de garrafa nele." },
        { id: "KF_GS_47", type: "goldSkulltula", name: "Acima da Casa dos Gêmeos", age: "adult", time: "night", note: "Skulltula #47 - Acima da Twins' House, no lado sudeste da vila. Só à noite; use o Hookshot pra derrotá-la." }
    ],

    "Lost Woods": [
        { id: "LW_MB_04", type: "magicBean", name: "Feijão Entrada Esquerda", age: "child", time: "any", note: "Feijão Mágico #4 - No mesmo solo macio de entrada esquerda-esquerda. A planta cria um atalho mais rápido da Lost Woods até Hyrule Field, útil no minuto contado da Trading Sequence do Odd Mushroom." },
        { id: "LW_GS_18", type: "goldSkulltula", name: "Solo Macio Entrada Esquerda", age: "child", time: "any", note: "Skulltula #18 - Da entrada da Lost Woods, vá à esquerda e depois esquerda de novo. Solte bugs de garrafa no solo macio." },
        { id: "LW_MB_05", type: "magicBean", name: "Feijão Sacred Forest Meadow", age: "child", time: "any", note: "Feijão Mágico #5 - Mesmo solo macio da Sacred Forest Meadow (perto do Business Scrub). É a planta que leva à Skulltula #48, no alto, à noite." },
        { id: "LW_GS_19", type: "goldSkulltula", name: "Solo Macio Sacred Forest Meadow", age: "child", time: "any", note: "Skulltula #19 - Da entrada, siga direita, esquerda, direita, esquerda, esquerda até chegar na Sacred Forest Meadow. Solte bugs no solo macio." },
        { id: "LW_GS_48", type: "goldSkulltula", name: "Plataforma de Magic Bean", age: "adult", time: "night", note: "Skulltula #48 - Na Sacred Forest Meadow. Plante um Magic Bean como criança e volte à noite; suba na planta e derrote a Skulltula no topo." },
        { id: "LW_GS_49", type: "goldSkulltula", name: "Parede Sacred Forest Meadow", age: "adult", time: "night", note: "Skulltula #49 - Na Sacred Forest Meadow, suba a escada até a borda mais alta e olhe para a parede leste. Só à noite; use o Hookshot." },

        { id: "LW_HP_07", type: "heartPiece", name: "Jogo da Memória Ocarina", age: "child", time: "any", note: "Heart Piece #7 - Como criança, entre na Lost Woods e vá à direita, depois pule para a área mais baixa. Suba no toco pra chamar os Skull Kids e toque 3 músicas seguidas junto com eles no jogo de memória." },
        { id: "LW_HP_08", type: "heartPiece", name: "Skull Kid com Canção de Saria", age: "child", time: "any", note: "Heart Piece #8 - Como criança, entre na Lost Woods e vá à esquerda. Suba no toco e toque a Saria's Song para o Skull Kid em cima da árvore." },

        { id: "LW_SG_01", type: "song", name: "Canção de Saria", age: "child", time: "any", note: "Aprendida diretamente com Saria na Sacred Forest Meadow." },
        { id: "LW_SG_02", type: "song", name: "Minueto da Floresta", age: "adult", time: "any", note: "Ensinada pelo Sheik na Sacred Forest Meadow, logo depois que Link se torna adulto e retorna lá." }
    ],

    "Hyrule Field": [
        { id: "HF_GS_39", type: "goldSkulltula", name: "Gruta perto de Gerudo Valley", age: "child", time: "any", note: "Skulltula #39 - No extremo oeste do campo, perto da entrada de Gerudo Valley, há um círculo de pedras. Bombardeie o centro para revelar uma gruta; use Din's Fire para queimar as teias, encontre a vaca e a Skulltula atrás dela; pegue o token com o Boomerang." },
        { id: "HF_GS_42", type: "goldSkulltula", name: "Gruta perto de Kakariko", age: "child", time: "any", note: "Skulltula #42 - Perto da entrada de Kakariko Village, ao norte da pontezinha entre lá e a Market, há uma árvore que revela uma gruta com uma Big Skulltula e a Gold Skulltula mais alta na parede." },

        { id: "HF_HP_14", type: "heartPiece", name: "Gruta do Business Scrub", age: "child", time: "any", note: "Heart Piece #14 - No canto sudoeste do campo, antes da entrada de Lake Hylia, há quatro cercas formando um quadrado. Jogue uma bomba no centro para revelar um buraco e compre o Heart Piece do Business Scrub por 10 Rupees." },
        { id: "HF_HP_25", type: "heartPiece", name: "Gruta Submersa", age: "adult", time: "any", note: "Heart Piece #25 - Noroeste de Lon Lon Ranch, entre Gerudo Valley e Hyrule Castle, há uma árvore isolada. Coloque uma bomba ao lado dela para revelar um buraco; mergulhe fundo com Iron Boots ou Golden Scale para pegar o item." }
    ],

    "Lon Lon Ranch": [
        { id: "LLR_GS_12", type: "goldSkulltula", name: "Árvore da Entrada", age: "child", time: "any", note: "Skulltula #12 - Logo depois de entrar no rancho, passe os primeiros prédios e vire à esquerda. Role na árvore que encontrar." },
        { id: "LLR_GS_13", type: "goldSkulltula", name: "Parede Sudeste do Curral", age: "child", time: "night", note: "Skulltula #13 - Na parede externa do curral, no canto sudeste, atrás das tábuas de madeira. Só aparece à noite." },
        { id: "LLR_GS_37", type: "goldSkulltula", name: "Janela da Casa de Talon", age: "child", time: "night", note: "Skulltula #37 - À noite, na janela do prédio à esquerda (casa de Talon). Derrote-a e use o Boomerang para pegar o token." },
        { id: "LLR_GS_38", type: "goldSkulltula", name: "Parede dos Fundos", age: "child", time: "night", note: "Skulltula #38 - À noite, no extremo sudoeste do rancho, numa borda mais alta. Use o Boomerang para recolher o token." },

        { id: "LLR_HP_03", type: "heartPiece", name: "Buraco no Silo", age: "child", time: "any", note: "Heart Piece #3 - Como criança, entre no prédio de armazenamento no fundo do rancho, empurre as caixas para abrir caminho até o canto e entre no buraco pequeno que leva a um ninho com o Heart Piece." },

        { id: "LLR_SG_01", type: "song", name: "Canção de Epona", age: "child", time: "any", note: "Aprendida com Malon em Lon Lon Ranch, tocando junto com ela." }
    ],

    "Market": [
        { id: "MK_GS_04", type: "goldSkulltula", name: "Caixa na Casa da Guarda", age: "child", time: "any", note: "Skulltula #4 - Depois de atravessar a ponte levadiça, entre na Guard House antes da Market. Role numa caixa de madeira no fundo da sala." },

        { id: "MK_HP_09", type: "heartPiece", name: "Cachorro da Mamamu Yan", age: "child", time: "night", note: "Heart Piece #9 - À noite, encontre o cachorro branco perto de uma banca azul na Market (perto da saída para Hyrule Field), faça-o te seguir e leve-o até Mamamu Yan no Back Alley." },
        { id: "MK_HP_13", type: "heartPiece", name: "Bombchu Bowling", age: "child", time: "any", note: "Heart Piece #13 - Jogue no Bombchu Bowling Alley durante o dia; os prêmios giram em ciclo (Bombchu, Heart Piece, Bombs, Bomb Bag, Rupia roxa)." },
        { id: "MK_HP_33", type: "heartPiece", name: "Jogo dos Baús", age: "child", time: "night", note: "Heart Piece #33 - No Treasure Chest Shop, aberto só à noite, 10 Rupees por tentativa. Com a Lens of Truth dá para ver dentro dos baús e escolher sempre os de Small Key até chegar ao fim." }
    ],

    "Hyrule Castle": [
        { id: "HC_GS_05", type: "goldSkulltula", name: "Árvore do Castelo", age: "child", time: "any", note: "Skulltula #5 - No caminho até Hyrule Castle há uma árvore solitária. Role nela para a Skulltula aparecer." },
        { id: "HC_GS_78", type: "goldSkulltula", name: "Gruta da Canção das Tempestades", age: "child", time: "any", note: "Skulltula #78 - Depois de aprender a Song of Storms, volte ao caminho de Hyrule Castle. Há uma árvore no canto do portão; toque a música ao lado dela para abrir um buraco, e bombardeie a parede à esquerda lá dentro." },

        { id: "HC_SG_01", type: "song", name: "Canção de Ninar de Zelda", age: "child", time: "any", note: "Aprendida com Impa, logo depois de conhecer a Princesa Zelda no castelo." },

        { id: "HC_GF_01", type: "greatFairy", name: "Grande Fada do Poder", age: "child", time: "any", note: "Gruta bombável perto da entrada de Hyrule Castle; use Spin Attack + o medidor de magia para o boost de ataque." }
    ],

    "Kakariko Village": [
        { id: "KV_GS_07", type: "goldSkulltula", name: "Local da Construção", age: "child", time: "night", note: "Skulltula #7 - No prédio em construção no centro da vila. Só aparece à noite." },
        { id: "KV_GS_08", type: "goldSkulltula", name: "Lado da Casa das Skulltulas", age: "child", time: "night", note: "Skulltula #8 - Ao lado da House of Skulltula. Só à noite." },
        { id: "KV_GS_09", type: "goldSkulltula", name: "Árvore da Entrada", age: "child", time: "night", note: "Skulltula #9 - Bem na entrada da vila, role na árvore em frente. Só à noite." },
        { id: "KV_GS_10", type: "goldSkulltula", name: "Torre de Guarda", age: "child", time: "night", note: "Skulltula #10 - No alto da torre de vigia. Só à noite; use o Estilingue pra derrubá-la." },
        { id: "KV_GS_11", type: "goldSkulltula", name: "Casa perto do Portão", age: "child", time: "night", note: "Skulltula #11 - Na lateral da casa mais próxima do portão que leva a Death Mountain. Só à noite." },
        { id: "KV_GS_45", type: "goldSkulltula", name: "Telhado da Casa de Impa", age: "adult", time: "night", note: "Skulltula #45 - Suba no telhado da House of Skulltula com o Hookshot e depois no telhado da casa de Impa, ao sul da vila. Só à noite." },

        { id: "KV_HP_12", type: "heartPiece", name: "Vaca na Casa de Impa", age: "child", time: "any", note: "Heart Piece #12 - Suba no telhado acima do curral de Cuccos atrás da casa de Impa (jogue um Cucco pelas bordas do canteiro de obras, ou use a coruja como criança / o Hookshot como adulto), pule para o lado leste e entre no buraco na parede." },
        { id: "KV_HP_19", type: "heartPiece", name: "Platô do Moinho", age: "child", time: "any", note: "Heart Piece #19 - Dentro do moinho, sobre uma plataforma móvel. Dá pra pegar como adulto depois de correr contra Dampé, ou como criança com o Boomerang." },
        { id: "KV_HP_21", type: "heartPiece", name: "Telhado da Loja de Poções", age: "adult", time: "any", note: "Heart Piece #21 - Como adulto, use o Hookshot para subir no telhado da Granny's Potion Shop e fale com quem está lá em cima. Também dá para chegar como criança, escalando a torre de vigia e pulando na cerca." },
        { id: "KV_HP_22", type: "heartPiece", name: "Recompensa de 50 Skulltulas", age: "any", time: "any", note: "Heart Piece #22 - Colete 50 Gold Skulltulas e resgate a recompensa na House of Skulltula." },

        { id: "KV_SG_01", type: "song", name: "Canção das Tempestades", age: "adult", time: "any", note: "Aprendida com o Guru-Guru dentro do moinho de Kakariko Village." }
    ],

    "Graveyard": [
        { id: "GY_MB_02", type: "magicBean", name: "Feijão do Graveyard", age: "child", time: "any", note: "Feijão Mágico #2 - No mesmo solo macio à esquerda do Graveyard, perto das lápides. A planta sobe reto até uma borda mais alta, de onde dá pra rolar na caixa com o Heart Piece #18." },
        { id: "GY_GS_06", type: "goldSkulltula", name: "Solo Macio", age: "child", time: "any", note: "Skulltula #6 - No lado esquerdo do Graveyard há solo macio. Solte bugs de garrafa para a Skulltula aparecer." },
        { id: "GY_GS_43", type: "goldSkulltula", name: "Parede Sudeste", age: "child", time: "night", note: "Skulltula #43 - Na parede do canto sudeste do Graveyard. Só à noite; use o Boomerang para pegar o token." },

        { id: "GY_HP_01", type: "heartPiece", name: "Túmulo da Família Real", age: "child", time: "any", note: "Heart Piece #1 - Requer a Sun's Song. No Royal Family's Tomb, vire de costas para a saída; das cinco lápides à esquerda, puxe a segunda a partir da direita e desça. Derrote o ReDead lá embaixo (congele-o com a Sun's Song primeiro), suba de novo e toque a música mais uma vez para o baú aparecer." },
        { id: "GY_HP_02", type: "heartPiece", name: "Escavação de Dampé", age: "child", time: "night", note: "Heart Piece #2 - Volte ao Graveyard entre 18h e 21h e jogue o Heart-Pounding Gravedigging Tour com Dampé por 10 Rupees a tentativa. É aleatório, pode levar várias rodadas até sair o Heart Piece." },
        { id: "GY_HP_18", type: "heartPiece", name: "Caixa de Magic Bean", age: "adult", time: "any", note: "Heart Piece #18 - Como criança, plante um Magic Bean no solo macio do lado esquerdo do Graveyard. Volte como adulto, suba na planta e role na caixa de madeira lá em cima." },
        { id: "GY_HP_20", type: "heartPiece", name: "Corrida de Dampé <1min", age: "adult", time: "any", note: "Heart Piece #20 - Depois de já ter pego o Hookshot em Dampé's Crypt, corra contra o fantasma de Dampé de novo e complete a corrida em menos de 1 minuto. O Longshot ajuda a cortar caminho perto do fim." },

        { id: "GY_SG_01", type: "song", name: "Canção do Sol", age: "child", time: "any", note: "Aprendida automaticamente ao se aproximar da inscrição no Royal Family's Tomb, no Graveyard." },
        { id: "GY_SG_02", type: "song", name: "Nocturno das Sombras", age: "adult", time: "night", note: "Ensinada pelo Sheik no Graveyard, à noite, em frente à entrada escondida do Shadow Temple." }
    ],

    "Death Mountain Trail": [
        { id: "DMT_MB_06", type: "magicBean", name: "Feijão em frente à Dodongo's", age: "child", time: "any", note: "Feijão Mágico #6 - No mesmo solo macio em frente à Dodongo's Cavern. A planta sobe até uma borda com o Heart Piece #26 e agiliza o acesso a Goron City." },
        { id: "DMT_GS_21", type: "goldSkulltula", name: "Solo Macio perto de Dodongo", age: "child", time: "any", note: "Skulltula #21 - Logo na frente da entrada da Dodongo's Cavern há solo macio. Solte bugs de garrafa nele." },
        { id: "DMT_GS_25", type: "goldSkulltula", name: "Parede Bombável", age: "child", time: "any", note: "Skulltula #25 - No trajeto entre Kakariko Village e a Dodongo's Cavern há uma parede bombável de onde dá pra ouvir a Skulltula. Bombardeie, derrote-a e escale a parede para pegar o token." },
        { id: "DMT_GS_63", type: "goldSkulltula", name: "Parede do Martelo Megaton", age: "adult", time: "any", note: "Skulltula #63 - Na área onde caíam pedregulhos quando você era criança há três rochas indestrutíveis a bomba. A mais próxima do topo esconde a Skulltula; à noite, quebre a rocha com o Martelo Megaton." },
        { id: "DMT_GS_64", type: "goldSkulltula", name: "Alcova do Martelo Megaton", age: "adult", time: "any", note: "Skulltula #64 - Perto da entrada de Goron City há um pedregulho logo acima da Dodongo's Cavern. Quebre-o com o Martelo Megaton para revelar a Skulltula escondida atrás." },

        { id: "DMT_HP_26", type: "heartPiece", name: "Platô de Magic Bean acima de Dodongo", age: "adult", time: "any", note: "Heart Piece #26 - Como criança, plante um Magic Bean no solo macio na entrada da Dodongo's Cavern. Volte como adulto e suba na planta até a plataforma acima da caverna." },

        { id: "DMT_GF_01", type: "greatFairy", name: "Grande Fada do Poder", age: "child", time: "any", note: "Gruta bombável no topo da montanha; use Spin Attack + o medidor de magia para o boost de dano." }
    ],

    "Goron City": [
        { id: "GC_GS_26", type: "goldSkulltula", name: "Caixa após as Pedras", age: "child", time: "any", note: "Skulltula #26 - Bombardeie as três pedras à esquerda, depois as da direita, e role na caixa de madeira no fundo da sala." },
        { id: "GC_GS_56", type: "goldSkulltula", name: "Atrás do Pedestal de Darunia", age: "adult", time: "any", note: "Skulltula #56 - Atravesse as cordas bambas logo na entrada e vá até o pedestal no topo da cidade; a Skulltula está atrás dele." },

        { id: "GC_HP_10", type: "heartPiece", name: "Vaso Giratório", age: "child", time: "any", note: "Heart Piece #10 - Depois de conseguir a Goron's Bracelet, acenda todas as tochas do andar mais baixo (com Deku Stick ou Din's Fire) para o vaso com rosto de Goron começar a girar. Jogue Bombs ou Bomb Flowers nele quando o rosto virado pra você estiver sorrindo." }
    ],

    "Death Mountain Crater": [
        { id: "DMC_MB_09", type: "magicBean", name: "Feijão perto do Pedestal", age: "child", time: "any", note: "Feijão Mágico #9 - Perto do Triforce Pedestal, no centro do Crater. Só dá pra plantar depois de aprender a Bolero of Fire (para dar warp como criança). A planta leva ao Heart Piece #27, numa colina fumegante, e também ao Heart Piece #11, do outro lado da lava." },
        { id: "DMC_GS_27", type: "goldSkulltula", name: "Caixa na Entrada", age: "child", time: "any", note: "Skulltula #27 - Logo na entrada do Death Mountain Crater há uma caixa de madeira. Role nela." },
        { id: "DMC_GS_57", type: "goldSkulltula", name: "Solo Macio (Warp Criança)", age: "child", time: "any", note: "Skulltula #57 - Depois de aprender a Bolero of Fire, dê warp para o Crater como criança e solte bugs de garrafa no solo macio." },

        { id: "DMC_HP_11", type: "heartPiece", name: "Alcova na Parede Escalável", age: "any", time: "any", note: "Heart Piece #11 - A parede que leva à grande área de entrada é escalável e tem uma alcova com o Heart Piece. Como criança, corra reto até a borda para descer escalando automaticamente; funciona também como adulto." },
        { id: "DMC_HP_27", type: "heartPiece", name: "Platô de Magic Bean na Colina Fumegante", age: "adult", time: "any", note: "Heart Piece #27 - Como criança, plante um Magic Bean perto do Triforce Pedestal no centro do Crater. Volte como adulto e suba na planta até uma das colinas fumegantes." },

        { id: "DMC_SG_01", type: "song", name: "Bolero do Fogo", age: "adult", time: "any", note: "Aprendida com Sheik no Death Mountain Crater." },

        { id: "DMC_GF_01", type: "greatFairy", name: "Grande Fada da Sabedoria", age: "adult", time: "any", note: "Dobra o medidor de magia; encontrada no Death Mountain Crater." }
    ],

    "Zora's River": [
        { id: "ZR_MB_01", type: "magicBean", name: "Feijão do Vendedor", age: "child", time: "any", note: "Feijão Mágico #1 - Na entrada de Zora's River, bem ao lado do Bean Seller. Como adulto, a planta ajuda a chegar mais rápido em Zora's Domain e no alto do rio (onde há Heart Piece e Gold Skulltula, mas dá pra pegar sem o feijão)." },
        { id: "ZR_GS_28", type: "goldSkulltula", name: "Árvore da Entrada", age: "child", time: "any", note: "Skulltula #28 - Na entrada de Zora's River, role na primeira árvore que encontrar." },
        { id: "ZR_GS_29", type: "goldSkulltula", name: "Escada na Cachoeira", age: "child", time: "night", note: "Skulltula #29 - Perto da Sleepless Waterfall, no fim do rio, há uma escada saindo da água. Só à noite; use o Estilingue." },
        { id: "ZR_GS_65", type: "goldSkulltula", name: "Hookshot Rio Superior", age: "adult", time: "night", note: "Skulltula #65 - Alta na parede sul do rio; suba na planta de Magic Bean (se plantada) ou nade até a escada mais a leste. Só à noite; use o Hookshot." },
        { id: "ZR_GS_66", type: "goldSkulltula", name: "Hookshot Rio Inferior", age: "adult", time: "night", note: "Skulltula #66 - Depois da pontezinha, a caminho de Zora's Domain, alta numa parede. Pule na cerca para alcançá-la; só à noite; use o Hookshot." },

        { id: "ZR_HP_15", type: "heartPiece", name: "Pilar Central", age: "child", time: "any", note: "Heart Piece #15 - Num pilar no centro de Zora's River. Use o Cucco do começo da área, o Boomerang como criança, ou as Hover Boots como adulto." },
        { id: "ZR_HP_16", type: "heartPiece", name: "Plataforma perto do Domínio", age: "child", time: "any", note: "Heart Piece #16 - Perto da Sleepless Waterfall, entrada de Zora's Domain, há uma plataforma no canto. Mesmas opções do #15 (Cucco, Boomerang ou Hover Boots)." },
        { id: "ZR_HP_31", type: "heartPiece", name: "Sapos - Canção das Tempestades", age: "child", time: "any", note: "Heart Piece #31 - Como criança, pise no tronco central do rio para chamar 5 sapos e toque a Song of Storms para eles." },
        { id: "ZR_HP_32", type: "heartPiece", name: "Sapos - Jogo Simon Says", age: "child", time: "any", note: "Heart Piece #32 - Com os 5 sapos, toque Zelda's Lullaby, Saria's Song, Epona's Song, Sun's Song e Song of Time para fazê-los crescer, depois complete o jogo de Simon Says que aparece." }
    ],

    "Zora's Domain": [
        { id: "ZD_GS_67", type: "goldSkulltula", name: "Cachoeira Congelada", age: "adult", time: "night", note: "Skulltula #67 - Perto do topo da cachoeira congelada; vá até a sala do trono do Rei Zora e olhe para a esquerda na borda. Só aparece à noite." },
        { id: "ZD_HP_17", type: "heartPiece", name: "Acenda Todas as Tochas", age: "child", time: "any", note: "Heart Piece #17 - Acenda as 5 tochas de Zora's Domain em sequência (sala do trono, rampa em espiral, perto da loja, canto norte e as duas atrás da cachoeira) para o baú aparecer." }
    ],

    "Zora's Fountain": [
        { id: "ZF_GS_30", type: "goldSkulltula", name: "Árvore Sudeste", age: "child", time: "any", note: "Skulltula #30 - No canto sudeste de Zora's Fountain, role na árvore solitária." },
        { id: "ZF_GS_35", type: "goldSkulltula", name: "Tronco Sul de Jabu-Jabu", age: "child", time: "night", note: "Skulltula #35 - Fique sobre o tronco ao sul de Lord Jabu-Jabu. Só à noite; use o Boomerang." },
        { id: "ZF_GS_100", type: "goldSkulltula", name: "Área das Luvas Prateadas", age: "adult", time: "night", note: "Skulltula #100 - À noite, no canto sudeste onde ficava a Great Fairy, levante a pedra prateada com as Silver Gauntlets e bombardeie o pedregulho comum embaixo. Use a Lens of Truth para navegar pela passagem." },

        { id: "ZF_HP_28", type: "heartPiece", name: "Iceberg (Adulto)", age: "adult", time: "any", note: "Heart Piece #28 - Quando você volta como adulto, Zora's Domain fica cheia de icebergs flutuantes. Pule entre eles até encontrar o Heart Piece em cima de um." },
        { id: "ZF_HP_30", type: "heartPiece", name: "Fundo com Iron Boots", age: "adult", time: "any", note: "Heart Piece #30 - No fundo de Zora's Fountain; use as Iron Boots para afundar até o chão e pegar o item." },

        { id: "ZF_GF_01", type: "greatFairy", name: "Grande Fada da Magia", age: "child", time: "any", note: "Concede a magia de Farore's Wind." }
    ],

    "Lake Hylia": [
        { id: "LH_MB_07", type: "magicBean", name: "Feijão perto do Laboratório", age: "child", time: "any", note: "Feijão Mágico #7 - No mesmo solo macio perto do Lakeside Laboratory. A planta sobe até o telhado (Heart Piece #23) e leva até o Fishing Pond — mas ambos também dão pra alcançar com a Scarecrow's Song, então é opcional." },
        { id: "LH_GS_15", type: "goldSkulltula", name: "Solo Macio do Laboratório", age: "child", time: "any", note: "Skulltula #15 - Perto do Lakeside Laboratory, no canto noroeste do lago, há solo macio. Solte bugs de garrafa." },
        { id: "LH_GS_16", type: "goldSkulltula", name: "Ilha Sudeste", age: "child", time: "night", note: "Skulltula #16 - Numa ilha no canto sudeste do lago. Só aparece à noite." },
        { id: "LH_GS_41", type: "goldSkulltula", name: "Ponte perto do Laboratório", age: "child", time: "night", note: "Skulltula #41 - Na ponte perto do Lakeside Laboratory, no lado noroeste. Só à noite; use o Boomerang." },
        { id: "LH_GS_71", type: "goldSkulltula", name: "Laboratório com Iron Boots", age: "adult", time: "any", note: "Skulltula #71 - Dentro do Lakeside Laboratory, use as Iron Boots para afundar até o fundo da piscina pequena e role numa caixa de madeira." },
        { id: "LH_GS_77", type: "goldSkulltula", name: "Topo da Árvore Longshot", age: "adult", time: "night", note: "Skulltula #77 - Depois de conseguir o Longshot, suba na árvore da ilha logo acima da entrada do Water Temple. Só à noite." },

        { id: "LH_HP_06", type: "heartPiece", name: "Pesca 10 Libras", age: "child", time: "any", note: "Heart Piece #6 - No Fishing Pond, como criança, pesque um peixe de pelo menos 10 libras e mostre ao dono do lugar." },
        { id: "LH_HP_23", type: "heartPiece", name: "Telhado do Laboratório", age: "adult", time: "any", note: "Heart Piece #23 - No topo do Lakeside Laboratory. Plante um Magic Bean e suba nele, ou use a Scarecrow's Song seguida do Hookshot." },
        { id: "LH_HP_24", type: "heartPiece", name: "Mergulho no Laboratório", age: "adult", time: "any", note: "Heart Piece #24 - Depois de ganhar a Golden Scale no Fishing Pond, entre no Lakeside Laboratory e mergulhe o mais fundo possível; volte e fale com o cientista para receber a recompensa." },

        { id: "LH_SG_01", type: "song", name: "Serenata da Água", age: "adult", time: "any", note: "Aprendida com Sheik em Lake Hylia." }
    ],

    "Gerudo Valley": [
        { id: "GV_MB_08", type: "magicBean", name: "Feijão perto do Rio", age: "child", time: "any", note: "Feijão Mágico #8 - No mesmo solo macio perto do rio, onde ficam a Gerudo e a vaca. A planta atravessa a água coletando rupees e termina atrás da cachoeira grande, perto do Heart Piece #4 (também alcançável nadando e escalando)." },
        { id: "GV_GS_14", type: "goldSkulltula", name: "Solo Macio com Cucco", age: "child", time: "any", note: "Skulltula #14 - Pegue um Cucco e pule na água abaixo do vale. No lado oeste, perto de uma Gerudo, há solo macio; solte bugs de garrafa." },
        { id: "GV_GS_40", type: "goldSkulltula", name: "Buraco na Cachoeira", age: "child", time: "night", note: "Skulltula #40 - Na rampa de madeira logo na entrada do vale, vire à direita: há água saindo de um buraco na parede. Só aparece à noite." },
        { id: "GV_GS_87", type: "goldSkulltula", name: "Plataforma Longshot / Epona", age: "adult", time: "night", note: "Skulltula #87 - Atrás da tenda dos Carpinteiros. Só à noite; use o Longshot (ou chegue com a Epona)." },
        { id: "GV_GS_88", type: "goldSkulltula", name: "Parede Longshot / Epona", age: "adult", time: "night", note: "Skulltula #88 - Depois de atravessar a ponte, há um arco à esquerda; olhe para cima. Só à noite; use o Longshot (ou a Epona)." },

        { id: "GV_HP_04", type: "heartPiece", name: "Alcova da Cachoeira", age: "child", time: "any", note: "Heart Piece #4 - No centro da grande cachoeira ao norte do vale há uma alcova com o item; suba pela escada, usando o Cucco (criança) ou pulando da margem Gerudo (adulto)." },
        { id: "GV_HP_05", type: "heartPiece", name: "Caixote na Plataforma", age: "child", time: "any", note: "Heart Piece #5 - Na ponte, olhando para o lado Gerudo, há uma plataforma com um caixote encostado na parede. Use o Cucco (criança) ou o Longshot (adulto) para chegar até lá." }
    ],

    "Gerudo Fortress": [
        { id: "GF_GS_89", type: "goldSkulltula", name: "Área do Telhado", age: "adult", time: "night", note: "Skulltula #89 - Perto do topo da fortaleza, contra a parede do fundo. Só à noite; use o Longshot." },
        { id: "GF_GS_90", type: "goldSkulltula", name: "Campo de Tiro com Arco", age: "adult", time: "night", note: "Skulltula #90 - No Horseback Archery Range, no alvo do fim da pista. Só à noite; use o Longshot." },

        { id: "GF_HP_34", type: "heartPiece", name: "Baú do Topo", age: "adult", time: "any", note: "Heart Piece #34 - No topo da fortaleza há um baú grande. Suba pelas vinhas até o ponto mais alto, toque a Scarecrow's Song para o Pierre aparecer e use o Hookshot para atravessar (ou o Longshot para pegar o baú direto)." },
        { id: "GF_HP_35", type: "heartPiece", name: "Tiro com Arco a Cavalo 1000+", age: "adult", time: "any", note: "Heart Piece #35 - Depois de resgatar todos os carpinteiros e ganhar o Gerudo Token, jogue o Horseback Archery com a Epona e faça mais de 1000 pontos." }
    ],

    "Haunted Wasteland": [
        { id: "HW_GS_91", type: "goldSkulltula", name: "Perto do Colossus", age: "adult", time: "any", note: "Skulltula #91 - No meio do Haunted Wasteland há uma estrutura solitária. Desça até a câmara abaixo dela; a Skulltula está entre duas tochas." }
    ],

    "Desert Colossus": [
        { id: "DC_MB_10", type: "magicBean", name: "Feijão na Entrada do Spirit Temple", age: "adult", time: "any", note: "Feijão Mágico #10 - No mesmo solo macio perto da entrada do Spirit Temple, mas só dá pra plantar depois de aprender a Requiem of Spirit (como adulto). A planta passa pela Skulltula #94, numa duna, e pelo Heart Piece #36, no arco de pedra em frente ao templo." },
        { id: "DC_GS_92", type: "goldSkulltula", name: "Solo Macio com Bugs", age: "child", time: "any", note: "Skulltula #92 - Como criança, logo na entrada do Spirit Temple há solo macio. Solte bugs de garrafa." },
        { id: "DC_GS_93", type: "goldSkulltula", name: "Magic Bean à Noite", age: "adult", time: "night", note: "Skulltula #93 - Suba numa planta de Magic Bean até uma pedra grande no centro-norte da área e toque a Sun's Song para virar noite; a Skulltula aparece ali." },
        { id: "DC_GS_94", type: "goldSkulltula", name: "Topo da Palmeira Longshot", age: "adult", time: "night", note: "Skulltula #94 - Perto do oásis, no sul do Desert Colossus, no topo de uma das palmeiras. Só à noite; use o Longshot." },

        { id: "DC_GF_01", type: "greatFairy", name: "Nayru's Love", age: "adult", time: "any", note: "Grande Fada que concede a magia Nayru's Love." },

        { id: "DC_HP_36", type: "heartPiece", name: "Platô de Magic Bean", age: "adult", time: "any", note: "Heart Piece #36 - Como criança, plante um Magic Bean no solo macio perto da entrada do Spirit Temple. Volte como adulto e suba na planta; perto do fim do trajeto ela passa por uma plataforma tipo Stonehenge com o item." },

        { id: "DC_SG_01", type: "song", name: "Réquiem do Espírito", age: "adult", time: "any", note: "Aprendida com Sheik no Desert Colossus." }
    ],

    // === DUNGEONS ===
    "Deku Tree": [
        { id: "DT_GS_01", type: "goldSkulltula", name: "Sala da Bússola", age: "child", time: "any", note: "Skulltula #1 - Na sala com a Bússola, levante as plataformas e use-as para chegar na plataforma do lado esquerdo. A Skulltula está logo atrás do baú do tesouro." },
        { id: "DT_GS_02", type: "goldSkulltula", name: "Vinhas após a Teia", age: "child", time: "any", note: "Skulltula #2 - Depois de romper a teia de aranha e descer para o andar de baixo, olhe para trás, para as vinhas que sobem. Use o Estilingue para derrubar a Skulltula." },
        { id: "DT_GS_03", type: "goldSkulltula", name: "Sala da Grade", age: "child", time: "any", note: "Skulltula #3 - Na mesma sala do #2, olhe para a grade no lado norte para encontrar outra Skulltula." },
        { id: "DT_GS_36", type: "goldSkulltula", name: "Sala Escondida do Boomerang", age: "child", time: "any", note: "Skulltula #36 - No primeiro subsolo, canto noroeste, há uma sala nunca visitada antes. Queime a teia e bombardeie a pedra que bloqueia a entrada; a Skulltula está na parede, use o Boomerang." }
    ],

    "Dodongo's Cavern": [
        { id: "DC_GS_22", type: "goldSkulltula", name: "Topo da Escada", age: "child", time: "any", note: "Skulltula #22 - Na sala com a escada gigante, suba até o topo e vá para o lado sul da sala. Derrote a Skulltula com o Estilingue e escale para pegar o token." },
        { id: "DC_GS_23", type: "goldSkulltula", name: "Sala dos Baby Dodongo", age: "child", time: "any", note: "Skulltula #23 - Da entrada da masmorra, siga pela porta sudeste até a sala dos Baby Dodongos. Bombardeie a parede para revelar outra sala com a Skulltula." },
        { id: "DC_GS_24", type: "goldSkulltula", name: "Sala dos Fire Keese", age: "child", time: "any", note: "Skulltula #24 - Na sala dos Fire Keese, perto do fim da masmorra, há uma parede bombável ao norte. Atrás da estátua Armos está a Skulltula." },
        { id: "DC_GS_44", type: "goldSkulltula", name: "Escada Escondida", age: "child", time: "any", note: "Skulltula #44 - Na sala da escada gigante, mas sem abaixá-la (entre pela porta do 2º andar). No topo da escada há um cubículo escondido; use o Boomerang (criança) ou o Hookshot (adulto)." },
        { id: "DC_GS_55", type: "goldSkulltula", name: "Platô da Canção do Espantalho", age: "adult", time: "any", note: "Skulltula #55 - Reentre na masmorra e vá até a sala dos Baby Dodongos; quando a Navi ficar verde, toque a Scarecrow's Song para o Pierre aparecer e use o Hookshot para alcançar a Skulltula." }
    ],

    "Jabu-Jabu's Belly": [
        { id: "JB_GS_31", type: "goldSkulltula", name: "Sala do Interruptor", age: "child", time: "any", note: "Skulltula #31 - Depois de resgatar a Ruto e cair, leve-a até a sala com o interruptor de chão. A Skulltula está na parede lateral; use o Estilingue." },
        { id: "JB_GS_32", type: "goldSkulltula", name: "Andar Inferior Parede Próxima", age: "child", time: "any", note: "Skulltula #32 - Na segunda vez que você cai para o andar de baixo, há duas Skulltulas na parede. Derrote-as e use o Boomerang na mais próxima." },
        { id: "JB_GS_33", type: "goldSkulltula", name: "Andar Inferior Parede Distante", age: "child", time: "any", note: "Skulltula #33 - Na mesma sala do #32, use o Boomerang para pegar o token da Skulltula mais distante." },
        { id: "JB_GS_34", type: "goldSkulltula", name: "Vinhas antes do Boss", age: "child", time: "any", note: "Skulltula #34 - Na sala final antes do boss, a Skulltula está nas vinhas. Derrote-a e pegue o token." }
    ],

    "Forest Temple": [
        { id: "FT_GS_50", type: "goldSkulltula", name: "First Room Vines", age: "adult", time: "any", note: "Skulltula #50 - Na primeira sala do Forest Temple, suba pelas vinhas do lado direito. Use o Hookshot para derrotar a Skulltula." },
        { id: "FT_GS_51", type: "goldSkulltula", name: "Central Room Wall", age: "adult", time: "any", note: "Skulltula #51 - Na sala central grande, corra reto até a porta norte; olhe para a parede à direita para encontrar a Skulltula." },
        { id: "FT_GS_52", type: "goldSkulltula", name: "Courtyard Chest Ledge", age: "adult", time: "any", note: "Skulltula #52 - No pátio a nordeste da sala central há um baú numa borda alta. Use o Hookshot na frente do baú para subir; a Skulltula está logo depois da esquina." },
        { id: "FT_GS_53", type: "goldSkulltula", name: "Courtyard Narrow Platform", age: "adult", time: "any", note: "Skulltula #53 - No pátio a noroeste da sala central, pule para a plataforma estreita com corações de recuperação; olhe para cima na parede para achar a Skulltula." },
        { id: "FT_GS_54", type: "goldSkulltula", name: "Basement before Boss", age: "adult", time: "any", note: "Skulltula #54 - No porão do Forest Temple, na sala do baú, pouco antes da luta contra o boss." }
    ],

    "Fire Temple": [
        { id: "FiT_GS_58", type: "goldSkulltula", name: "Time Block Lava Room", age: "adult", time: "any", note: "Skulltula #58 - Na sala grande de lava com a ponte quebrada, logo no início da masmorra, há um bloco do tempo numa borda mais alta à esquerda. Toque a Song of Time para acessar a sala; derrote os Floor Tiles e o Like Like para achar a Skulltula na parede do fundo." },
        { id: "FiT_GS_59", type: "goldSkulltula", name: "Boulder Maze Bottom", age: "adult", time: "any", note: "Skulltula #59 - No labirinto de pedregulhos, há uma parede bombável no canto nordeste, no andar de baixo, sob a saliência. Bombardeie e derrote a Skulltula." },
        { id: "FiT_GS_60", type: "goldSkulltula", name: "Scarecrow Song Elevator", age: "adult", time: "any", note: "Skulltula #60 - No nível mais alto do labirinto de pedregulhos, depois da sala perseguida por fogo, toque a Scarecrow's Song, use o Hookshot no Pierre e depois no elevador secreto." },
        { id: "FiT_GS_61", type: "goldSkulltula", name: "Like Like Room", age: "adult", time: "any", note: "Skulltula #61 - Pelo mesmo elevador secreto do #60, continue subindo até chegar na sala grande e aberta; olhe para a esquerda perto da borda para achar a Skulltula na parede." },
        { id: "FiT_GS_62", type: "goldSkulltula", name: "Flame Wall Room", age: "adult", time: "any", note: "Skulltula #62 - Na sala logo antes da segunda luta contra o Flare Dancer, bloqueie os Floor Tiles e derrote o Like Like; a Skulltula fica na parede do fundo." }
    ],

    "Water Temple": [
        { id: "WT_GS_72", type: "goldSkulltula", name: "Crystal Switch Floor Room", age: "adult", time: "any", note: "Skulltula #72 - No nível mais baixo da sala principal, pelo caminho sul, bombardeie o chão. Na sala seguinte, pise no interruptor, use o Hookshot no alvo e acerte o cristal para revelar a Skulltula." },
        { id: "WT_GS_73", type: "goldSkulltula", name: "After Draining Water", age: "adult", time: "any", note: "Skulltula #73 - Depois de conseguir o Longshot e passar pela área com redemoinhos, a Skulltula está numa das paredes; use as Iron Boots e o Longshot para pegá-la." },
        { id: "WT_GS_74", type: "goldSkulltula", name: "Hidden Boxes Room", age: "adult", time: "any", note: "Skulltula #74 - Com o Longshot, volte à sala a oeste da câmara principal, no andar mais alto; use o Longshot na parede à direita." },
        { id: "WT_GS_75", type: "goldSkulltula", name: "Central Pillar", age: "adult", time: "any", note: "Skulltula #75 - Dentro do grande pilar central da sala principal; com o Longshot, dá para derrotar a Skulltula bem no topo da sala." },
        { id: "WT_GS_76", type: "goldSkulltula", name: "Longshot Room", age: "adult", time: "any", note: "Skulltula #76 - Pouco antes de pegar a Boss Key, há uma pequena cachoeira escondendo uma Skulltula; fique na borda, olhe para a direita e use o Longshot." }
    ],

    "Shadow Temple": [
        { id: "ST_GS_82", type: "goldSkulltula", name: "Invisible Room", age: "adult", time: "any", note: "Skulltula #82 - Depois do corredor com as guilhotinas, ao encontrar o Stalfos sozinho, siga pelo caminho à esquerda usando a Lens of Truth. Derrote o Like Like e os Keese para destravar o portão e a Skulltula." },
        { id: "ST_GS_83", type: "goldSkulltula", name: "Guillotine Room", age: "adult", time: "any", note: "Skulltula #83 - Na sala dos Falling Spikes, use a Lens of Truth para achar um bloco escondido na parede; empurre-o para travar as duas armadilhas e confira atrás da cerca à esquerda." },
        { id: "ST_GS_84", type: "goldSkulltula", name: "Boat Room", age: "adult", time: "any", note: "Skulltula #84 - Na sala da caveira gigante (onde se joga uma bomba nela para achar uma chave pequena), a Skulltula está escondida atrás de onde a caveira estava." },
        { id: "ST_GS_85", type: "goldSkulltula", name: "Spinning Scythe Room", age: "adult", time: "any", note: "Skulltula #85 - No topo do barco grande em movimento, perto do atalho junto à cerca, toque a Scarecrow's Song e use o Longshot para alcançar a borda com a Skulltula." },
        { id: "ST_GS_86", type: "goldSkulltula", name: "Hidden Wall", age: "adult", time: "any", note: "Skulltula #86 - Na sala das paredes invisíveis, pouco antes de pegar a Boss Key, vá até a sala oeste com três caveiras giratórias; a Skulltula está escondida logo atrás delas." }
    ],

    "Spirit Temple": [
        { id: "SP_GS_95", type: "goldSkulltula", name: "Child Hands Room", age: "child", time: "any", note: "Skulltula #95 - Como criança, na sala encontrada logo no início com cinco Silver Rupees e um Wallmaster. Pegue os Rupees para abaixar a ponte e use o Boomerang na Skulltula." },
        { id: "SP_GS_96", type: "goldSkulltula", name: "Child Statues Room", age: "child", time: "any", note: "Skulltula #96 - Como criança, na sala do quebra-cabeça de Bombchu. Suba a parede onde ficam duas Skulltulas normais, vire-se e olhe para baixo para achar a Gold Skulltula; use o Boomerang." },
        { id: "SP_GS_97", type: "goldSkulltula", name: "Child Mirror Room", age: "child", time: "any", note: "Skulltula #97 - Como criança, no corredor estreito antes da luta contra o Iron Knuckle. Vire-se para a porta por onde você entrou; a Skulltula está logo acima dela." },
        { id: "SP_GS_98", type: "goldSkulltula", name: "Adult Silver Gauntlets", age: "adult", time: "any", note: "Skulltula #98 - Como adulto, na sala com pedregulhos rolantes e cinco Silver Rupees. Toque a Song of Time em frente ao bloco do tempo para achar a Skulltula escondida atrás dele." },
        { id: "SP_GS_99", type: "goldSkulltula", name: "Adult Mirror Room", age: "adult", time: "any", note: "Skulltula #99 - Como adulto, na grande sala do Colossus com a estátua gigante. Suba até o topo a oeste, toque a Scarecrow's Song e use o Longshot para alcançar a plataforma distante com a Skulltula." }
    ],

    "Bottom of the Well": [
        { id: "BW_GS_79", type: "goldSkulltula", name: "Like-Like Room", age: "child", time: "any", note: "Skulltula #79 - Na sala central do Bottom of the Well, entre pela porta trancada à esquerda (sala com Deku Baba e potes voadores); a Skulltula está na parede do fundo." },
        { id: "BW_GS_80", type: "goldSkulltula", name: "Invisible Room", age: "child", time: "any", note: "Skulltula #80 - Na sala central, entre pela porta trancada à direita (sala cheia de Keese). Derrote-os e use a Lens of Truth para achar o caminho até a Skulltula." },
        { id: "BW_GS_81", type: "goldSkulltula", name: "Ghost Room", age: "child", time: "any", note: "Skulltula #81 - No canto superior direito do mapa, rasteje por um buraco pequeno e use uma chave na porta trancada. Navegue com cuidado pelos buracos invisíveis até a sala com o Like Like; a Skulltula está na parede." }
    ],

    "Ice Cavern": [
        { id: "IC_GS_68", type: "goldSkulltula", name: "Silver Rupees Room", age: "adult", time: "any", note: "Skulltula #68 - Na primeira sala com as lâminas giratórias e os Silver Rupees, a Skulltula está alta na parede, logo acima de um dos rupees. Use o Hookshot." },
        { id: "IC_GS_69", type: "goldSkulltula", name: "Ice Statues Room", age: "adult", time: "any", note: "Skulltula #69 - Na sala da Bússola, use a Blue Fire para derreter o Red Ice e siga para o leste. A Skulltula está num pilar alto; use o Hookshot." },
        { id: "IC_GS_70", type: "goldSkulltula", name: "Deep Ice Cavern", age: "adult", time: "any", note: "Skulltula #70 - Na sala grande de empurrar blocos, a Skulltula está numa das paredes mais altas." },

        { id: "IC_HP_29", type: "heartPiece", name: "Bloco de Gelo Vermelho", age: "adult", time: "any", note: "Heart Piece #29 - Na mesma sala onde se consegue a Blue Fire e a Bússola, há vários blocos de Red Ice; derreta um deles com a Blue Fire para revelar o Heart Piece." }
    ],

    "Ganon's Castle": [
        { id: "GNC_GS_46", type: "goldSkulltula", name: "Atrás do Castelo", age: "adult", time: "any", note: "Skulltula #46 - Volte à Market, agora transformada em Ganon's Castle. Siga o caminho à direita passando pelo arco e vire para trás; a Skulltula está no lado de trás. Use o Hookshot." },

        { id: "GNC_GF_01", type: "greatFairy", name: "Grande Fada da Coragem", age: "adult", time: "any", note: "Reduz o dano recebido pela metade; encontrada dentro de Ganon's Castle." }
    ],

    "Temple of Time": [
        { id: "TOT_SG_01", type: "song", name: "Canção do Tempo", age: "child", time: "any", note: "Aprendida com a Princesa Zelda logo depois de conseguir a Ocarina of Time." },
        { id: "TOT_SG_02", type: "song", name: "Prelúdio da Luz", age: "adult", time: "any", note: "Ensinada pelo Sheik dentro do Temple of Time." }
    ]
};
