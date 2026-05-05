import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
    constructor() {
        super('GameScene');
    }

    init(data) {
        this.updateScore = data.setScore;
        this.updateStatus = data.setStatus;
        this.score = 0;
    }

    create() {
        // Standard Phaser Logic from previous example...
        // Use this.updateScore(this.score) to talk back to React
    }

    update() {
        // Handle 16-bit movement and collision
    }
}
