var sea, seaImg;
var ship, shipImg;


function preload(){
seaImg = loadImage("sea.png");
shipImg = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(400,200); //cambiar la posición del sprite
  ship = createSprite(200,200);  
  sea.addImage(seaImg);
  sea.scale = 0.3; //poner escala al oceano ya que la immagen esta grande
  ship.addAnimation("movingShip",shipImg); //falta etiqueta que se pone entre comiilas, sin esta no funciona
  ship.scale = 0.25; //poner escala al barco ya que la immagen esta grande
}

function draw() {
  background("blue");
 if (sea.x <0){
  sea.x=sea.width/8; //la división correcta sería entre 8, ya que entre dos no regresa de inmediato el fondo
 }
 sea.velocityX=-4;
 drawSprites(); //falto poner parentesis para mostrar los sptrites
}