//VARIABLES GLOBALES
var game;
var nombre,password;
var dataBase;
var todosLosUsuarios;
function preload() {
  
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  dataBase=firebase.database();
 game= new Game;
 game.start();
}

function draw() {
  background("black");
 
 
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
