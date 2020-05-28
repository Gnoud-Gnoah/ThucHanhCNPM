let constWeightBallGreen = 515;
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


        this.load.image('ballGroup1', 'Assets/1/ballGroup1.png')
        this.load.image('bearGroup1', 'Assets/1/bearGroup1.png')
        this.load.image('gatoGroup1', 'Assets/1/gatoGroup1.png')

        this.load.image('ballGroup2', 'Assets/2/ballGroup2.png')
        this.load.image('bearBlueGroup2', 'Assets/2/bearBuleGroup2.png')
        this.load.image('gatoGroup2', 'Assets/2/gatoGroup2.png')

        this.load.image('ballGroup3', 'Assets/3/ballGroup3.png')
        this.load.image('bearGroup3', 'Assets/3/bearGroup3.png')
        this.load.image('gatoGroup3', 'Assets/3/gatoGroup3.png')
    }

    //create game;
    create(){

        this.backGround = this.add.image(0, 0, 'backGround').setOrigin(0, 0)
        this.frameWork = this.add.image(250, 20, 'frameWork').setOrigin(0, 0)


        this.ballGroup1 = this.add.image(250, 90, 'ballGroup1').setOrigin(0, 0)
        this.bearGroup1 = this.add.image(250, 240, 'bearGroup1').setOrigin(0, 0)
        this.gatoGroup1 = this.add.image(250, 390, 'gatoGroup1').setOrigin(0, 0)

        let arr = new Array("ballGreen");
        for(let i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(constWeightBallGreen += 25, 38, "ballGreen").setOrigin(0, 0);
        }

    }

    //Update;
    update(){

    }

}

