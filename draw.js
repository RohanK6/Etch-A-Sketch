// Create variables for all the elements
const drawBtn = document.getElementById('draw-btn');
const blackBtn = document.getElementById('black-btn')
const colorBtn = document.getElementById('color-btn');
const graphiteBtn = document.getElementById('graphite-btn');
const eraseBtn = document.getElementById('erase-btn');
const clearBtn = document.getElementById('clear-btn');
const gridSizeBtn = document.getElementById('change-grid-btn');
const gridContainer = document.querySelector('.gridContainer');

// Initialize settings
let draw = false;
let black = false;
let color = false;
let graphite = false;
let erase = false;
let clear = false;
let gridSize = 10;

// Change settings when buttons are clicked
drawBtn.addEventListener('click', function() {
    draw = true;
    black = true;
    color = false;
    graphite = false;
    erase = false;
    console.log('draw');
});
blackBtn.addEventListener('click', function() {
    black = true;
    color = false;
    graphite = false;
    console.log('black');
    
});
colorBtn.addEventListener('click', function() {
    black = false;
    color = true;
    graphite = false;
    console.log('color');
});
graphiteBtn.addEventListener('click', function() {
    black = false;
    color = false;
    graphite = true;
    console.log('graphite')
});
eraseBtn.addEventListener('click', function() {
    draw = false;
    erase = true;
    console.log('erase');
})
clearBtn.addEventListener('click', function() {
    clear = true;
    console.log('clear');
});
gridSizeBtn.addEventListener('click', function() {
    console.log('grid');
    gridSize = prompt("Enter")
});

// Draws the Etch-A-Sketch grid
function drawGrid(gridSize) {
    const gridArea = gridSize * gridSize;
    for (let i = 0; i < gridArea; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        gridContainer.appendChild(box);
    }
}

drawGrid(gridSize)