// Create variables for all the buttons
const drawBtn = document.getElementById('draw-btn');
const blackBtn = document.getElementById('black-btn')
const colorBtn = document.getElementById('color-btn');
const graphiteBtn = document.getElementById('graphite-btn');
const eraseBtn = document.getElementById('erase-btn');
const gridSizeBtn = document.getElementById('grid-size-btn');

// Initialize settings
let draw = false;
let black = false;
let color = false;
let graphite = false;
let erase = false;
let gridSize = 16;

// Change settings when buttons are clicked
drawBtn.addEventListener('click', function() {
    draw = true;
    black = true;
    color = false;
    graphite = false;
});
blackBtn.addEventListener('click', function() {
    black = true;
    color = false;
    graphite = false;
    
});
colorBtn.addEventListener('click', function() {
    black = false;
    color = true;
    graphite = false;
});
graphiteBtn.addEventListener('click', function() {
    black = false;
    color = false;
    graphite = true;
});
gridSizeBtn.addEventListener('click', function() {
    gridSize = prompt("Enter")
});

