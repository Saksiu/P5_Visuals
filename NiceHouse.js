function findMax(x1, x2) {
  if (x1>x2)
    return x1;
  return x2;
}

function findMin(x1, x2) {
  if (x1 < x2)
    return x1;
  return x2;
}

//alpha and beta are barycentric weights of point (cx,cy)
function pointInsideTriangle(cx, cy, x1, y1, x2, y2, x3, y3) {
  denominator = ((y2 - y3) * (x1 - x3) + (x3 - x2) * (y1 - y3));
  alpha = ((y2 - y3) * (cx - x3) + (x3 - x2) * (cy - y3)) / denominator;
  beta = ((y3 - y1) * (cx - x3) + (x1 - x3) * (cy - y3)) / denominator;
	
  return (alpha >= 0 && beta >= 0 && alpha+beta<=1);
}

function drawTriangle(x1, y1, x2, y2, x3, y3,trianglecolor) {

	//finding extreme points of the triangle to optimize
  maxX = findMax(findMax(x1, x2), x3);
  maxY = findMax(findMax(y1, y2), y3);

  minX = findMin(findMin(x1, x2), x3);
  minY = findMin(findMin(y1, y2), y3);

  for (x = minX; x < maxX; x++)
    for (y = minY; y < maxY; y++)
    	if(pointInsideTriangle(x,y,x1,y1,x2,y2,x3,y3))
    		set(x,y,trianglecolor);
}


function setup() {
  noLoop();
  createCanvas(800, 600);
}

function draw() { //noprotect

  //sky
  background(0, 0, 255, 100);

  //grass
  for (y = 400; y < height; y++)
    for (x = 0; x < width; x++)
      set(x, y, color(50, 200, 20));

  //flowers
  for (i = 0; i < 1000; i++)
    set(floor(random(0, width)),
      floor(random(400, height)),
      255, 255, 255);
      
  //building square
  for (y = 200; y < 400; y++)
    for (x = 200; x < width - 200; x++)
      set(x, y, color(160, 100, 0, 255));

  //building roof
 	drawTriangle(
  150,200,						//point1
  width-150,200,			//point2
  width/2,50,					//point3
  color(250,0,0,150));
  
  updatePixels();
}
