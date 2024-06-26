let classifier;
let imageModelURL = "https://teachablemachine.withgoogle.com/models/ZpuCuD-r2/";

var input;
var img;
let label = "";

function preload() {
  classifier = ml5.imageClassifier(imageModelURL + "model.json");
}

function setup() {
  input = createFileInput(handleFile);
  input.parent("file-container");
  input.elt.id = "file";
  input.hide();
  const canvas = createCanvas(400, 350);
  canvas.parent("output");

  rectMode(CENTER);
  fill(255);
  noStroke();
  rect(width / 2, height / 2, width - 20, height - 20);
}

function draw() {
  background("#f7d92f");

  if (img) {
    
    imageMode(CENTER);
    image(img, width / 2, height / 2);

   
    const additionalText = additionalTextMap[label];
    const additionalTextElement = document.getElementById('additional-text');
    if (additionalTextElement) {
      additionalTextElement.innerHTML = additionalText || ''; 
    }
  }
}


const additionalTextMap = {
  expressionism: "<p>That is <strong>EXPRESSIONISM</strong>.<p><p> Expressionism refers to art in which the image of reality is distorted in order to make it expressive of the artist’s inner feelings or ideas.</p><p> In expressionist art, colour in particular can be highly intense and non-naturalistic, brushwork is typically free and paint application tends to be generous and highly textured. Expressionist art tends to be emotional and sometimes mystical. It can be seen as an extension of Romanticism.<p>",
  impressionism: "<p>That is <strong>IMPRESSIONISM</strong>.<p><p> Impressionism developed in France in the nineteenth century and is based on the practice of painting out of doors and spontaneously on the spot rather than in a studio from sketches. Main impressionist subjects were landscapes and scenes of everyday life.</p><p>Characterizations of the style include small, visible brushstrokes that offer the bare impression of form, unblended color and an emphasis on the accurate depiction of natural light.<p>",
};


function handleFile(file) {
  if (file.type === "image") {
    loadImage(file.data, classifyImage);
  } else {
    alert("Please upload an image file.");
  }
}

function classifyImage(image) {
  classifier.classify(image, gotResult);
  if (image.width > image.height) {
    console.log(
      "image width is larger ",
      image.width,
      image.height,
      width,
      height
    );
    image.resize(width, 0);
    console.log("adjusted ", image.width, image.height, width, height);
  } else {
    console.log(
      "image height is larger ",
      image.width,
      image.height,
      width,
      height
    );
    image.resize(0, height);
    console.log("adjusted ", image.width, image.height, width, height);
  }
  img = image;
}

function gotResult( results) {


  label = results[0].label;
}
