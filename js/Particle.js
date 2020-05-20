// Creating a function particle
function Particle(x,y,r) {

    // Declaring the options
    var op  = {
        isStatic: false
    }

    //  Creating a body 
    this.body = Bodies.circle(x,y,r,op);
    this.r = r;

    // Adding the body to the world
    World.add(world,this.body);

    // Creating a display function
    this.display = function() {
        pos = this.body.position;
        ellipseMode(CENTER);
        fill("red");
        stroke("yellow");
        strokeWeight(3);
        ellipse(pos.x,pos.y,this.r * 2);
    }
}