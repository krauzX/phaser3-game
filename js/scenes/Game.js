 class Game extends Phaser.Scene {
    constructor() {
      super('Game');
        
      
    }


  preload() {
    
  }
  
  
  create() {
   
 const ball = this.add.circle(400,250,10,0xffffff,1);
 this.physics.add.existing(ball);
 ball.body.setVelocity(200,200)
    
  }
}
