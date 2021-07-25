const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var tower, ground, canon;

function preload() {
    bg = loadImage("assets/background.gif");
}

function setup() {
    createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    tower = new Tower(150, 350, 160, 310);
    canon = new Canon(180, 110, 120, 70, -PI / 4);

}

function draw() {
    background(bg);
    Engine.update(engine);
    tower.display();
    canon.display();
}

