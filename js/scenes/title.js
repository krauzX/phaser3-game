 class title extends Phaser.Scene {
    constructor() {
      super('title');
        
      
    }


  preload() {
    
  }
  
  
  create() {
   const text = this.add.text(400,250,'hello World');
    text.setOrigin(0.5,0.5);
   // this.scene.start(Game)
  }
}
