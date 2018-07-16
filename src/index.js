<<<<<<< HEAD
const Phaser = require("phaser");

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
      default: 'arcade',
      arcade: {
          gravity: { y: 200 }
      }
  },
  scene: {
      preload: preload,
      create: create
  }
};

var game = Phaser.Game(config);

function preload() {
  console.log("preloading");
}

function create() {
  console.log("creating");
=======
import "phaser"
var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image("logo", "assets/logo.png");
    this.load.image("red", "assets/red.png");
}

function create ()
{
    //this.add.image("300", "300", "logo"); 
    const particles = this.add.particles("red");
    var emitter = particles.createEmitter(
        {
          speed: 100, 
          scale: { start: 1, end: 0 },
          blendMode: 'ADD'
        }
        
    )
    var logo = this.physics.add.image(300, 300, 'logo');
    logo.setVelocity(100, 200);
    logo.setBounce(1, 1);
    logo.setCollideWorldBounds(true);
    emitter.startFollow(logo);
>>>>>>> d5e26fc2799faae5e845d38dce52bc2b4bbcb4b8
}