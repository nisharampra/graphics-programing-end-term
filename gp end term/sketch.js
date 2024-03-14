let webcam;
let captureButton;
let snapshots = [];
let gridSpacing = 200;
let scaledWidth = 160;
let scaledHeight = 120;

let rChannelImage, gChannelImage, bChannelImage;
let redSegmentedImage;
// let thresholdSlider;
let greenSegmentedImage;
let greenThresholdValue;
// Declare slider variables
let greenThresholdSlider;
let blueThresholdSlider;
let redThresholdValue ;

// Declare individual threshold variables
let yPbPrThresholdValue = 50;
let photoYCCThresholdValue = 50;



let yPbPrSegmentedImage;
let photoYCCSegmentedImage;

let w = 160;
let h = 120;
let detector;
let classifier = objectdetect.frontalface;
let faceImg;
let eyeImage; // Load your eyeball image before using it
let cartoonImage;
let flowerImages = []; // Add your flower images to this array

// Define the dimensions of the frame image
let frameWidth = 130; // Adjust the width of the frame
let frameHeight = 130; // Adjust the height of the frame
let redSlider, greenSlider, blueSlider;


let centerX = 900; // X-coordinate of the center of the circle
let centerY = 1400; // Y-coordinate of the center of the circle
let radius = 20; // Radius of the circular motion
let angle = 0; // Initial angle
let angularSpeed = 0.05; // Angular speed of the revolving motion


function setup() {
  createCanvas(4200, 3000);

  // Step 1: Load image from webcam
  webcam = createCapture(VIDEO);
  webcam.size(640, 480);
  webcam.hide();

  // Create a button for capturing snapshots
  captureButton = createButton('Capture');
  captureButton.position(10, 500);
  captureButton.mousePressed(takeSnapshot);


  // Initialize redSegmentedImage
  redSegmentedImage = createImage(scaledWidth, scaledHeight);

    // Initialize PhotoYCC segmented image
  photoYCCSegmentedImage = createImage(scaledWidth, scaledHeight);
    
    // Create a button for taking screenshots
  screenshotButton = createButton('Screenshot');
  screenshotButton.position(10, 560); // Adjust the position as needed
  screenshotButton.mousePressed(saveScreenshot);
    
    
    
  // Face detection setup
  pixelDensity(1);
  detector = new objectdetect.detector(w, h, 1.2, classifier);
  faceImg = createImage(w, h);


  
  // Create sliders for adjusting individual color thresholds
  redThresholdSlider = createSlider(0, 255, 50); // Set initial value as needed
  redThresholdSlider.position(430, 780);

  greenThresholdSlider = createSlider(0, 255, 50); // Set initial value as needed
  greenThresholdSlider.position(640, 780);

  blueThresholdSlider = createSlider(0, 255, 50); // Set initial value as needed
  blueThresholdSlider.position(850, 780);


  // Create sliders for adjusting Y'PbPr and PhotoYCC thresholds
  yPbPrThresholdSlider = createSlider(0, 255, 50); // Set initial value as needed
  yPbPrThresholdSlider.position(640, 1130);

  photoYCCThresholdSlider = createSlider(0, 255, 50); // Set initial value as needed
  photoYCCThresholdSlider.position(850, 1130);

}


function saveScreenshot() {
  // Save the current canvas as an image
  saveCanvas('screenshot', 'png');
}
function preload() {
  eyeImage = loadImage('assets/clown.webp');
  cartoonImage = loadImage('assets/Tom.png'); 
  frameImage = loadImage('assets/frame.png');


}
function draw() {
  background(101, 115, 131);

  // Display the webcam image
  image(webcam, 10, 10);

  // Display captured snapshots in a grid
  displaySnapshots();

  // Display captured snapshots in grayscale with increased brightness in a grid
  displayGrayscaleSnapshots();

  // Display individual color channels in a grid
  displayColorChannels();

  // Display segmented red color in a grid
  displayRedSegmentedGrid();

  // Display segmented green color in a grid
  displayGreenSegmentedGrid();
    
  // Display segmented blue color in a grid
  displayBlueSegmentedGrid();
    
  // Display 2 snapshots in a grid
  display2Snapshots();
    
  // Display segmented YPbPr color in a grid
  displayYPbPrSegmentedGrid();
    
  // Display segmented PhotoYCC color in a grid
  displayPhotoYCCSegmentedGrid();

  // Display YPbPr segmented grid with threshold
  displayYPbPrSegmentedGridWithThreshold();

  // Display PhotoYCC segmented grid with threshold
  displayPhotoYCCSegmentedGridWithThreshold();

  // Face detection and cartoon replacement
  faceTom();

  // Display the face-blurred snapshots
  faceblur();

  // Display the clown image on face
  Clown();

  // Display abstract representation of detected faces
  FaceAbstract();
  
  // Apply mesh effect on detected faces
  mesh();

  // Display snapshots within a frame
  faceFrame();

  // Display the face-blurred snapshots
  faceblur();

  // Display snapshots in a revolving grid motion
  revolvingGrid();
}


  

