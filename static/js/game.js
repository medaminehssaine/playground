// Game State
let currentLevelIndex = 0;
let currentLevel = null;
let turtleState = { x: 0, y: 0, dir: 90 };
let collectedFlags = [];
let isRunning = false;
let commandSequence = []; // For Level 0
let visualRotation = 90; // Keep track of total rotation for smooth spins

// DOM Elements
const gridContainer = document.getElementById('grid-container');
const levelTitle = document.getElementById('level-title');
const instructionText = document.getElementById('instruction-text');
const sequenceBar = document.getElementById('sequence-bar');
const codeEditor = document.getElementById('code-editor');
const statusBar = document.getElementById('status-bar');
const lineNumbers = document.getElementById('line-numbers');

// --- Initialization ---

function startGame(mode) {
    document.getElementById('landing-screen').classList.add('hidden');
    document.getElementById('landing-screen').classList.remove('active');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('game-screen').classList.add('active');

    // Find first level of selected mode
    currentLevelIndex = LEVELS.findIndex(l => l.type === mode);
    populateLevelSelector(); // Populate dropdown
    loadLevel(currentLevelIndex);
}

function populateLevelSelector() {
    const selector = document.getElementById('level-select');
    selector.innerHTML = '';
    LEVELS.forEach((level, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.text = `Niveau ${level.type} - Challenge ${level.id}`;
        selector.appendChild(option);
    });
}

function showLanding() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('active');
    document.getElementById('landing-screen').classList.remove('hidden');
    document.getElementById('landing-screen').classList.add('active');
    isRunning = false;
}

function loadLevel(index) {
    if (index < 0 || index >= LEVELS.length) {
        alert("Félicitations ! Tu as terminé tous les niveaux !");
        showLanding();
        return;
    }

    currentLevelIndex = index;
    currentLevel = LEVELS[index];

    // Update Selector
    const selector = document.getElementById('level-select');
    if (selector) selector.value = index;

    // Reset State
    turtleState = { ...currentLevel.turtle };
    visualRotation = turtleState.dir; // Sync visual rotation
    collectedFlags = [];
    commandSequence = [];
    isRunning = false;

    // UI Updates
    levelTitle.innerText = `Niveau ${currentLevel.type} - Challenge ${currentLevel.id}`;
    instructionText.innerText = currentLevel.instruction;
    statusBar.innerText = "La tortue est prête...";

    // Toggle Controls
    if (currentLevel.type === 0) {
        document.getElementById('controls-lv0').classList.remove('hidden');
        document.getElementById('controls-lv1').classList.add('hidden');
        renderSequence();
    } else {
        document.getElementById('controls-lv0').classList.add('hidden');
        document.getElementById('controls-lv1').classList.remove('hidden');
        codeEditor.value = "";
        updateLineNumbers();
    }

    renderGrid(true); // True = Full Render
}

function resetLevel() {
    if (isRunning) return;
    loadLevel(currentLevelIndex);
}

// --- Rendering ---

function renderGrid(fullRender = false) {
    // If full render, clear everything
    if (fullRender) {
        gridContainer.innerHTML = '';
        const size = currentLevel.gridSize;
        gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

        // Set CSS variable for cell size calculation if needed, but grid handles it.
        // We need to know cell size for absolute positioning?
        // Actually, we can use percentages: left = (x / size) * 100 %.

        for (let y = 0; y < size; y++) {
            for (let x = 0; x < size; x++) {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                cell.dataset.x = x;
                cell.dataset.y = y;
                cell.id = `cell-${x}-${y}`; // ID for easy access

                // Add Objects
                if (isObstacle(x, y)) {
                    cell.innerText = '🪨';
                    cell.classList.add('rock');
                } else if (isGoal(x, y)) {
                    // Check if collected
                    if (!isCollected(x, y)) {
                        cell.innerText = '🚩';
                        cell.classList.add('flag');
                    }
                }
                gridContainer.appendChild(cell);
            }
        }

        createFloatingTurtle();
    } else {
        // Partial update: just flags
        currentLevel.goals.forEach(g => {
            const cell = document.getElementById(`cell-${g.x}-${g.y}`);
            if (isCollected(g.x, g.y)) {
                cell.innerText = '';
                cell.classList.remove('flag');
            }
        });
    }
}

function createFloatingTurtle() {
    // Remove existing turtle if any
    const existing = document.getElementById('turtle-actor');
    if (existing) existing.remove();

    const turtle = document.createElement('div');
    turtle.id = 'turtle-actor';
    turtle.classList.add('turtle');
    turtle.innerHTML = '<div class="turtle-sprite">🐢</div>';

    // Append directly to grid container
    gridContainer.appendChild(turtle);

    // Initial Position
    updateTurtlePosition(turtle, turtleState.x, turtleState.y);

    // Initial Rotation
    // visualRotation is the angle in degrees.
    // 90 = East (Right).
    // 0 = North (Up).
    // 180 = South (Down).
    // 270 = West (Left).

    // Our sprite faces Right (after CSS flip).
    // So 0 deg rotation = Facing Right.
    // If visualRotation is 90 (East), we want 0 deg rotation.
    // If visualRotation is 0 (North), we want -90 deg rotation.
    // Formula: rotation = visualRotation - 90.

    gsap.set(turtle, { rotation: visualRotation - 90 });
}

function updateTurtlePosition(element, x, y) {
    const size = currentLevel.gridSize;
    const left = (x / size) * 100;
    const top = (y / size) * 100;

    // Also set width/height to match cell size (100% / size)
    const cellSize = 100 / size;

    element.style.left = `${left}%`;
    element.style.top = `${top}%`;
    element.style.width = `${cellSize}%`;
    element.style.height = `${cellSize}%`;
}

function isObstacle(x, y) {
    return currentLevel.obstacles.some(o => o.x === x && o.y === y);
}

function isGoal(x, y) {
    return currentLevel.goals.some(g => g.x === x && g.y === y);
}

function isCollected(x, y) {
    return collectedFlags.some(f => f.x === x && f.y === y);
}

function checkCollision() {
    const { x, y } = turtleState;
    const size = currentLevel.gridSize;

    // Wall Collision
    if (x < 0 || x >= size || y < 0 || y >= size) {
        return true;
    }

    // Obstacle Collision
    if (isObstacle(x, y)) {
        return true;
    }

    return false;
}

function checkGoals() {
    const { x, y } = turtleState;
    if (isGoal(x, y) && !isCollected(x, y)) {
        collectedFlags.push({ x, y });
        // Visual update happens in renderGrid(false) or we can force it here
        // renderGrid(false) is called in the loop, but AFTER executeCommand and BEFORE checkGoals?
        // No, loop order: execute -> render -> collision -> goals.
        // So renderGrid(false) will show the flag as collected in the NEXT iteration?
        // Or we should update UI immediately.
        const cell = document.getElementById(`cell-${x}-${y}`);
        if (cell) {
            cell.innerText = '';
            cell.classList.remove('flag');
            // Maybe play a sound or particle effect?
            gsap.to(cell, { scale: 1.5, duration: 0.2, yoyo: true, repeat: 1 });
        }
    }
}

// --- Level 0 Logic ---

function addCommand(cmd) {
    if (isRunning) return;
    commandSequence.push(cmd);
    renderSequence();
}

function renderSequence() {
    sequenceBar.innerHTML = '';
    commandSequence.forEach((cmd, i) => {
        const span = document.createElement('span');
        span.classList.add('seq-block');
        if (cmd === 'avance') span.innerText = '⬆️';
        if (cmd === 'gauche') span.innerText = '↺';
        if (cmd === 'droite') span.innerText = '↻';
        sequenceBar.appendChild(span);
    });
}

// --- Level 1 Logic (Parser) ---

function updateLineNumbers() {
    const lines = codeEditor.value.split('\n').length;
    lineNumbers.innerHTML = Array(lines).fill(0).map((_, i) => i + 1).join('<br>');
}

function parseCode(code) {
    const lines = code.split('\n');
    return parseBlock(lines);
}

function parseBlock(lines) {
    let commands = [];
    let i = 0;

    while (i < lines.length) {
        let line = lines[i].trim();
        if (!line || line.startsWith('//')) {
            i++; continue;
        }

        if (/^\s*avance\(\)\s*$/.test(line)) {
            commands.push('avance');
        } else if (/^\s*tourne_gauche\(\)\s*$/.test(line)) {
            commands.push('gauche');
        } else if (/^\s*tourne_droite\(\)\s*$/.test(line)) {
            commands.push('droite');
        } else if (/^\s*repeter\((\d+)\)\s*\{\s*$/.test(line)) {
            const match = line.match(/^\s*repeter\((\d+)\)\s*\{\s*$/);
            const count = parseInt(match[1]);

            let openBraces = 1;
            let j = i + 1;
            let innerBlock = [];

            while (j < lines.length && openBraces > 0) {
                if (/^\s*repeter\((\d+)\)\s*\{\s*$/.test(lines[j])) {
                    openBraces++;
                } else if (/^\s*\}\s*$/.test(lines[j])) {
                    openBraces--;
                }

                if (openBraces > 0) {
                    innerBlock.push(lines[j]);
                }
                j++;
            }

            if (openBraces > 0) {
                throw new Error("Erreur: '}' manquante pour fermer la boucle.");
            }

            const innerCommands = parseBlock(innerBlock);
            for (let k = 0; k < count; k++) {
                commands.push(...innerCommands);
            }

            i = j - 1;
        } else if (/^\s*\}\s*$/.test(line)) {
            throw new Error(`Erreur: '}' inattendue.`);
        } else {
            throw new Error(`Je ne comprends pas: "${line}"`);
        }
        i++;
    }
    return commands;
}


// --- Execution Engine ---

async function runGame() {
    if (isRunning) return;
    isRunning = true;
    statusBar.innerText = "Exécution en cours...";

    let commands = [];

    if (currentLevel.type === 0) {
        commands = [...commandSequence];
    } else {
        try {
            commands = parseCode(codeEditor.value);
        } catch (e) {
            alert(e.message);
            isRunning = false;
            statusBar.innerText = "Erreur de code.";
            return;
        }
    }

    if (commands.length === 0) {
        alert("Aucune commande à exécuter !");
        isRunning = false;
        statusBar.innerText = "En attente...";
        return;
    }

    // Execute Step by Step
    for (const cmd of commands) {
        if (!isRunning) break;

        await executeCommand(cmd);
        renderGrid(false); // Partial update (flags only)

        if (checkCollision()) {
            statusBar.innerText = "BOUM ! Tu as foncé dans un mur ou un rocher.";
            alert("Perdu ! Tu as heurté un obstacle.");
            isRunning = false;
            return;
        }

        checkGoals();
    }

    if (collectedFlags.length === currentLevel.goals.length) {
        statusBar.innerText = "Niveau terminé !";
        await new Promise(r => setTimeout(r, 500));
        alert("Bravo ! Niveau réussi ! 🌟");
        loadLevel(currentLevelIndex + 1);
    } else {
        statusBar.innerText = "Tu n'as pas tout ramassé...";
        alert("Dommage, tu n'as pas atteint tous les drapeaux.");
    }

    isRunning = false;
}

async function executeCommand(cmd) {
    const turtle = document.getElementById('turtle-actor');
    if (!turtle) return;

    const duration = 0.5;

    // Start Animation
    if (cmd === 'gauche') {
        turtleState.dir = (turtleState.dir - 90 + 360) % 360;
        visualRotation -= 90;
        gsap.to(turtle, {
            rotation: visualRotation - 90,
            duration: duration,
            ease: "back.out(1.7)"
        });
    } else if (cmd === 'droite') {
        turtleState.dir = (turtleState.dir + 90) % 360;
        visualRotation += 90;
        gsap.to(turtle, {
            rotation: visualRotation - 90,
            duration: duration,
            ease: "back.out(1.7)"
        });
    } else if (cmd === 'avance') {
        let newX = turtleState.x;
        let newY = turtleState.y;

        if (turtleState.dir === 0) newY -= 1; // North
        if (turtleState.dir === 90) newX += 1; // East
        if (turtleState.dir === 180) newY += 1; // South
        if (turtleState.dir === 270) newX -= 1; // West

        // Calculate new percentage positions
        const size = currentLevel.gridSize;
        const newLeft = (newX / size) * 100;
        const newTop = (newY / size) * 100;

        // Check if out of bounds (for animation purposes)
        const isOutOfBounds = newX < 0 || newX >= size || newY < 0 || newY >= size;
        const isHitRock = isObstacle(newX, newY);

        if (isOutOfBounds || isHitRock) {
            // Animate a "bump"
            let bumpX = 0, bumpY = 0;
            if (turtleState.dir === 0) bumpY = -20;
            if (turtleState.dir === 90) bumpX = 20;
            if (turtleState.dir === 180) bumpY = 20;
            if (turtleState.dir === 270) bumpX = -20;

            gsap.to(turtle, {
                x: bumpX, y: bumpY,
                duration: 0.2,
                yoyo: true,
                repeat: 1
            });
            // State update for collision happens after delay
        } else {
            // Move to new cell
            gsap.to(turtle, {
                left: `${newLeft}%`,
                top: `${newTop}%`,
                duration: duration,
                ease: "power2.inOut"
            });

            // Pre-update state for logic? No, wait for delay.
            // Actually, we should update local vars to know where we are going.
        }

        // Wait for animation to finish
        await new Promise(r => setTimeout(r, duration * 1000 + 50)); // +50ms buffer

        // Update State Logic
        if (cmd === 'avance') {
            if (isOutOfBounds || isHitRock) {
                // Even if we bumped, we update state to the invalid position
                // so that checkCollision() can detect it in the main loop.
                turtleState.x = newX;
                turtleState.y = newY;
            } else {
                turtleState.x = newX;
                turtleState.y = newY;
            }
        }
    } else {
        // Rotation commands
        await new Promise(r => setTimeout(r, duration * 1000 + 50));
    }
}

