class slingshort{
    constructor(body, pointB){
        var options = {
            bodyA: body,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA=body
        this.slingshort = Constraint.create(options);
        World.add(world, this.slingshort);
    }
     attach(body){
        this.slingshort.bodyA=body;
     }

     fly(){

        this.slingshort.bodyA=null;
     }
    
         
    display(){
        if(this.slingshort.bodyA){

        
        var pointA = this.bodyA.position;
        var pointB = this.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}
