// Adding Physics to the project
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint;
const MouseConstraint = Matter.MouseConstraint;
const Mouse = Matter.Mouse;

// Declaring the variables
var engine,world;
var canvas;
var particle;
var back,back_Img;
var boxy = [];
var mConstraint;



// Calling the function setup
function setup() {
          
          // Creating a canvas
          canvas = createCanvas(900,600);

          // Creating the engine and adding world to it
          engine = Engine.create();
          world = engine.world;

          // Creating a new particle
          particle = new Particle(190,200,25);

          // if(particle.body.position.x < 200) {
          //   // Creating a canvas mouse
          //   var canvasmouse = Mouse.create(canvas.elt);

          //   // Changing the pixel ratio according to the density of the screen
          //   canvasmouse.pixelRatio = pixelDensity();

          //   // Adding canvas mouse to the mouse constraint
          //   var op = {
          //     Mouse: canvasmouse
          //     // body: particle.body
          //   }

          //   // Creating the mouse constraint
          //   mConstraint = MouseConstraint.create(engine, op);

          //   // Adding it to the world
          //   World.add(world,mConstraint);
          // }

          // console.log(mConstraint);

          // Defining the air ground's options and making it static
          var air_ground_options = {
            isStatic: true,
            restitution: 0
          }

          // Creating the air ground
          air_ground = Bodies.rectangle(725,250,200,20,air_ground_options);
          
          // Adding the air ground to the world
          World.add(world,air_ground);

          // Creating a background
          back = new Background(width/2,height,width,100);

          // Creating a new catapult
          catapult = new Catapult(200,200);

          // Creating a new constraint
          constr = new Constrant(catapult.body,particle.body,10,0.1);

          // Declaring a x and a y
          var x = 620;
          var y = 500;

          // Declaring a colour
          r1 = 10;
          r2 = 10;
          r3 = 200;

          // Creating some boxes on the ground
          for(var i = 0; i < 100; i++) {

            if(i < 13) {
              box1 = new Box(x,y,20,40,r1,r2,r3);
              boxy.push(box1);
            } else if(i === 13) {
                x = 630;
                y = 460;
                r1 = 37;
                r2 = 249;
            } else if(i >= 13 && i < 24){
                box1 = new Box(x,y,20,40,r1,r2,r3);
                boxy.push(box1);
            } else if(i === 24) {
                x = 660;
                y = 420;
                r1 = 107;
                r2 = 29;
            } else if(i >= 24 && i < 32) {
                box1 = new Box(x,y,20,40,r1,r2,r3);
                boxy.push(box1);
            } else if(i === 32) {
                x = 690;
                y = 380;
                r1 = 247;
                r2 = 187;
                r3 = 65;
            } else if(i >= 32 && i < 37) {
                box1 = new Box(x,y,20,40,r1,r2,r3);
                boxy.push(box1);
            } else if(i === 37) {
                x = 720;
                y = 340;
                r1 = 0;
                r3 = 0;
            } else if(i >= 37 && i < 39) {
              box1 = new Box(x,y,20,40,r1,r2,r3);
              boxy.push(box1);
            }

            // Adding 20 to the x everytime
            x = x + 20; 
          }

          // Declaring another colour
          o1 = 100;
          o2 = 230;
          o3 = 0;

          // Declaring a p and a z
          var p = 220;
          var z = 655

          // Creating some boxes on the air ground
          for(var o = 0; o < 20; o++) {

            if(o<8) {
              box1 = new Box(z,p,20,40,o1,o2,o3);
              o1 = o1+20;
              o2 = o2+20;
              o3 = o3+20;
              boxy.push(box1);
            }

            if(o === 8) {
              z = 675;
              p = 180;
            }

            if(o >= 8 && o < 14) {
              o1 = 100;
              o2 = 255;
              o3 = 200;
              box1 = new Box(z,p,20,40,o1,o2,o3);
              boxy.push(box1);
            } 

            if(o === 14) {
              z = 695;
              p = 140;
            }

            if(o >= 14 && o < 18) {
              o1 = 100;
              o2 = 255;
              o3 = 20;
              box1 = new Box(z,p,20,40,o1,o2,o3);
              boxy.push(box1);
            }

            if(o === 18) {
              z = 715;
              p = 100;
            }

            if(o >= 18 && o < 20) {
              o1 = 10;
              o2 = 25;
              o3 = 200;
              box1 = new Box(z,p,20,40,o1,o2,o3);
              boxy.push(box1);
            }

            // Adding 20 to z everytime
            z = z + 20;
          }

          console.log(particle);
}



// Main part of the function called
function draw() {
          
          // Colouring the background white
          background(255,255,255);
          
          // Updating the engine
          Engine.update(engine);

          // Displaying the back
          back.display();

          // Making a rectangle at the air ground's position
          rectMode(CENTER);
          rect(air_ground.position.x,air_ground.position.y,200,20);

          // Displaying the catapult
          catapult.display();

          // Displaying the boxes
          for(var j = 0; j < boxy.length; j++) {
            boxy[j].display();
          }

          // Displaying the constraint and the particle
          particle.display();
          constr.display();
}


// Using the function key pressed
function keyPressed() {
            
          // Attaching the bisd back if space is pressed
          if(keyCode === 32) {
            particle.body.x = 100;
            particle.body.y = 300;
            constr.attach(particle);
          }
}


// Using mouse dragged function
function mouseDragged(){
          
          if(particle.body.position.x < 200) {
          // Changing the x and the y position of particle when the mouse is dragged
          Matter.Body.setPosition(particle.body, {x: mouseX , y: mouseY});
          }
}


// Using mouse released function
function mouseReleased(){

          // Making the partilce fly
          constr.fly();
}