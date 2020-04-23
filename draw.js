// Create variables for all the elements
const buttons = document.querySelectorAll('button');
const blackBtn = document.getElementById('black-btn')
const rainbowBtn = document.getElementById('rainbow-btn');
const graphiteBtn = document.getElementById('graphite-btn');
const eraseBtn = document.getElementById('erase-btn');
const clearBtn = document.getElementById('clear-btn');
const gridSizeBtn = document.getElementById('change-grid-btn');
const gridContainer = document.querySelector('.gridContainer');

// Initialize settings
let black = false;
let rainbow = false;
let graphite = false;
let erase = false;
let clear = false;
let gridSize = 16;

// Change settings when buttons are clicked
blackBtn.addEventListener('click', function() {
    black = true;
    rainbow = false;
    graphite = false;
    erase = false;
    clear = false;
    buttons.forEach((button) => {
        if (button == blackBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('black: ' + black);
    
});
rainbowBtn.addEventListener('click', function() {
    black = false;
    rainbow = true;
    graphite = false;
    erase = false;
    clear = false;
    buttons.forEach((button) => {
        if (button == rainbowBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('rainbow: ' + rainbow);
});
graphiteBtn.addEventListener('click', function() {
    black = false;
    rainbow = false;
    graphite = true;
    erase = false;
    clear = false;
    buttons.forEach((button) => {
        if (button == graphiteBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('graphite: ' + graphite)
});
eraseBtn.addEventListener('click', function() {
    black = false;
    rainbow = false;
    graphite = false;
    erase = true;
    clear = false;
    buttons.forEach((button) => {
        if (button == eraseBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('erase: ' + erase);
})
clearBtn.addEventListener('click', function() {
    clear = true;
    buttons.forEach((button) => {
        if (button == clearBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('clear: ' + clear);
});
gridSizeBtn.addEventListener('click', function() {
    let newGridSize = prompt("Enter")
});

// Draws the Etch-A-Sketch grid
function drawGrid(gridSize) {
    let gridArea = gridSize * gridSize;
    for (let i = 0; i < gridArea; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
        box.addEventListener('mouseover', function() {
            sketch(box);
        });
    }
}

// Runs the if statements to determine what color to fill the box (or what action to perform) and calls the appropriate function
function sketch(box) {
    if (black) {
        blackSketch(box);
    }
    if (rainbow) {
        rainbowSketch(box);
    }
    if (graphite) {
        graphiteSketch(box);
    }
     
}

// Color = black
function blackSketch(box) {
    box.style.background = 'black';
}

// Color = rainbow
function rainbowSketch(box) {
    const letters = '0123456789ABCDEF';
    let rbColor = '#';
    for (let i = 0; i < 6; i++) {
        rbColor += letters[Math.floor(Math.random() * 16)];
    }
    box.style.background = rbColor;
}

// Color = Graphite
function graphiteSketch(box) {
    const letters = '0123456789ABCDEF';
    let grayColor = '#';
    let grayColor1 = letters[Math.floor(Math.random() * 16)];
    let grayColor2 = letters[Math.floor(Math.random() * 16)];
    for (let i = 0; i < 3; i++) {
        grayColor += grayColor1 + grayColor2
    }  
    box.style.background = grayColor;
}
// Erase

// Clear



drawGrid(gridSize)