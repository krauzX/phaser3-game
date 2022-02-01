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
		this.scene.start(TitleScreen)
	}
}