var backgroundImg;
var iss, issImg;
var spacecraft, spacecraftImg;
var hasDocked = false;


function preload(){
  backgroundImg = loadImage("image/image/spacebg.jpg");
  issImg = loadImage("image/image/iss.png")
  spacecraftImg = loadImage("image/image/spacecraft1.png")
  spacecraftImg1 = loadImage("image/image/spacecraft2.png")
  spacecraftImg2 = loadImage("image/image/spacecraft3.png")
  spacecraftImg3 = loadImage("image/image/spacecraft4.png")


}

function setup() {
  createCanvas(600,350);
  iss = createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale = 0.25

  spacecraft = createSprite(285, 240);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.15;


}

function draw() {
  background(backgroundImg); 

  spacecraft.addImage(spacecraftImg);

  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y = spacecraft.y -2.
    }

    if(keyDown("LEFT_ARROW")){
      spacecraft.addImage(spacecraftImg3);
      spacecraft.x = spacecraft.x -1.
      }

      if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraftImg2)
        spacecraft.x = spacecraft.x +1.
        }

        if(keyDown("UP_ARROW")){
          spacecraft.addImage(spacecraftImg1);

          }

          if(spacecraft.y <= (iss.y + 70)&& spacecraft.x <= (iss.x - 10)){
            hasDocked = true;
            textSize(25);
            fill ("white");
            text("Docking Succesfull", 200, 300)
          }

  drawSprites();

   

}