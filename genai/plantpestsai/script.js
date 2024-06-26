// Classifier Variable
let classifier;
// Model URL
let imageModelURL = 'https://teachablemachine.withgoogle.com/models/8QUY0jIrR/';

// To store the classification
let label = '';
// will hold a ref to the input#file[file]
let input;

// Load the model first
function preload() {
  classifier = ml5.imageClassifier(imageModelURL + 'model.json');
  // img = loadImage('images/bird.jpg');
}
/**
 * Taken from the p5.js source
 * https://github.com/processing/p5.js/blob/cdd98d02fc4a96bf819a5b000779889e8bb842f9/src/dom/dom.js#L2028
 */
function fileSelectHandler(event) {
  for (const file of event.target.files) {
    p5.File._load(file, fileHandler);
  }
}
function fileHandler(file) {
  console.log(file);
  if (file.type === 'image') {
    // we can load the image into an DOM img element
    console.log('it was an image file');
    const imgElt = createImg(file.data, '');
    imgElt.hide();
    // but we can also load it into a p5.Image
    // and draw it to the canvas
    loadImage(file.data, (image) => {
      console.log('image data loaded into p5.Image');
      // letter box it (resize it to fit the canvas)
      // if (image.width > image.height) {
      //   console.log("resize to fit w", width);
      //   image.resize(width, 0);
      // } else {
      //   console.log("resize to fit h", height);
      //   image.resize(0, height);
      // }
      // img = image;
      let count = 0;
      const interval = setInterval(() => {
        count++;
        console.log('count', count);
        if (count === 5) {
          clearInterval(interval);
          classifier.classify(image, gotResult);
        }
      }, 1000);
    });
  }
}

function setup() {
  // createCanvas(320, 260);
  // Create the video
  input = select('#file');
  console.log(input);
  if (!input) throw new Error('input element missing');
  input.elt.addEventListener('change', fileSelectHandler, false);

  // classifier.classify(img, gotResult);

  // image(img, 0, 0);
  noCanvas();
}

function draw() {
  // background(0);
}

// When we get a result
function gotResult(error, results) {
  // If there is an error
  if (error) {
    console.error(error);
    return;
  }
  // The results are in an array ordered by confidence.
  // console.log(results[0]);
  label = results[0].label;
  location.href = `/output.html?label=${label}`;
  // Classifiy again!
}
