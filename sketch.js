const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var space;
var  fairy, fairy_image;
var star, star_image;
var sound;

var engine;
var world;

function preload() {
    space = loadImage('starNight.png');
    fairy_image = loadImage('fairyImage1.png');
    star_image = loadImage('star.png');
    sound = loadSound('JoyMusic.mp3');
}

function setup() {
    var canvas = createCanvas(800, 750);
    engine = Engine.create();
    world = engine.World;

    var star_options = {
        restituition: 1.0
    };

    fairy = createSprite(400, 650, 100, 200);
    fairy.addImage('fairy_img', faity_image);

    star = Bodies.rectangle(750, 80, 50, 50, star_options); 
    World.add(world, star);
    star.addImage('star_img', star_image);
}
function draw() {
    background('black');
    sound.loop();
    if(keyDown('space')) {
    Engine.update(engine);
    }
    rectMode(CENTER);
    rect(star.position.x, star.position.y, 50, 50);
    if(keyDown('left')) {
        fairy.x += -1;
    }
    if(keyDown('right')) {
        fairy.y += 1;
    }
    drawSprites();
}
