var Cat,mouse
var bg

function preload() {
    //load the images here
    cat1 = loadAnimation("cat1.png");
    cat2 = loadAnimation("cat2.png","cat3.png");
    cat3 = loadAnimation("cat4.png");
    
    mouse1= loadAnimation("mouse1.png");
    mouse2= loadAnimation("mouse2.png","mouse3.png");
    mouse3= loadAnimation("mouse4.png");

    bg = loadImage("garden.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    mouse = createSprite (200,600,15,15);
    mouse.addAnimation("eating",mouse1);
    mouse.scale=0.1;
    

    cat = createSprite (900,600,15,15);
    cat.addAnimation("seating",cat1);
    cat.scale=0.1;
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x <(cat.width + mouse.width)/2 ){
        cat.velocityX=0;
        cat.addAnimation("stop",cat3);
        cat.x=300;
        cat.changeAnimation("stop")

        mouse.addAnimation("touch",mouse3);
        mouse.changeAnimation("touch");
    }


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode===LEFT_ARROW){
      cat.velocityX=-2;
      cat.addAnimation("running",cat2);
      cat.changeAnimation("running")
      cat.scale=0.15
     
  }

  if(keyCode===RIGHT_ARROW){
   
    mouse.addAnimation("teasing",mouse2);
    mouse.frameDelay=25;
    mouse.changeAnimation("teasing");
   
}

if(keyCode===32){
    mouse.addAnimation("eating",mouse1);
    mouse.changeAnimation("eating")  
    cat.addAnimation("seating",cat1);
    cat.changeAnimation("seating")
    cat.x=900
    cat.scale=0.1
}
}
