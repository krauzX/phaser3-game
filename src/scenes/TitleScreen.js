//import Phaser from '../.phaser.js'

 class TitleScreen extends Phaser.Scene
{
	preload()
	{

	}

	create()
	{
	  console.log('title')
		const title = this.add.text(400, 200, 'Old School Tennis', {
			fontSize: 38,
			fontFamily: PressStart2P
		})
		title.setOrigin(0.5, 0.5)

		this.add.text(400, 300, 'Press Space to Start', {
			fontFamily: PressStart2P
		})
		.setOrigin(0.5)

		this.input.keyboard.once('keydown-SPACE', () => {
			this.sound.play('pong-beep')
			this.scene.start('game')
		})
	}
}
