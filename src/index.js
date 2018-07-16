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
}