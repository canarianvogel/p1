
 var bola 


 function setup(){
  createCanvas(600,600)
bola=createSprite(123,123,10,10)
 }


 function draw(){
background("darkblue")
drawSprites()
if (keyDown(UP_ARROW)){
  bola.y-=5
  background("skyblue")
}


if (keyDown(DOWN_ARROW)){
  background("blue")
  bola.y+=5
  
}

if (keyDown(RIGHT_ARROW)){
  background("#00FFFF")
  bola.x+=5
  
}


if (keyDown(LEFT_ARROW)){
  background("#483D8B") 
  bola.x-=5
   
}
 }