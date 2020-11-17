class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.img1=loadImage("sprites/sling1.png");
        this.img2=loadImage("sprites/sling2.png");
        this.img3=loadImage("sprites/sling3.png");
        
    
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image(this.img1,200,70,50,150)
        image(this.img2,170,70,50,100)




        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            stroke('#54270F')
            if(pointA.x<220){
                line(pointA.x, pointA.y, pointB.x, pointB.y);

                line(pointA.x, pointA.y, pointB.x+25, pointB.y-5);
                image(this.img3,pointA.x-30,pointA.y-10,15,30)
            }
            else{
                line(pointA.x, pointA.y, pointB.x-10, pointB.y);

                line(pointA.x, pointA.y, pointB.x+25, pointB.y-5);
                image(this.img3,pointA.x+25,pointA.y-10,15,30)

            }


            

        }
    }
    
}