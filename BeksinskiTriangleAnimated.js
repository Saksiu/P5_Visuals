function setup() {
  //noLoop();
  frameRate(20);
  createCanvas(800, 600);
  
  x1=100;
  y1=height-100;
  
  x2=width-100;
  y2=height-100;
  
  x3=width/2;
  y3=100;
  
  cx=x1;
  cy=y1;
}

function draw() { //noprotect
	background(0,0,0);
  stroke(255,255,255);
  
  for(i=0;i<10000;i++){
  	
    switch(floor(random(0,3.5))){
    	case 0:
      	cx=(cx+x1)/2;
        cy=(cy+y1)/2;
      	break;
      case 1:
      	cx=(cx+x2)/2;
        cy=(cy+y2)/2;
      break;
      default:
      	cx=(cx+x3)/2;
        cy=(cy+y3)/2;
      break;
    }
    point(cx,cy);
  }
  
  updatePixels();
}
