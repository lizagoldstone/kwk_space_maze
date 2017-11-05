var x = 25
var y = 30
var w = 1200
var h = 600

function setup() {
    createCanvas(w, h)
    
    //lines of maze
   l1 = createSprite(0, 0)
   l1.draw = function() { rect(200, 50, 400, 10) }
    
   la=createSprite(0,0)
   la.draw = function() { rect(225,10,450,10)}
    
   l2=createSprite(0,0)
   l2.draw = function() { rect(400,145,10,200)}

   la2=createSprite(0,0)
   la2.draw = function() { rect(445,150,10,270)}

   l3=createSprite(0,0)
   l3.draw = function() { rect(300,240,200,10)}
   
   la3=createSprite(0,0)
   la3.draw = function() { rect(350,290,200,10)}
   
   l4=createSprite(0,0)
   l4.draw = function() { rect(200,310,10,150)}
   
   la4=createSprite(0,0)
   la4.draw = function() { rect(250,315,10,60)}
   
   l5=createSprite(0,0)
   l5.draw = function() { rect(295,390,200,10)}
   
   la5=createSprite(0,0)
   la5.draw = function() { rect(350,340,200,10)}
  
   l6=createSprite(0,0)
   l6.draw = function() { rect(400,460,10,150)}
    
   la6=createSprite(0,0)
   la6.draw = function() { rect(450,410,10,150)}
   
   l7=createSprite(0,0)
   l7.draw = function() { rect(495,540,200,10)}
   
   la7=createSprite(0,0)
   la7.draw = function() { rect(490,490,90,10)}
   
   l8=createSprite(0,0)
   l8.draw = function() { rect(600,300,10,490)}
   
   la8=createSprite(0,0)
   la8.draw = function() { rect(540,255,10,480)}
   
   l9=createSprite(0,0)
   l9.draw = function() { rect(805,50,420,10)}
   
   la9=createSprite(0,0)
   la9.draw = function() { rect(1080,80,10,150)}
   
   l10=createSprite(0,0)
   l10.draw = function() { rect(810 ,10,550,10)}
   
   l10a=createSprite(0,0)
  l10a.draw = function() { rect(1010,100,10,110)}
}

function draw() {
    clear()
    background(90,90,255)
    
    drawSprites()
    
   //WeWork
    fill(230,230,230)
    arc(1050,370,200,400,PI,TWO_PI)
    ellipse(1050,350,350,50) 
    
    //friends
    fill ("orange")//(100,200,100)
    ellipse(1100,300,25)
   
    fill(0)
    ellipse(1100,294,2)
    ellipse(1105,296,2)
    ellipse(1095,296,2)
    
    fill("purple")
    ellipse(1000,300,25)
    
    fill(0)
    ellipse(1000,294,2)
    ellipse(1005,296,2)
    ellipse(995,296,2)
    
    fill("pink")
    ellipse(1050,290,25)
    ellipse(1050,284,2)
    ellipse(1045,286,2)
    ellipse(1055,286,2)
    
    fill("red")
    ellipse(1100,302,5)
    ellipse(1000,302,5)
    ellipse(1050,294,5)
    
    //aliami
    fill(100,200,100)
    ellipse(x, y, 20)
    ellipse(x-4,y-2,2)
    ellipse(x+4,y-2,2)
    ellipse(x,y-4,2)
    fill("red")
    ellipse(x,y+4,4)
    
    //meteor
    fill ("gray")
    ellipse(100,100,30,30)
    ellipse (103,103,3)
    ellipse (107,107,5)
    
    ellipse(150,400,50)
    ellipse (145,403,15)
    ellipse (157,407,5)
    
    ellipse(700,500,70)
    ellipse (705,490,8)
    ellipse (690,500,11)
    
    ellipse(850,200,50)
    ellipse(855,205,10)
    ellipse(840,200,8)
    
    ellipse(500,200,50)
    ellipse(493,193,15)
    ellipse(503,200,4)
    

    
    //conditions for staying within the boundaries of window
    if (x > w) { x = w - 10 }
    if (x < 0) { x = 10 }
    if (y > h) { y = h - 10 }
    if (y < 0) { y = 10 }

    // text
    textSize(25)
    textStyle(BOLD)
    fill("white")
    text ("     Help Aliami get to" , 60,150)
    text ("the WeWork spaceship!", 50, 180)
    
    text ("Stay on the path to", 50,500)
    text ("avoid the asteroids!",50, 540)
    
    textStyle(NORMAL)
    textSize (20)
    //text ("Start!",10,80)
    
    
    
    text ("        By: Christina and Liza", 935,550)
    text ("Kode with Klossy Miami 2017", 915, 580)




}

//allows us to use the kesy to move the ball
function keyPressed() {
    if (keyCode === RIGHT_ARROW) {
        x = x + 18
    }
    if (keyCode === LEFT_ARROW) {
        x = x - 18
    }
    if (keyCode === DOWN_ARROW) {
        y = y + 18
    }
    if (keyCode === UP_ARROW) {
        y = y - 18
    }
}
