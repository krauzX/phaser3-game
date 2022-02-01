//import Phaser from './phaser'


 class Preload extends Phaser.Scene 
{
  
  constructor() {
    super('preload')
  }
	preload()
	{
		this.add.text(200,200,'hi')
	}

	create()
	{
	  console.log('preload')
		this.scene.start('titlescreen')
	}
}