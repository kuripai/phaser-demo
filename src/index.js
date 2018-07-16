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

var starfield;

function preload ()
{
    this.load.image("logo", "assets/logo.png");
    this.load.image("red", "assets/red.png");
    this.load.image('starfield', 'assets/games/invaders/starfield.png');
}

function create ()
{

    //this.add.image("300", "300", "logo"); 
    //  The scrolling starfield background
    starfield = this.add.tileSprite(0, 0, 800, 600, 'starfield');
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
}
