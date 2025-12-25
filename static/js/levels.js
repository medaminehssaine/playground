const LEVELS = [
    // --- LEVEL 0 CHALLENGES (Visual) - EASY ---
    {
        id: 1, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 4, y: 0 }],
        obstacles: [],
        instruction: "Bienvenue ! Fais avancer la tortue jusqu'au drapeau."
    },
    {
        id: 2, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 0, y: 4 }],
        obstacles: [],
        instruction: "Tourne à droite pour atteindre le drapeau en bas."
    },
    {
        id: 3, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 2, y: 2 }],
        obstacles: [],
        instruction: "Fais des zig-zags pour arriver au centre."
    },
    {
        id: 4, type: 0, gridSize: 5,
        turtle: { x: 0, y: 2, dir: 90 },
        goals: [{ x: 4, y: 2 }],
        obstacles: [{ x: 2, y: 2 }],
        instruction: "Attention au rocher ! Contourne-le."
    },
    {
        id: 5, type: 0, gridSize: 6,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 5, y: 5 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 3 }, { x: 1, y: 4 },
            { x: 3, y: 5 }, { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 3, y: 1 },
            { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 2 }, { x: 5, y: 3 }
        ],
        instruction: "Suis le chemin sinueux comme un serpent."
    },
    {
        id: 6, type: 0, gridSize: 5,
        turtle: { x: 2, y: 2, dir: 0 },
        goals: [{ x: 2, y: 4 }],
        obstacles: [],
        instruction: "Le drapeau est derrière toi ! Fais demi-tour."
    },
    {
        id: 7, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 1, y: 1 }, { x: 4, y: 4 }],
        obstacles: [],
        instruction: "Attrape les DEUX drapeaux !"
    },
    {
        id: 8, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 4, y: 4 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 },
            { x: 3, y: 4 }, { x: 3, y: 3 }, { x: 3, y: 2 }
        ],
        instruction: "Trouve ton chemin dans ce petit labyrinthe."
    },
    {
        id: 9, type: 0, gridSize: 5,
        turtle: { x: 2, y: 4, dir: 0 },
        goals: [{ x: 2, y: 0 }],
        obstacles: [
            { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 },
            { x: 2, y: 3 }
        ],
        instruction: "Fais le grand tour pour éviter les rochers."
    },
    {
        id: 10, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 2, y: 2 }],
        obstacles: [
            { x: 1, y: 2 }, { x: 2, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }
        ],
        instruction: "Expert : Le drapeau est encerclé, trouve l'ouverture !"
    },

    // --- LEVEL 0 CHALLENGES (Visual) - HARD ---
    {
        id: 11, type: 0, gridSize: 6,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 5, y: 5 }],
        obstacles: [{ x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }],
        instruction: "Hard 1: Diagonale de rochers !"
    },
    {
        id: 12, type: 0, gridSize: 7,
        turtle: { x: 3, y: 3, dir: 0 },
        goals: [{ x: 0, y: 0 }, { x: 6, y: 0 }, { x: 0, y: 6 }, { x: 6, y: 6 }],
        obstacles: [],
        instruction: "Hard 2: Les 4 coins du monde."
    },
    {
        id: 13, type: 0, gridSize: 6,
        turtle: { x: 0, y: 5, dir: 0 },
        goals: [{ x: 5, y: 0 }],
        obstacles: [
            { x: 0, y: 4 }, { x: 1, y: 4 }, { x: 2, y: 4 }, { x: 3, y: 4 }, { x: 4, y: 4 },
            { x: 1, y: 2 }, { x: 2, y: 2 }, { x: 3, y: 2 }, { x: 4, y: 2 }, { x: 5, y: 2 }
        ],
        instruction: "Hard 3: Le double mur."
    },
    {
        id: 14, type: 0, gridSize: 5,
        turtle: { x: 2, y: 2, dir: 90 },
        goals: [{ x: 4, y: 2 }],
        obstacles: [{ x: 3, y: 2 }, { x: 3, y: 1 }, { x: 3, y: 3 }, { x: 2, y: 1 }, { x: 2, y: 3 }, { x: 1, y: 2 }],
        instruction: "Hard 4: Évasion de la prison !"
    },
    {
        id: 15, type: 0, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 7 }],
        obstacles: [
            { x: 1, y: 1 }, { x: 3, y: 3 }, { x: 5, y: 5 }, { x: 2, y: 6 }, { x: 6, y: 2 }
        ],
        instruction: "Hard 5: Slalom géant."
    },
    {
        id: 16, type: 0, gridSize: 6,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 5, y: 0 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 },
            { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }
        ],
        instruction: "Hard 6: Le couloir étroit."
    },
    {
        id: 17, type: 0, gridSize: 7,
        turtle: { x: 3, y: 6, dir: 0 },
        goals: [{ x: 3, y: 0 }],
        obstacles: [
            { x: 0, y: 3 }, { x: 1, y: 3 }, { x: 2, y: 3 }, { x: 4, y: 3 }, { x: 5, y: 3 }, { x: 6, y: 3 }
        ],
        instruction: "Hard 7: Le pont unique."
    },
    {
        id: 18, type: 0, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 0, y: 1 }, { x: 1, y: 1 }, { x: 2, y: 1 }, { x: 3, y: 1 }, { x: 4, y: 1 }],
        obstacles: [],
        instruction: "Hard 8: La ligne de drapeaux."
    },
    {
        id: 19, type: 0, gridSize: 6,
        turtle: { x: 2, y: 3, dir: 90 },
        goals: [{ x: 5, y: 5 }],
        obstacles: [
            { x: 3, y: 3 }, { x: 3, y: 2 }, { x: 2, y: 2 }, { x: 2, y: 4 }, { x: 3, y: 4 }
        ],
        instruction: "Hard 9: Spirale de sortie."
    },
    {
        id: 20, type: 0, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 0 }, { x: 7, y: 7 }, { x: 0, y: 7 }],
        obstacles: [
            { x: 4, y: 0 }, { x: 4, y: 1 }, { x: 4, y: 2 }, { x: 4, y: 3 },
            { x: 3, y: 4 }, { x: 2, y: 4 }, { x: 1, y: 4 }, { x: 0, y: 4 }
        ],
        instruction: "Hard 10: Le grand tour du quartier."
    },


    // --- LEVEL 1 CHALLENGES (Code) - EASY ---
    {
        id: 21, type: 1, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 4, y: 0 }],
        obstacles: [],
        instruction: "Écris 'avance()' 4 fois ou utilise une boucle."
    },
    {
        id: 22, type: 1, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 0, y: 4 }],
        obstacles: [],
        instruction: "Utilise 'tourne_droite()' pour changer de direction."
    },
    {
        id: 23, type: 1, gridSize: 10,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 8, y: 0 }],
        obstacles: [],
        instruction: "Utilise 'repeter(8) { ... }' pour avancer."
    },
    {
        id: 24, type: 1, gridSize: 5,
        turtle: { x: 1, y: 1, dir: 90 },
        goals: [{ x: 3, y: 1 }, { x: 3, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 1 }],
        obstacles: [],
        instruction: "Fais un carré avec 'repeter(4)' pour ramasser tous les drapeaux."
    },
    {
        id: 25, type: 1, gridSize: 6,
        turtle: { x: 0, y: 5, dir: 90 },
        goals: [{ x: 5, y: 0 }],
        obstacles: [],
        instruction: "Crée une boucle pour monter l'escalier (Avance, Gauche, Avance, Droite)."
    },
    {
        id: 26, type: 1, gridSize: 7,
        turtle: { x: 0, y: 3, dir: 90 },
        goals: [{ x: 6, y: 3 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 },
            { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 5 }, { x: 3, y: 6 },
            { x: 5, y: 0 }, { x: 5, y: 1 }, { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }
        ],
        instruction: "Slalom entre les murs !"
    },
    {
        id: 27, type: 1, gridSize: 5,
        turtle: { x: 0, y: 2, dir: 90 },
        goals: [{ x: 4, y: 2 }],
        obstacles: [{ x: 3, y: 2 }],
        instruction: "Le chemin direct est bloqué. Contourne le piège."
    },
    {
        id: 28, type: 1, gridSize: 12,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 11, y: 11 }],
        obstacles: [],
        instruction: "Longue distance ! Utilise des boucles pour ne pas te fatiguer."
    },
    {
        id: 29, type: 1, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 7 }],
        obstacles: [
            { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 },
            { x: 5, y: 7 }, { x: 5, y: 6 }, { x: 5, y: 5 }, { x: 5, y: 4 }
        ],
        instruction: "Code Pro : Mixe tes commandes pour traverser ce labyrinthe."
    },
    {
        id: 30, type: 1, gridSize: 10,
        turtle: { x: 4, y: 4, dir: 0 },
        goals: [{ x: 0, y: 0 }, { x: 9, y: 0 }, { x: 9, y: 9 }, { x: 0, y: 9 }],
        obstacles: [],
        instruction: "Grand Master : Visite les 4 coins de la carte !"
    },

    // --- LEVEL 1 CHALLENGES (Code) - HARD ---
    {
        id: 31, type: 1, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 0 }, { x: 7, y: 7 }, { x: 0, y: 7 }, { x: 0, y: 0 }],
        obstacles: [],
        instruction: "Hard Code 1: Le grand carré. Utilise une boucle de 4."
    },
    {
        id: 32, type: 1, gridSize: 10,
        turtle: { x: 0, y: 9, dir: 90 },
        goals: [{ x: 9, y: 0 }],
        obstacles: [],
        instruction: "Hard Code 2: Escalier géant. Trouve le pattern."
    },
    {
        id: 33, type: 1, gridSize: 6,
        turtle: { x: 2, y: 2, dir: 90 },
        goals: [{ x: 2, y: 2 }], // Start = Goal? No, collect others.
        goals: [{ x: 2, y: 1 }, { x: 3, y: 2 }, { x: 2, y: 3 }, { x: 1, y: 2 }],
        obstacles: [],
        instruction: "Hard Code 3: La croix. Visite les 4 cases adjacentes."
    },
    {
        id: 34, type: 1, gridSize: 9,
        turtle: { x: 0, y: 4, dir: 90 },
        goals: [{ x: 8, y: 4 }],
        obstacles: [
            { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 }, { x: 2, y: 5 }, { x: 2, y: 6 }, { x: 2, y: 7 }, { x: 2, y: 8 },
            { x: 6, y: 0 }, { x: 6, y: 1 }, { x: 6, y: 2 }, { x: 6, y: 3 }, { x: 6, y: 5 }, { x: 6, y: 6 }, { x: 6, y: 7 }, { x: 6, y: 8 }
        ],
        instruction: "Hard Code 4: Double porte. Passe par les trous."
    },
    {
        id: 35, type: 1, gridSize: 10,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 9, y: 9 }],
        obstacles: [
            { x: 1, y: 1 }, { x: 2, y: 2 }, { x: 3, y: 3 }, { x: 4, y: 4 }, { x: 5, y: 5 }, { x: 6, y: 6 }, { x: 7, y: 7 }, { x: 8, y: 8 }
        ],
        instruction: "Hard Code 5: La diagonale interdite."
    },
    {
        id: 36, type: 1, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 4, y: 0 }, { x: 4, y: 4 }, { x: 0, y: 4 }],
        obstacles: [{ x: 2, y: 2 }],
        instruction: "Hard Code 6: Tour du monde sans toucher le centre."
    },
    {
        id: 37, type: 1, gridSize: 7,
        turtle: { x: 3, y: 3, dir: 0 },
        goals: [{ x: 3, y: 0 }, { x: 6, y: 3 }, { x: 3, y: 6 }, { x: 0, y: 3 }],
        obstacles: [],
        instruction: "Hard Code 7: Étoile. Reviens au centre à chaque fois."
    },
    {
        id: 38, type: 1, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 0 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 3, y: 0 }, { x: 5, y: 0 },
            { x: 1, y: 1 }, { x: 3, y: 1 }, { x: 5, y: 1 }
        ],
        instruction: "Hard Code 8: Saute-mouton (contourne les obstacles)."
    },
    {
        id: 39, type: 1, gridSize: 10,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 5, y: 5 }],
        obstacles: [], // Open field
        instruction: "Hard Code 9: Spirale rentrante. Fais une spirale jusqu'au centre."
    },
    {
        id: 40, type: 1, gridSize: 12,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 11, y: 0 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 2, y: 0 }, { x: 3, y: 0 }, { x: 4, y: 0 }, { x: 5, y: 0 }, { x: 6, y: 0 }, { x: 7, y: 0 }, { x: 8, y: 0 }, { x: 9, y: 0 }, { x: 10, y: 0 }
        ],
        instruction: "Hard Code 10: Le mur de Berlin. Fais le tour complet."
    }
];
