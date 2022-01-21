
//import Phaser from 'phaser'

class Game extends Phaser.Scene {
    constructor() {
      super('Game');
        
      
    }
  init() {
    this.paddleRightVelocity = new Phaser.Math.Vector2(0,0);
  }

  preload() {
    
  }
  
  
  create() {
/*this.fullScreenButton = this.add.text(730, 20, "fullScreen");
this.fullScreenButton.setInteractive();
this.fullScreenButton.on('pointerdown', function() {
    this.scene.scale.setGameSize(window.innerWidth, window.innerHeight);
    this.scale.startFullscreen(); });
    
    */
   this.physics.world.setBounds(-100,0, 1000, 500); 
 this.ball = this.add.circle(400,250,10,0xffffff,1);
 this.physics.add.existing(this.ball);
    this.resetball();
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
    //console.log((this.ball.x <= -30))
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
     const aiSpd = 0.1;
    if(diff < 0) {
      
     this.paddleRightVelocity.y = -aiSpd;
    if (this.paddleRightVelocity.y < -10) {
      this.paddleRightVelocity.y = -10;
    }
       padR.updateFromGameObject();
     }
     else if(diff > 0) {
      this.paddleRightVelocity.y = aiSpd;
      if (this.paddleRightVelocity.y > 10) {
      this.paddleRightVelocity.y = 10;
    }
    padR.updateFromGameObject();
      }
     this.paddleRight.y += this.paddleRightVelocity.y;
    padR.updateFromGameObject();
    if(this.ball.x < -30) {
      this.resetball();
    }
    else if (this.ball.x > 820) {
      this.resetball();
    }
  }
 
  resetball() {
  const angle = Phaser.Math.Between(0,360);
  const vec = this.physics.velocityFromAngle(angle, 200);
   this.ball.body.setVelocity(vec.x , vec.y);
    this.ball.setPosition(400,250)
  }

}
