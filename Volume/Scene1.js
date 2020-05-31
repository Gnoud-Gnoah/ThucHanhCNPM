let constWeightBallGreen = 515;
let ballNumber = 8;
let numberGame = 2;
let isStart = 0;


class Scene1 extends Phaser.Scene{

    constructor() {
        super('Scene1');
    }

    //load image and audio;
    preload() {
        this.load.image('backGround', 'Assets/backGround.png')
        this.load.image('frameWork', 'Assets/frameWork.png')

        this.load.image('ballGreen', 'Assets/ballGreen.png')
        this.load.image('speaker', 'Assets/speaker.png')

        this.load.image('ballGroup1', 'Assets/1/ballGroup1.png')
        this.load.image('bearGroup1', 'Assets/1/bearGroup1.png')
        this.load.image('gatoGroup1', 'Assets/1/gatoGroup1.png')

        this.load.image('button1', 'Assets/button1.png')
        this.load.image('button2', 'Assets/button2.png')
        this.load.image('button3', 'Assets/button3.png')
        this.load.image('frameButton', 'Assets/frameButton.png')

        this.load.image('StartSheet', 'Assets/StartSheet.png')
        this.load.image('startButton1', 'Assets/startButton1.png')
        this.load.image('startButton2', 'Assets/startButton2.png')

        this.load.image('image1', 'Assets/image1.png')
    }

    //create game;
    create(){
        this.backGround = this.add.image(0, 0, 'backGround').setOrigin(0, 0)
        this.frameWork = this.add.image(250, 20, 'frameWork').setOrigin(0, 0)

        let arr = new Array("ballGreen");
        for(let i = 0; i < ballNumber; i++){
            arr[i] = this.add.image(constWeightBallGreen += 25, 38, "ballGreen").setOrigin(0, 0);
        }

        this.scene1()
    }

    buttonGroup(a, b){
        this.frameButton = this.add.sprite(a, b, 'frameButton')

        this.button1 = this.add.sprite(a - 90, b + 15, 'button1').setInteractive()
        this.button1.on('pointerup', () => {
            this.handleCorrect(this.button1);
        })

        this.button2 = this.add.sprite(a + 90, b + 15, 'button2').setInteractive()
        this.button2.on('pointerup', () => {
            this.handleWrong(this.button2)
        })

        this.button3 = this.add.sprite(a, b + 15, 'button3').setInteractive()
        this.button3.on('pointerup', () => { this.handleWrong(this.button3) })

        this.input.on('gameobjectover', function (pointer, gameObject) {
            gameObject.setTint(0xFFC400)
        })

        this.input.on('gameobjectout', function (pointer, gameObject) {
            gameObject.clearTint()
        })
    }

    startButton(){
        this.StartSheet = this.add.image(250, 80, 'StartSheet').setOrigin(0, 0)

        this.startButton1 = this.add.image(660, 200, 'startButton1').setOrigin(0, 0)
        this.startButton1.setInteractive().on('pointerover', () => {
            this.startButton1.destroy()

            this.startButton2 = this.add.image(625, 175, 'startButton2').setOrigin(0, 0)
            this.startButton2.setInteractive().on('pointerup', () => {
                this.StartSheet.destroy()
                this.startButton2.destroy()
                isStart = 1
                this.guide1()
            })
            this.startButton2.on('pointerout', () =>{
                this.StartSheet.destroy()
                this.startButton2.destroy()
                this.startButton1.destroy()
                this.startButton();
            })
        })

    }

    handleCorrect(button){
        button.setTint(0x7BD400)
        this.deleteImage()
        numberGame--;

        this.time.delayedCall(50, function wrong() {
            button.x += 11.5
            button.y = -button.x + 1155
            this.time.delayedCall(50, function wrong() {
                button.x += 11.5
                button.y = -button.x + 1155
                this.time.delayedCall(50, function wrong() {
                    button.x += 11.5
                    button.y = -button.x + 1155
                    this.time.delayedCall(50, function wrong() {
                        button.x += 11.5
                        button.y = -button.x + 1155
                        this.time.delayedCall(50, function wrong() {
                            button.x += 11.5
                            button.y = -button.x + 1155
                            this.time.delayedCall(50, function wrong() {
                                button.x += 11.5
                                button.y = -button.x + 1155
                                this.time.delayedCall(50, function wrong() {
                                    button.x += 11.5
                                    button.y = -button.x + 1155
                                    this.time.delayedCall(50, function wrong() {
                                        button.x += 11.5
                                        button.y = -button.x + 1155
                                        this.time.delayedCall(50, function wrong() {
                                            button.x += 11.5
                                            button.y = -button.x + 1155
                                            this.time.delayedCall(50, function wrong() {
                                                button.x += 11.5
                                                button.y = -button.x + 1155
                                                this.time.delayedCall(500, function wrong() {
                                                    this.add.image(button.x - 20, button.y, 'image1')
                                                    button.destroy()
                                                    this.time.delayedCall(500, function wrong() {
                                                        if(numberGame == 1){
                                                            this.guide2()
                                                        }
                                                    }, [], this)
                                                }, [], this)
                                            }, [], this)
                                        }, [], this)
                                    }, [], this)
                                }, [], this)
                            }, [], this)
                        }, [], this)
                    }, [], this)
                }, [], this)
            }, [], this)
        }, [], this)

    }

    animationButton(){

    }

    handleWrong(button){

        button.setTint(0xFF283D)

        this.time.delayedCall(500, function wrong() {
            if(checkTint == 0){
                button.setTint(0xFFC400);
            }
        }, [], this)

    }

    scene1(){
        this.ballGroup1 = this.add.image(250, 90, 'ballGroup1').setOrigin(0, 0)
        this.startButton()
    }

    guide1() {

        this.time.delayedCall(500, function wrong() {
            this.bearGroup1 = this.add.image(250, 240, 'bearGroup1').setOrigin(0, 0)
            this.time.delayedCall(500, function wrong() {
                this.buttonGroup(800,430)
            }, [], this)
        }, [], this)

    }

    guide2() {
        this.time.delayedCall(500, function wrong() {
            this.gatoGroup1 = this.add.image(250, 400, 'gatoGroup1').setOrigin(0, 0)
            this.time.delayedCall(500, function gude2() {
                this.buttonGroup(800,590)
            }, [], this)
        }, [], this)

    }

    deleteImage(){
        this.frameButton.destroy();
        //this.button1.destroy();
        this.button2.destroy();
        this.button3.destroy();
    }

    //Update;
    update(){

    }

}

