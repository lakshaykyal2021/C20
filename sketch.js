var fr,mr;


function setup() 
{
  createCanvas(800,400);
  fr=createSprite(300, 200, 50, 80);
  fr.shapeColor="blue";
  mr=createSprite(700, 200, 80, 30);
  mr.shapeColor="blue";
  mr.velocityX= -5;
  fr.velocityX= +5;

}

function draw() 
{
  background("black");
 // mr.x=mouseX;
  //mr.y=mouseY;
  console.log(mr.x-fr.x);
 /* if(mr.x-fr.x <mr.width/2+fr.width/2   
    && fr.x-mr.x <mr.width/2+fr.width/2  
    && mr.y-fr.y <mr.height/2+fr.height/2
    && fr.y-mr.y <fr.height/2+mr.height/2
    )
  {
    fr.shapeColor="orange";
    mr.shapeColor="orange";
  }
  else
  {
    fr.shapeColor="blue";
    mr.shapeColor="blue";
  }*/
  if(mr.x-fr.x <mr.width/2+fr.width/2   
    && fr.x-mr.x <mr.width/2+fr.width/2)
    {
      mr.velocityX=mr.velocityX*(-1);
      fr.velocityX=fr.velocityX*(-1);
    }
    if(mr.y-fr.y <mr.height/2+fr.height/2
      && fr.y-mr.y <fr.height/2+mr.height/2)

      {
        mr.velocityY=mr.velocityY*(-1);
        fr.velocityY=fr.velocityY*(-1); 
      }
  drawSprites();
}
