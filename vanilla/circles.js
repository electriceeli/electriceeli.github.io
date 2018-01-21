'use strict';

const canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");

// set width and height of canvas to window size to ensure resolution quality
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// define starting position (x and y) and frame change distance (dx and dy)
var x = canvas.width/2;
var y = canvas.height-30;
var dx = -8;
var dy = -5;

// set a function to call a random number () to animate shapes color
function paulIrish() { 
  return '#'+Math.floor(Math.random()*16777215).toString(16);
}

// set function that clears canvas to remove previous ball locations on interval
function clearBack() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}
    

// declare ball radius
var ballRadius = 5;
// OR let fate declare the ball radius
function changingRadius() { 
  return Math.floor((Math.random() * 15) + 1);
}

// drawing a ball
function drawBall() {
  // initiate 2d context method to start a drawing
  ctx.beginPath();
  // use arc to declare a circle with center-x, center-y, radius, start angle, finish angle 
  ctx.arc(x, y, changingRadius(), 0, Math.PI*2);
  // set fill property to determine color once drawn
  ctx.fillStyle = paulIrish();
  // use fill method to draw shape on canvas
  ctx.fill();
  // declare end of drawing
  ctx.closePath();
}

// create a function to loop at an interval to create the appearance of motion. just like movies.
function draw() {
  // call the function to draw the ball at initial coordinates
  drawBall();
  // increment x and y position
  x += dx;
  y += dy;
  // set collision with top and bottom walls to reverse vertical (dy) frame change distance
  if(y + dy < 9 || y + dy > canvas.height - 9) {
    dy = -dy;
  }
  // set collision with the left and right walls to reverse horizontal (dx) frame change distance
  if(x + dx > canvas.width - 9 || x + dx < 9) {
    dx = -dx;
  }
}

// set rate in milliseconds of next frame. 10-40 milliseconds is visually appealing range
setInterval(draw, 2);