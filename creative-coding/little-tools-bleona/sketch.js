const saveButton= document.querySelector ('button#save');
const colorInput = document.querySelector ('input#color');
console.log(colorInput);
let paintColor = 'lightgreen';
colorInput.value = paintColor;
var spot = {
    x: 300,
    y: 400
}
   
    

var color= {paintColor} 

function setup () {
const canvas =createCanvas (600,700);
canvas. parent ('sketch');
console.log (saveButton);
background (255);
saveButton.addEventListener("click",()=>{
console.log ('clicked');
save('image.png');
});
colorInput.addEventListener ('input', ()=> {
paintColor= colorInput.value;

});

} 
  

    
  function mouseDragged() { 
    fill('white'); 
    noStroke(); 
    circle(mouseX, mouseY, 20); 
  } 






function draw() 
{
spot.x =random (0, width);
spot.y =random (0, height);
ellipse (spot.x, spot.y, 35,35);
fill (paintColor);

if (frameCount > 3000) { noLoop(); }
}



function clicked(){

    save('image.png')
}

function keyPressed () {
if (key === 's') {
    save ('image.png')
}

}
