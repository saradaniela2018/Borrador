var rojo = 31;
var pxg = 35; 
var azul = 31;
var pyg = 0;
var verde = 31;

var pya = 150;
var r = 237;
var g = 168;
var b = 87;

var pyg2  = 0;
var pxg2 = 135;
var pyg3 = 0;
var pxg4 = 165;
var pyg4= 0;
var pxg5 = 165;
var pya1 = 150;
var py= 0

var posx= 135;
var posy= 240;
var posx1= 135;

var r1= 50;
var g1= 50;
var b1= 51;
var r2= 141;
var g2= 126;
var b2= 220;
var r3= 237;
var g3= 168;
var b3= 87;

function setup() { 
  createCanvas(400, 270);
  background(255,230,200);
 
 noStroke ();
for (var num = 0; num < 5; num = num +1){
  fill (rojo, verde, azul,90);
  rect (pxg, pyg,100,30);
  pyg = pyg + 30;
 
  azul = azul + 49;
   rojo = rojo + 60;
  verde = verde + 59;
}
  
for (var num = 0; num <3; num = num +1){
    fill (r,g,b,110);
    rect (pxg, pya, 100, 30);
    pya = pya +30; 
    
    r= r + 2;
    g= g + 25;
    b= b + 34;
  }
  
  fill (255,255,255,230);
  rect (pxg,240,100,30);
  
for (var num = 0; num <9; num = num + 1) {
    fill (r1, g1, b1,120);
    rect (pxg2, pyg2, 30,30);
pyg2 = pyg2 + 30;

    r1= r1+ 107;
    g1= g1+ 88;
    b1= b1+ 77;
  }
  
   for (var num = 0; num <9; num = num + 1) {
    fill (255, 255, 220);
    rect (0, pyg3, 35,30);
pyg3 = pyg3 + 30;
   }
  
for (var num = 0; num < 5; num = num +1){
  fill (r2, g2, b2,100);
  rect (pxg4, pyg4,30,30);
  pyg4 = pyg4 + 30;
 
  b2 = b2 + 22;
  r2 = r2 + 40;
  g2 = g2 + 40;
  }
  
for (var num = 0; num <3; num = num +1){
    fill (r3,g3,b3,110);
    rect (pxg5, pya1, 30, 30);
    pya1 = pya1 +30; 
    
    r3= r3 + 2;
    g3= g3 + 25;
    b3= b3 + 34;
  }
  
for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
  line (posx, 240, 165, 270);
    posx = posx + 60;
  }
  
for (var num=0; num <2; num = num +1){
  strokeWeight (1);
  stroke (0,0,0);
    line (posx1, 270, 165, 240);
    posx1 = posx1 + 60;
  }
 
  line (195,240, 225,270);
  line (195,270, 225,240);
 
  noStroke (); 
for (var num = 0; num <9; num = num +1){
     fill (225,175,190,70);
     rect (195, py, 30, 30);
    py = py +30; 
  }
}