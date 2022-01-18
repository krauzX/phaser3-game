
//import Phaser from 'phaser'

class Game extends Phaser.Scene {
    constructor() {
      super('Game');
        
      
    }
  init() {
    this.paddleRightVelocity = new Phaser.Math.Vector2(0,0)
  }

  preload() {
    
  }
  
  
  create() {
   
 this.ball = this.add.circle(400,250,10,0xffffff,1);
 this.physics.add.existing(this.ball);
    this.ball.body.setVelocity(Phaser.Math.Between(-200, 200),Phaser.Math.Between(-200, 200));
     this.ball.body.setCollideWorldBounds(true,1,1);
    this.ball.body.setBounce(1, 1);
    
 this.paddleLeft = this.add.rectangle(50,250,30,100,0xffffff,1);
 this.paddleRight = this.add.rectangle(750,250,30,100,0xffffff,1);
 
    
    this.physics.add.existing(this.paddleLeft,true)
    this.physics.add.existing(this.paddleRight,true)


    this.physics.add.collider(this.paddleLeft , this.ball);
this.physics.add.collider(this.paddleRight , this.ball);
 
  this.cursors =  this.input.keyboard.createCursorKeys();


  }
   update() {

/**@type{Phaser.Physics.Arcade.StaticBody}*/
const padL = this.paddleLeft.body;
/**@type{Phaser.Physics.Arcade.StaticBody}*/
const padR = this.paddleRight.body;

  if(this.cursors.up.isDown) {
  this.paddleLeft.y -= 10;
  padL.updateFromGameObject();
    }
     else if (this.cursors.down.isDown) {
         this.paddleLeft.y += 10;
       padL.updateFromGameObject();
       
    }
     const diff = this.ball.y - this.paddleRight.y;
     
    if(Math.abs(diff) < 10) {
       return;
     }
     
    if(diff < 0) {
       this.paddleRightVelocity.y = -10;
       padR.updateFromGameObject();
     }
     else if(diff > 0) {
      this.paddleRightVelocity.y = 10;
    }
     this.paddleRight.y += this.paddleRightVelocity.y;
    padR.updateFromGameObject();
  }
}
