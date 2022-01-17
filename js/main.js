window.onload = function() {
  
const config = {
  parent: 'main',
  width: 800,
  height: 400,
  type: Phaser.AUTO,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: true
    }
  },
  scene: []
};


const game = new Phaser.Game(config);
game.scene.add("title",title);
game.scene.add("Game",Game);
game.scene.start("Game")
}
