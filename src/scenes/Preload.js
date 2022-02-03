//import Phaser from './phaser'



 class Preload extends Phaser.Scene 
{
  
  constructor() {
    super('preload')
  }
	preload()
	{
		this.add.text(200,200,'hi')
		
		    this.load.setPath('public/assets/');

		this.load.audio('pong-beep','ping_pong_8bit_beeep.ogg')
		this.load.audio('pong-plop','ping_pong_8bit_plop.ogg')
	}

	create()
	{
	  console.log('preload');
//          this.sound.add('pong-beep');

    var beep = this.sound.add('pong-beep');


//this.sound.add('beep');
	  
	  console.log(this.cache.audio.getKeys());
		this.scene.start('titlescreen');
	}
}
