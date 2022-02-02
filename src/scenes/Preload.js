//import Phaser from './phaser'


 class Preload extends Phaser.Scene 
{
  
  constructor() {
    super('preload')
  }
	preload()
	{
		this.add.text(200,200,'hi')
		this.load.audio('pong-beep',['../public/assets/ping_pong_8bit_beeep.ogg',])
	this.load.audio('pong-plop','../public/assets/ping_pong_8bit_plop.ogg')
	}

	create()
	{
	  console.log('preload')
		this.scene.start('titlescreen')
	}
}