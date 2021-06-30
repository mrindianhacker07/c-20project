 var bg;
var cat1 , cat2, cat3, cat4 ;
var mouse1 , mouse2, mouse3 , mouse4 ;
var cat1Img , cat2Img , cat3Img , cat4Img ;
var mouse1Img , mouse2Img , mouse3Img , mouse4Img ;

function preload() {
    //load the images here
    bg = loadImage("garden.png");
    cat1Img = loadImage("cat1.png");
    cat2Img = loadImage("cat2.png","cat3.png");
    cat4Img = loadImage("cat4.png");

    mouse1Img = loadImage("mouse1.png");
    mouse2Img = loadImage("mouse2.png","mouse3.png");
    mouse4Img = loadImage("mouse4.png");

    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   mouse1 = createSprite(200,600);
   mouse1.addAnimation ("jerryStanding",mouse1Img);

   cat1 = createSprite(870,600);
   cat1.addAnimation("tomSlepping",cat1Img);

   mouse1.scale = 0.15;
   cat1.scale = 0.2;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat1.x-mouse1.x<(cat1.width-mouse1.width)/2){
    cat1.velocityX = 0;
    cat1.addAnimation("tomLast",cat4Img);
    cat1.x = 300;
    cat1.scale = 0.2;
cat1.changeAnimation("tomLast");

mouse1.addAnimation("jerryLast",mouse4Img);
mouse1.scale = 0.15;
mouse1.changeAnimation("jerryLast");

}

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat1.velocityX = -5;
    cat1.addAnimation("tomRunning",cat2Img);
    cat1.changeAnimation("tomRunning");

    mouse1.addAnimation("jerryTeasing",mouse2Img);
    mouse1.frameDelay = 25;
    mouse1.changeAnimation("jerryTeasing");
}

}
