window.onload = function() {
  
  const DEFAULT_HEIGHT = "100%" // any height you want
const DEFAULT_WIDTH = "100%"
const config = {
	width: DEFAULT_WIDTH,
	height: DEFAULT_HEIGHT,
	type: Phaser.AUTO,
	 //backgroundColor: '#616161',
	 scale : {
		  parent: 'main',
    mode: Phaser.Scale.FIT,
 autoCenter: Phaser.Scale.CENTER_BOTH,
		},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: false,
			debug: true
		}
	},
}

const game = new Phaser.Game(config)

game.scene.add('titlescreen', TitleScreen)
game.scene.add('game', Game)
game.scene.add('game-background', GameBackground)
game.scene.add('game-over', GameOver)
game.scene.add('preload', Preload)

game.scene.start('preload')




console.log('main.js')

}
