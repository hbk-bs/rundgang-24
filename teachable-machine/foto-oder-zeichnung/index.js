const imagePaths = [
  "images/foto/01.png",
  "images/foto/02.png",
  "images/foto/03.png",
  "images/foto/04.png",
  "images/foto/04.png",
  "images/foto/05.png",
  "images/foto/06.png",
  "images/foto/07.png",
  "images/zeichnung/11.png",
"images/zeichnung/12.png",
"images/zeichnung/13.png",
"images/zeichnung/14.png",
"images/zeichnung/15.png",
"images/zeichnung/16.png",
"images/zeichnung/17.png",
];

// document.addEventListener("DOMContentLoaded", function() {
//   var startButton = document.getElementById("startbutton");

//   startButton.addEventListener("click", function() {
//       // Öffne eine neue Seite
//       window.location.href = "quiz.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", function() {
//   var startButton = document.getElementById("about");

//   startButton.addEventListener("click", function() {
//       // Öffne eine neue Seite
//       window.location.href = "about.html";
//   });
// });
// document.addEventListener("DOMContentLoaded", function() {
//   var startButton = document.getElementById("index");

//   startButton.addEventListener("click", function() {
//       // Öffne eine neue Seite
//       window.location.href = "index.html";
//   });
// });




  // Classifier Variable
let classifier;
let guessType = "geklickt";
  // Model URL
  let imageModelURL = 'https://teachablemachine.withgoogle.com/models/d0j9ysMQu/';

  let imageToClassify;
  // To store the classification
  let label = "richtiges";
let randomImagePath ="bilder";

  // Load the model first
  function preload() {
    classifier = ml5.imageClassifier(imageModelURL + 'model.json');
     randomImagePath = imagePaths[Math.floor(Math.random() * imagePaths.length)]
    imageToClassify = loadImage(randomImagePath)
  }

  function setup() {
    
    const fotoButton = document.getElementById("foto-button");
    const zeichnungButton = document.getElementById("zeichnung-button");

    const img = createImg(randomImagePath);
    img.parent("image-container");
    
    
    fotoButton.addEventListener("click", function() {
      guessType = "gs-foto";  
      classifyImage();
    });
    zeichnungButton.addEventListener("click", function() {
      guessType = "gs-zeichnung";
      classifyImage();
    });
  }
    
  

  // function draw() {

  // }

  // Get a prediction for the current video frame
function classifyImage() {
    
    classifier.classify(imageToClassify, gotResult);

  }

  // When we get a result
  function gotResult(error, results) {
    // If there is an error
    if (error) {
      console.error(error);
      return;
    }
    // The results are in an array ordered by confidence.
    console.log(results[0]);
    label = results[0].label;
    location.href = `result.html?label=${label}&guesstype=${guessType}`;
 
  }