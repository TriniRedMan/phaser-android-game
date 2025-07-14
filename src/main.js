import Phaser from 'phaser';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: {
    preload,
    create
  }
};

function preload() {
  this.load.setBaseURL('http://labs.phaser.io');
  this.load.image('logo', 'assets/sprites/phaser3-logo.png');
}

function create() {
  this.add.image(400, 300, 'logo');
}

new Phaser.Game(config);