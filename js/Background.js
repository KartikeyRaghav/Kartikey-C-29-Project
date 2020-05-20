// Creating a function background
function Background(x,y,w,h) {

    // Declaring the options
    var op  = {
        isStatic: true
    }

    //  Creating a body 
    this.body = Bodies.rectangle(x,y,w,h,op);
    this.w = w;
    this.h = h;

    // Adding the body to the world
    World.add(world,this.body);

    // Creating a display function
    this.display = function() {
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("grey");
        stroke("black");
        strokeWeight(2);
        // Displaying the rectangle at the given position
        rect(pos.x,pos.y,this.w,this.h);
        pop();
    }
}