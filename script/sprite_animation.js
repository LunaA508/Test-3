/*
 * Establish the canvas and sprite sheet that will be used
 * Split the sprite sheet into individual sprites
 * Establish starting values to draw sprite as soon as document loads
 */

var canvasHeight = 200;

// Sprite dimensions
var spriteWidth = 1600;
var spriteHeight = 145;

// Sprite sheet has 10 columns
var cols = 10;

// Dimensions of a single sprite
var width = spriteWidth/cols;
var height = spriteHeight;

// Variables to identify starting and ending frames
var currentFrame = 0;
var frameCount = 10;

// X and Y coordinates to render frame
var x = 0;
var y = 0;

// X and Y coordinates of the sprite to get the single frame
var srcX = 0;
var srcY = 0;

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
/*
 * Functions that will be used to establish functionality
 */
function draw() {
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}

function updateFrame() {
    // Update frame index
    currentFrame = ++currentFrame % frameCount;

    // Calculate X coordinate for the sprite sheet
    srcX = currentFrame * width;

    ctx.clearRect(x, y, width, height);
}

function move() {
    updateFrame();

    x += 5;
    ctx.drawImage(character, srcX, srcY, width, height, x, y, width, height);
}




