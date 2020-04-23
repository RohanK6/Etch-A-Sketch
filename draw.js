// Create variables for all the elements
const buttons = document.querySelectorAll('button');
const blackBtn = document.getElementById('black-btn')
const colorBtn = document.getElementById('color-btn');
const graphiteBtn = document.getElementById('graphite-btn');
const eraseBtn = document.getElementById('erase-btn');
const clearBtn = document.getElementById('clear-btn');
const gridSizeBtn = document.getElementById('change-grid-btn');
const gridContainer = document.querySelector('.gridContainer');

// Initialize settings
let black = false;
let color = false;
let graphite = false;
let erase = false;
let clear = false;
let gridSize = 16;

// Change settings when buttons are clicked
blackBtn.addEventListener('click', function() {
    black = true;
    color = false;
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
colorBtn.addEventListener('click', function() {
    black = false;
    color = true;
    graphite = false;
    erase = false;
    clear = false;
    buttons.forEach((button) => {
        if (button == colorBtn) {
            button.style.background = 'green';
        }
        else {
            button.style.background = 'gray';
        }
    });
    console.log('color: ' + color);
});
graphiteBtn.addEventListener('click', function() {
    black = false;
    color = false;
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
    color = false;
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
    }
}

drawGrid(gridSize)