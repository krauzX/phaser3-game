window.onload = function() {


const config = {
	width: 800,
	height: 500,
	type: Phaser.AUTO,
	 //backgroundColor: '#616161',
	 scale : {
		  parent: 'main',
    mode: Phaser.Scale.FIT,
 // autoCenter: Phaser.Scale.CENTER_BOTH,
		},
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 0 },
			debug: false
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
