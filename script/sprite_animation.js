/*
 * Establish the canvas and sprite sheet that will be used
 * Split the sprite sheet into individual sprites
 * Establish starting values to draw sprite as soon as document loads
 */

var canvasHeight = 160;

// Sprite dimensions
var spriteWidth = 1600;
var spriteHeight = 145;

// Sprite sheet has 10 columns
var cols = 10;

// Dimensions of a single sprite
var width = spriteWidth/cols;
var height = spriteHeight;

// Variables to identify starting and ending frames
var currentFrame;
var frameCount = 10;

// X and Y coordinates to render frame
var x;
var y;

// Represents X and Y coordinates of the sprite
var srcX;
var srcY;

// Apply starting values for the sprite
startingValues();

// Fetching canvas
var canvas = document.getElementById('canvas');

// Set the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = canvasHeight;

// Establishing a context to the canvas
var ctx = canvas.getContext("2d");

// Creating and setting our image object
var character = new Image();

// Reference relative to index.html
character.src = "sprite_sheet/robot.png";

// Declare variable that will be used as a reference to setInterval
var id;

// Declare variable that will be used to reference the start button
var button1 = document.getElementById("btnStart");

// When the document loads, draw the first frame on the canvas
window.onload = draw;

/*
 * Functions that will be attached to Button onClick events
 */
function startButton(){
    clearInterval(id);
    id = !id;

    if(!id) {
        button1.innerText = "Start";
        return;
    }

    button1.innerText = "Stop";
    id = setInterval(move, 125);
}

function resetButton() {
    if (!id) {
        clearInterval(id);
        clear();
        startingValues();
        draw();
    } else {
        alert("Stop the sprite before trying to reset");
    }
}

/*
 * Functions that will be used to establish functionality and animation
 */
function draw() {
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

function clear() {
    ctx.clearRect(x, y, width, height);
}

function updateFrame() {
    // Update frame index
    currentFrame = ++currentFrame % frameCount;

    // Calculate X coordinate for the sprite sheet
    srcX = currentFrame * width;
    clear();
}

function move() {
    updateFrame();

    x += 5;
    draw();
}

function startingValues() {
    // Frame will begin at 0
    currentFrame = 0;

    // Starting position on canvas
    x = 0;
    y = 0;

    // Starting at the first sprite
    srcX = 0;
    srcY = 0;
}