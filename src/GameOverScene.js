export default class GameOverScene extends Phaser.Scene{
  constructor(){
    super('game-over-scene')
  }

  init(data){
    this.point = data.score
  }

  preload(){
    this.load.image('bg','images/bg_layer1.png')
    this.load.image('replay','images/replay.png')
    this.load.image('game-over','images/gameover.png')
  }

  create(){
    this.add.image(this.scale.width,this.scale.height,'bg')
    const gameoverimage = this.add.image(this.scale.width * .5, 100,'game-over')
    const score = this.add.text(gameoverimage.x * .5, this.scale.height * .5, `Score Is ${this.point}`,{fontSize:'40px', fill:'#000'})
    const replay = this.add.image(gameoverimage.x,this.scale.height -100,'replay')
    replay.setInteractive()
    replay.on('pointerdown', ()=>{
      this.scene.start('math-fighter-scene')
    })
  }
}