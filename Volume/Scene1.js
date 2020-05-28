let constWeightBallGreen = 545;
let ballNumber = 8;


class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    //load image and audio;
    preload() {
        this.load.image('backGround', 'Assets/backGround.png')
        this.load.image('frameWork', 'Assets/frameWork.png')
        this.load.image('button', 'Assets/1.png')
        this.load.image('buttonPlay', 'Assets/2.png')
        this.load.image('ballSmall', 'Assets/3.png')
        this.load.image('ballBig', 'Assets/4.png')
        this.load.image('bearSmall', 'Assets/5.png')
        this.load.image('bearBig', 'Assets/6.png')
        this.load.image('bearBlueSmall', 'Assets/7.png')
        this.load.image('bearBlueBig', 'Assets/8.png')
        this.load.image('gatoBig1', 'Assets/9.png')
        this.load.image('gatoSmall', 'Assets/10.png')
        this.load.image('gatoBig2', 'Assets/11.png')
        this.load.image('fruitSmall', 'Assets/12.png')
        this.load.image('fruitBig', 'Assets/13.png')
        this.load.image('carSmall', 'Assets/14.png')
        this.load.image('carBig', 'Assets/15.png')
        this.load.image('ballGreen', 'Assets/ballGreen.png')
        this.load.image('speaker', 'Assets/speaker.png')
    }

    //create game;
    create(){

        this.backGround = this.add.image(0, 0, 'backGround').setOrigin(0, 0)
        this.frameWork = this.add.image(250, 20, 'frameWork').setOrigin(0, 0)

        let arr = new Array("ballGreen");
        for(let i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(constWeightBallGreen += 25, 48, "ballGreen").setOrigin(0, 0);
        }
    }

    //Update;
    update(){

    }

}

