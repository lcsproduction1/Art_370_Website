var f = 0;
var canvas;

function setup() {
    //sketch is full width & height w/line below
    canvas =  createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    //sketch is below otherwise websites, print, bio/contact hovers wouldn't work
    canvas.style('z-index', '-1');

    //2 lines below for my design portfolio integration
    // Drawing-machine =createVideo("Drawing-machine. ");
    // Drawing-Machine.hide();
    //Drawing-Machine.loop();
}

    //sketch is full width when viewport size is changed by dragging
    function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    }


    function draw() {
    //Schiffman-makes bkgrd clear behind sketch
    clear();
    //drawing machine will show up within canvas instead of underneath or to the side
    //image(Drawing-Machine,500,500);
    //moon at top left
     fill(255, 0, 128, 100);
     noStroke();
     ellipse(0,0,380,380);

     //pink circle when move mouse, black circle when mouse pressed
     //moves w/mouse due to mouseX,mouseY
     if (mouseIsPressed) {
     fill(255, 153, 0, 200);
     }
     else {
     fill(230,230,230,50);
     }
     ellipse(mouseX, mouseY, 40, 40);
     textSize(80);
     text("design solutions",530,250);

     //simple pink flower rotates
     fill(255, 128, 0, 57);
    // translate(500, 200);
     noStroke();
     for (var i = 0; i < 5; i ++) {
     rotate(mouseX / 300.0); //makes it spin
     ellipse(0, 30, 40, 680);
     //rotate(PI/5);//gives it flower shape
     }

/*
 //moving pink flower (instead of her red bus)
push();
translate(f, 200);//changed from 0 to 300, I put 200
fill(204, 21, 192, 97);
//translate(580, 200); she deleted this
noStroke();
for (var i = 0; i < 10; i ++) {//makes ellipse into flower shape
ellipse(20, 130, 20, 380);
rotate(PI/5);
}
if (f < width + 300) {//she changed from 25 to 300
f++;
} //else {
//f = -300;//she changed from -250 to -300
//}
pop();

 /* //blue to purple ellipse when mouse pressed, no movement         w/mouse cuz no mouseX,mouseY
  if (mouseIsPressed) {
  fill(104, 21, 242, 67);//purple when pressed
  } else {
  fill(0, 155, 255,77);//blue normally
  strokeWeight(3);
  }
  ellipse(500, 250, 20, 550);//instead of 500 can do width/2 but then oval is centered
 */

 /*//diag blue/orange lines that spiral,from book
 stroke(0, 155, 255,87); //Blue line
 line(0, 0, mouseX, height);

 stroke(104, 21, 242, 200);//Purple line
 line(0, 0, mouseX + 120, height);

 stroke(225, 163, 120, 200);//Orange line
 line(0, 0, mouseX + 250, height);

 stroke(204, 21, 192, 197);// Pink line
 var mx = mouseX/2 + 10;
 line(0, 0, mx, height);
 translate(mouseX, mouseY);*/

        /* //moving pink flower (instead of her red bus)
 push();
 translate(f, 200);//changed from 0 to 300, I put 200
 fill(204, 21, 192, 97);
 //translate(580, 200); she deleted this
 noStroke();
 for (var i = 0; i < 10; i ++) {//makes ellipse into flower shape
 ellipse(20, 130, 20, 380);
 rotate(PI/5);
 }
 if (f < width + 300) {//she changed from 25 to 300
     f++;
 } else {
     f = -300;//she changed from -250 to -300
 }
 pop();

 //moving purple flower (instead of her red bus)
 push();
 translate(f, 500);//changed from 0 to 300, I put 500, lowers flower
 fill(104, 21, 242, 57);
 translate(580, 200);//put in to lower it, move to rt
 noStroke();
 for (var i = 0; i < 10; i ++) {
 ellipse(20, 130, 20, 380);
 rotate(PI/4);
 }
 if (f < width + 300) {//she changed from 25 to 300
     f++;
 } else {
     f = -300;//she changed from -250 to -300
 }
 pop();*/

 /*//moving blue flower (instead of her red bus)
 push();
 translate(f, 400);//changed from 0 to 300
 fill(40, 21, 242, 37);
 translate(280, 70);//put in to lower it, move to rt
 noStroke();
 for (var i = 0; i < 10; i ++) {
 ellipse(20, 130, 20, 380);
 rotate(PI/4);
 }
 if (f < width + 300) {//she changed from 25 to 300
     f++;
 } else {
     f = -300;//she changed from -250 to -300
 }
 pop();

 //diagonal pink lines w/white tips
 fill(255);
 stroke(127, 63, 120);
 strokeWeight(1);
 for (var y = 18; y <= height+18; y += 100) {
 for (var x = 18; x <= width+18; x += 100) {
 ellipse(x, y, 4, 4);
 // Draw a line to the center of the display
 line(x, y, 0, 0);
 }
 }*/

}
