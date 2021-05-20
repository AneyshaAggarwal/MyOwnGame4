class BCoin
{
    constructor(x, y)
    {
        var options=
        {
            friction : 1,
            //restitution : 1
            isStatic : true
        }
        this.body = Bodies.circle(x, y, 30, options);
        this.radius= 30;
        this.image = loadImage("bc.png");
        World.add(world, this.body);
    }

    display()
    {
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.radius, this.radius);
        pop();
    }
}