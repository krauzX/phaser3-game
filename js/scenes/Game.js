
//import Phaser from 'phaser'

class Game extends Phaser.Scene {
    constructor() {
      super('Game');
        
      
    }


  preload() {
    
  }
  
  
  create() {
   
 const ball = this.add.circle(400,250,10,0xffffff,1);
 this.physics.add.existing(ball);
    ball.body.setVelocity(-200,0);
     ball.body.setCollideWorldBounds(true,1,1);
    ball.body.setBounce(1, 1)
 this.paddleLeft = this.add.rectangle(50,250,30,100,0xffffff,1)
    this.physics.add.existing(this.paddleLeft,true)

    this.physics.add.collider(this.paddleLeft , ball);
 
  this.cursors =  this.input.keyboard.createCursorKeys()


  }
  update() {

    /**@type{Phaser.Physics.Arcade.StaticBody}*/
    const bob = this.paddleLeft.body;

    if(this.cursors.up.isDown) {
      this.paddleLeft.y -= 10
      bob.updateFromGameObject()
    }
    else if (this.cursors.down.isDown) {
      this.paddleLeft.y += 10
      bob.updateFromGameObject()
    }
  }
}
