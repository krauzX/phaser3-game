//import Phaser from './phaser'
class Preload extends Phaser.Scene {

    constructor() {
        super('preload')
    }
    preload() {
        this.add.text(200, 200, 'hi')

        // Set the asset load path
        this.load.setPath('public/assets/');

        
        //this.load.audio('pong-beep', '../../public/assets/ping_pong_8bit_beeep.ogg')
        // does NOT handle long paths containing ../../ so please avoid
        
        
        this.load.audio('pong-beep', 'ping_pong_8bit_beeep.ogg')
        this.load.audio('pong-plop', 'ping_pong_8bit_plop.ogg')
    }

    create() {
        console.log('preload');
        
        var beep = this.sound.add('pong-beep');

        console.log(this.cache.audio.getKeys());
        
        this.scene.start('titlescreen');
        
    }
}
