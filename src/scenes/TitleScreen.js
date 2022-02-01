//import Phaser from '../.phaser.js'
console.log('title')
 class TitleScreen extends Phaser.Scene
{
	preload()
	{

	}

	create()
	{
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
			this.scene.start(Game)
		})
	}
}
