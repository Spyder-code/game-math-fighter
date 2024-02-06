import Phaser from 'phaser'

import MathFighterScene from './MathFighterScene'
import GameOverScene from './GameOverScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: 480,
	height: 640,
	physics: {
		default: 'arcade',
		arcade: {
			debug:true,
			gravity: { y: 200 },
		},
	},
	scene: [MathFighterScene, GameOverScene],
	scale:{
		mode: Phaser.Scale.FIT,
		autoeCenter: Phaser.Scale.CENTER_BOTH
	}
}

export default new Phaser.Game(config)
