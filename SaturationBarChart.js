function preload() {
  img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
}

function setup() {
  createCanvas(522, 256);
  background(255);
  stroke(0);
  chartoffset = 266;

  img.resize(256, 256);
	
  img.filter('gray');
	image(img, 0, 0);
  img.loadPixels();
  
  var tablica = new Array(256);
  tablica.fill(0);

  for (y = 0; y < img.height; y++)
    for (x = 0; x < img.width; x++)
      tablica[img.pixels[x * y * 4]]++;

  for (i = 0; i < img.width; i++)
    line(i + chartoffset, 256-((tablica[i]) / (Math.max.apply(null, tablica)) * img.height*2.1+10),
      	 i + chartoffset, 256);
}
