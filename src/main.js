// Exercise 02: RNGolf
// Name: Arjun Krishnan
// Date: 10/27/2023

'use strict'

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 960,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [ Play ]
}

let wallBmoveSpeed = 3
let wallB

let game = new Phaser.Game(config)

let { width, height } = game.config