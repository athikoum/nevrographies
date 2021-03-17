
let img1;
let img2;
let img3;
let img4;
let button1;
let button2;
let str;
let imgC2=0;
let imgC3=0;
let imgC4=0;
let myFont;

function preload (){
 img1=loadImage ('data/neurography.jpg');
img2=loadImage ('data/neurons2.jpg');
img3 = loadImage ('data/neurons1.jpg');
img4 = loadImage ('data/neurons3.jpg');
myFont = loadFont ('data/font.ttf');
}


function setup() {
createCanvas(windowWidth,windowHeight );

button1=createButton('Παρατήρηση 2 ^');
button2=createButton ('<-Παρατήρηση 1');
button3=createButton ('Παρατήρηση 3->');

image (img1,0,0,windowWidth, windowHeight);

}
 

function draw() {
 //image (img1, windowWidth/3.5,windowHeight/16);
  button1.position(windowWidth/2,windowHeight/2);
  button2.position(windowWidth/3,windowHeight*3/5);
  button3.position(windowWidth*1.75/3, windowHeight*4/6);
 //if(imgC2===1){ 
 //image(img2, windowWidth/2, windowHeight/10,300,300); 
  //let str = 'Έμφρακτο που επηρρεάζει τη συχνότητα των καρδιακών παλμών. Από αυτό προκαλούνται οι αρρυθμίες.';
  //textSize(20);
  // fill(0,230,255);
  // textFont(myFont);
  // text (str,windowWidth*2/2.8, windowHeight/10,300,300);
  
 //} else if (imgC2===0)  {
 //}

  //button1.mousePressed(changeBG);
}
function keyPressed() {
  //img1.remove();
   if (keyCode === UP_ARROW){
     image (img2, windowWidth*5/9, windowHeight/6,300,200);
     let str = 'Εκφυλισμένος νευρώνας.Δισπλασίες στις απολείξεις που δυσχεραίνουν την κυκλοφορία, δημιουργώντας θρομβώσεις.';
  textSize(20);
   fill(0,230,255);
   textFont(myFont);
   text (str,windowWidth*4.6/6,windowHeight/5,300,300);
  
     //if (imgC2===0){
     //imgC2=1;
    // }
    // else if (imgC2===1){
       //imgC2=0;
// }
  //console.log(imgC2);

   
     }else{
       if (keyCode === LEFT_ARROW){
         image (img3,windowWidth*1/8,windowHeight*3/10,300,200);
         let str = 'Κατά Φύσιν νευρώνες χρόνου - φυσιολογική ροή';
   textSize(20);
   fill(0,230,255);
   textFont(myFont);
   text (str,windowWidth*1/25,windowHeight*5/14,140,550);
         //img2.remove();
 }else{
   if (keyCode === RIGHT_ARROW){
     image (img4,windowWidth*5/7.5, windowHeight*4/6.8,300,200);
      let str = 'Τελικό στάδιο εκφυλισμού (διατρητοειδές). Προσβάλλεται το συμπαθητικό σύστημα';
   textSize(20);
   fill(0,230,255);
   textFont(myFont);
   //text (str,windowWidth*1.75/10, windowHeight*3.6/4);
   text (str,windowWidth*7.9/9, windowHeight*4/6.8,200,200 );
   
   }else{
   if (keyCode === ENTER){
     image (img1, 0,0,windowWidth, windowHeight);

 }
 }
 }
  
}
}


function mousePressed() {
  //if (mouseX > 0 && mouseX < 100 && mouseY > 0 && mouseY < 100) {
    let fs = fullscreen();
    fullscreen(!fs);
  } 
//  function windowResized() {
//  resizeCanvas(windowWidth, windowHeight);
//}
