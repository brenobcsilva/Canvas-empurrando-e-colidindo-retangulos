(function () {
    var cnv = document.querySelector("canvas");
    var ctx = cnv.getContext("2d");

    var LEFT = 37, UP = 38, RIGHT = 39., DOWN = 40;

    var mvLeft = mvUp = mvRight = mvDown = false;

    var sprites = [];
    var blocks = [];

    var character = new Sprite(50, 175, 50, 50, "#000");
    character.speed = 10;
    sprites.push(character);

    var block1 = new Sprite(500, 100, 50, 50, "#f00");
    sprites.push(block1);
    blocks.push(block1);

    var block2 = new Sprite(200, 300, 300, 50, "#e5e5e5");
    sprites.push(block2);
    blocks.push(block2);

    var block3 = new Sprite(50, 100, 20, 150, "#f55");
    sprites.push(block3);
    blocks.push(block3);

    window.addEventListener("keydown", function (e) {
        var key = e.keyCode;
        switch (key) {
            case LEFT:
                mvLeft = true;
                break;
            case UP:
                mvUp = true;
                break;
            case RIGHT:
                mvRight = true;
                break;
            case DOWN:
                mvDown = true;
                break;
        }
    }, false);
    
    window.addEventListener("keyup", function (e) {
        var key = e.keyCode;
        switch (key) {
            case LEFT:
                mvLeft = false;
                break;
            case UP:
                mvUp = false;
                break;
            case RIGHT:
                mvRight = false;
                break;
            case DOWN:
                mvDown = false;
                break;
        }
    }, false);
    
    function loop() {
        window.requestAnimationFrame(loop, cnv);
        update();
        render();
    }
    function update() {
        if(mvLeft && !mvRight){
            character.posX -= character.speed;
        }
        if(mvRight && !mvLeft){
            character.posX += character.speed;
        }
        if(mvUp && !mvDown){
            character.posY -= character.speed;
        }
        if(mvDown && !mvUp){
            character.posY += character.speed;
        }
        character.posX = Math.max(0, Math.min(cnv.width - character.width, character.posX));
        character.posY = Math.max(0, Math.min(cnv.height - character.height, character.posY));
    
        for(var i in blocks){
            var blk = blocks[i];
            if(blk.visible){
                blockRect(blk,character, blk);
            }
        }
        
    }
    function render() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        for (var i in sprites) {
            var spr = sprites[i];
            if (spr.visible) {
                ctx.fillStyle = spr.color;
                ctx.fillRect(spr.posX, spr.posY, spr.width, spr.height);
            }
        }
    }
    loop();
}());