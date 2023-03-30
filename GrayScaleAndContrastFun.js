 function preload() {
   img = loadImage("https://raw.githubusercontent.com/scikit-image/scikit-image/master/skimage/data/astronaut.png");
   img_h = createImage(256, 256);
   img_s = createImage(256, 256);
   img_v = createImage(256, 256);
 }

 function setup() {
   createCanvas(512, 512);

   img.resize(256, 256);

   img.loadPixels();
   img_h.loadPixels();
   img_s.loadPixels();
   img_v.loadPixels();

   for (y = 0; y < img.height; y++)
     for (x = 0; x < img.width; x++) {

       pos = 4 * (y * img.width + x);

       r = img.pixels[pos]; //to jest wartość dla R
       g = img.pixels[pos + 1]; //to jest wartość dla G
       b = img.pixels[pos + 2]; //to jest wartość dla B

       cmax = Math.max(r, g, b);
       cmin = Math.min(r, g, b);

       v = cmax;
       l = (cmax + cmin) / 2;
       c = cmax - cmin;
       s = c / cmax;

       if (c == 0) h = 0;
       else if (v == r) h = ((g - b) / c) % 6;
       else if (v == g) h = ((b - r) / c) + 2;
       else /*v==b*/ h = ((r - g) / c) + 4;
       
       h/=6;
       if(h<0)	h+=1;
       img_v.set(x, y, v);
       img_s.set(x, y, s * 255);
       img_h.set(x,y,h*255);
     }

   img_h.updatePixels();
   img_s.updatePixels();
   img_v.updatePixels();

   image(img_h, 0, 0);
   image(img_s, 256, 0);
   image(img_v, 0, 256);
   image(img, 256, 256);
 }
