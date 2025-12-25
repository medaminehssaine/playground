const LEVELS = [
    // --- LEVEL 0 CHALLENGES (Visual) ---
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

    // --- LEVEL 1 CHALLENGES (Code) ---
    {
        id: 11, type: 1, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 4, y: 0 }],
        obstacles: [],
        instruction: "Écris 'avance()' 4 fois ou utilise une boucle."
    },
    {
        id: 12, type: 1, gridSize: 5,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 0, y: 4 }],
        obstacles: [],
        instruction: "Utilise 'tourne_droite()' pour changer de direction."
    },
    {
        id: 13, type: 1, gridSize: 10,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 8, y: 0 }],
        obstacles: [],
        instruction: "Utilise 'repeter(8) { ... }' pour avancer."
    },
    {
        id: 14, type: 1, gridSize: 5,
        turtle: { x: 1, y: 1, dir: 90 },
        goals: [{ x: 1, y: 2 }], // Goal is reached by completing the square path back to start or just passing through? 
        // Let's assume goal is to visit the flag. 
        // Wait, "Fais un carré". Let's put flags at corners to force square.
        goals: [{ x: 3, y: 1 }, { x: 3, y: 3 }, { x: 1, y: 3 }, { x: 1, y: 1 }],
        obstacles: [],
        instruction: "Fais un carré avec 'repeter(4)' pour ramasser tous les drapeaux."
    },
    {
        id: 15, type: 1, gridSize: 6,
        turtle: { x: 0, y: 5, dir: 90 },
        goals: [{ x: 5, y: 0 }],
        obstacles: [],
        instruction: "Crée une boucle pour monter l'escalier (Avance, Gauche, Avance, Droite)."
    },
    {
        id: 16, type: 1, gridSize: 7,
        turtle: { x: 0, y: 3, dir: 90 },
        goals: [{ x: 6, y: 3 }],
        obstacles: [
            { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }, /* gap */ { x: 1, y: 4 }, { x: 1, y: 5 }, { x: 1, y: 6 },
            { x: 3, y: 0 }, { x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, /* gap */ { x: 3, y: 5 }, { x: 3, y: 6 },
            { x: 5, y: 0 }, { x: 5, y: 1 }, /* gap */ { x: 5, y: 3 }, { x: 5, y: 4 }, { x: 5, y: 5 }, { x: 5, y: 6 }
        ],
        instruction: "Slalom entre les murs !"
    },
    {
        id: 17, type: 1, gridSize: 5,
        turtle: { x: 0, y: 2, dir: 90 },
        goals: [{ x: 4, y: 2 }],
        obstacles: [{ x: 3, y: 2 }],
        instruction: "Le chemin direct est bloqué. Contourne le piège."
    },
    {
        id: 18, type: 1, gridSize: 12,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 11, y: 11 }],
        obstacles: [],
        instruction: "Longue distance ! Utilise des boucles pour ne pas te fatiguer."
    },
    {
        id: 19, type: 1, gridSize: 8,
        turtle: { x: 0, y: 0, dir: 90 },
        goals: [{ x: 7, y: 7 }],
        obstacles: [
            { x: 2, y: 0 }, { x: 2, y: 1 }, { x: 2, y: 2 }, { x: 2, y: 3 },
            { x: 5, y: 7 }, { x: 5, y: 6 }, { x: 5, y: 5 }, { x: 5, y: 4 }
        ],
        instruction: "Code Pro : Mixe tes commandes pour traverser ce labyrinthe."
    },
    {
        id: 20, type: 1, gridSize: 10,
        turtle: { x: 4, y: 4, dir: 0 },
        goals: [{ x: 0, y: 0 }, { x: 9, y: 0 }, { x: 9, y: 9 }, { x: 0, y: 9 }],
        obstacles: [],
        instruction: "Grand Master : Visite les 4 coins de la carte !"
    }
];
