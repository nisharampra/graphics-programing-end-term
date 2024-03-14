//
//// Function to segment the red color in an image based on a threshold
//function segmentRedColor(img, threshold) {
//    // Check if the input image is valid
//    if (!img || typeof img.width === 'undefined') {
//      console.error('Invalid image passed to segmentRedColor');
//      // Return a default image if the input is invalid
//      return createImage(scaledWidth, scaledHeight);
//    }
//
//    // Create a copy of the input image for segmentation
//    let segmentedRed = createImage(scaledWidth, scaledHeight);
//    segmentedRed.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
//
//    // Process each pixel in the segmented image
//    segmentedRed.loadPixels();
//    for (let i = 0; i < segmentedRed.pixels.length; i += 4) {
//      let redValue = segmentedRed.pixels[i];
//      let greenValue = segmentedRed.pixels[i + 1];
//      let blueValue = segmentedRed.pixels[i + 2];
//
//      // Check if the pixel is predominantly red based on the threshold
//      if (redValue > threshold && greenValue < threshold && blueValue < threshold) {
//        // Set pixel to white
//        segmentedRed.pixels[i] = 255;
//        segmentedRed.pixels[i + 1] = 255;
//        segmentedRed.pixels[i + 2] = 255;
//      } else {
//        // Set pixel to black (not red)
//        segmentedRed.pixels[i] = 0;
//        segmentedRed.pixels[i + 1] = 0;
//        segmentedRed.pixels[i + 2] = 0;
//      }
//    }
//    // Update the pixel array of the segmented image
//    segmentedRed.updatePixels();
//  // Add text below the grid
//fill(0, 0, 0);
//textSize(16);
//textAlign(CENTER);
//text("red segment", width / 2 - 1600, 650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
//
//    return segmentedRed;
//  }
//  function displayRedSegmentedGrid() {
//    // Define the position for the grid of segmented red color
//    let x = 430; // Adjust the x-coordinate for the red segmented grid
//    let y = 650; // Adjust the y-coordinate for the red segmented grid
//    let redThresholdValue = redThresholdSlider.value();
//    // Segment the red color in the latest snapshot and display the result
//    redSegmentedImage = segmentRedColor(snapshots[snapshots.length - 1], redThresholdValue);
//    image(redSegmentedImage, x, y, scaledWidth, scaledHeight);
//
//  }
//
//  // Function to segment the green color in an image based on a threshold
//  function segmentGreenColor(img, greenThreshold) {
//    // Check if the input image is valid
//    if (!img || typeof img.width === 'undefined') {
//      console.error('Invalid image passed to segmentGreenColor');
//      // Return a default image if the input is invalid
//      return createImage(scaledWidth, scaledHeight);
//    }
//
//    // Create a copy of the input image for segmentation
//    let segmentedGreen = createImage(scaledWidth, scaledHeight);
//    segmentedGreen.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
//
//    // Process each pixel in the segmented image
//    segmentedGreen.loadPixels();
//    for (let i = 0; i < segmentedGreen.pixels.length; i += 4) {
//      let redValue = segmentedGreen.pixels[i];
//      let greenValue = segmentedGreen.pixels[i + 1];
//      let blueValue = segmentedGreen.pixels[i + 2];
//
//      // Check if the pixel is predominantly green based on the threshold
//      if (greenValue > greenThreshold && redValue < greenThreshold && blueValue < greenThreshold) {
//        // Set pixel to white
//        segmentedGreen.pixels[i] = 255;
//        segmentedGreen.pixels[i + 1] = 255;
//        segmentedGreen.pixels[i + 2] = 255;
//      } else {
//        // Set pixel to black (not green)
//        segmentedGreen.pixels[i] = 0;
//        segmentedGreen.pixels[i + 1] = 0;
//        segmentedGreen.pixels[i + 2] = 0;
//      }
//    }
//    // Update the pixel array of the segmented image
//    segmentedGreen.updatePixels();
//   // Add text below the grid
//fill(0, 0, 0);
//textSize(16);
//textAlign(CENTER);
//text("green segment", width / 2 -1400, 650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
//
//    return segmentedGreen;
//  }
//  function displayGreenSegmentedGrid() {
//    // Define the position for the grid of segmented green color
//    let x = 640; // Move the grid to the right
//    let y = 650; // Adjust the y-coordinate for the green segmented grid
//
//     // Use the individual green threshold slider value
//     let greenThresholdValue = greenThresholdSlider.value();
//     // Segment the green color in the latest snapshot and display the result
//     greenSegmentedImage = segmentGreenColor(snapshots[snapshots.length - 1], greenThresholdValue);
//     image(greenSegmentedImage, x, y, scaledWidth, scaledHeight);
//
//
//  }
//  // Function to segment the blue color in an image based on a threshold
//  function segmentBlueColor(img, blueThreshold) {
//    // Check if the input image is valid
//    if (!img || typeof img.width === 'undefined') {
//      console.error('Invalid image passed to segmentBlueColor');
//      // Return a default image if the input is invalid
//      return createImage(scaledWidth, scaledHeight);
//    }
//
//    // Create a copy of the input image for segmentation
//    let segmentedBlue = createImage(scaledWidth, scaledHeight);
//    segmentedBlue.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
//
//    // Process each pixel in the segmented image
//    segmentedBlue.loadPixels();
//    for (let i = 0; i < segmentedBlue.pixels.length; i += 4) {
//      let redValue = segmentedBlue.pixels[i];
//      let greenValue = segmentedBlue.pixels[i + 1];
//      let blueValue = segmentedBlue.pixels[i + 2];
//
//      // Check if the pixel is predominantly blue based on the threshold
//      if (blueValue > blueThreshold && redValue < blueThreshold && greenValue < blueThreshold) {
//        // Set pixel to white
//        segmentedBlue.pixels[i] = 255;
//        segmentedBlue.pixels[i + 1] = 255;
//        segmentedBlue.pixels[i + 2] = 255;
//      } else {
//        // Set pixel to black (not blue)
//        segmentedBlue.pixels[i] = 0;
//        segmentedBlue.pixels[i + 1] = 0;
//        segmentedBlue.pixels[i + 2] = 0;
//      }
//    }
//    // Update the pixel array of the segmented image
//    segmentedBlue.updatePixels();
//       // Add text below the grid
//fill(0, 0, 0);
//textSize(16);
//textAlign(CENTER);
//text("blue segment", width / 2 -1150, 650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
//
//    return segmentedBlue;
//  }
//
//
//  // Function to display the grid of segmented blue color
//  function displayBlueSegmentedGrid() {
//    // Define the position for the grid of segmented blue color
//    let x = 850; // Move the grid to the right
//    let y = 650; // Adjust the y-coordinate for the blue segmented grid
//
//    let blueThresholdValue = blueThresholdSlider.value();
//    // Segment the blue color in the latest snapshot and display the result
//    blueSegmentedImage = segmentBlueColor(snapshots[snapshots.length - 1], blueThresholdValue);
//    image(blueSegmentedImage, x, y, scaledWidth, scaledHeight);
//
//
//  }
// Function to segment the red color in an image based on a threshold
function segmentRedColor(img, threshold) {
  // Check if the input image is valid
  if (!img || typeof img.width === "undefined") {
    console.error("Invalid image passed to segmentRedColor");
    // Return a default image if the input is invalid
    return createImage(scaledWidth, scaledHeight);
  }

  // Create a copy of the input image for segmentation
  let segmentedRed = createImage(scaledWidth, scaledHeight);
  segmentedRed.copy(
    img,
    0,
    0,
    img.width,
    img.height,
    0,
    0,
    img.width,
    img.height
  );

  // Process each pixel in the segmented image
  segmentedRed.loadPixels();
  for (let i = 0; i < segmentedRed.pixels.length; i += 4) {
    let redValue = segmentedRed.pixels[i];
    let greenValue = segmentedRed.pixels[i + 1];
    let blueValue = segmentedRed.pixels[i + 2];

    // Check if the pixel is predominantly red based on the threshold
    if (
      redValue > threshold &&
      greenValue < threshold &&
      blueValue < threshold
    ) {
      // Set pixel to white
      segmentedRed.pixels[i] = 255;
      segmentedRed.pixels[i + 1] = 255;
      segmentedRed.pixels[i + 2] = 255;
    } else {
      // Set pixel to black (not red)
      segmentedRed.pixels[i] = 0;
      segmentedRed.pixels[i + 1] = 0;
      segmentedRed.pixels[i + 2] = 0;
    }
  }
  // Update the pixel array of the segmented image
  segmentedRed.updatePixels();

  // Add text below the grid
  fill(0, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text(
    "red segment",
    width / 2 - 1600,
    650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30
  );

  console.log("Segmented Red Image:", segmentedRed);
  return segmentedRed;
}

function displayRedSegmentedGrid() {
  // Define the position for the grid of segmented red color
  let x = 430; // Adjust the x-coordinate for the red segmented grid
  let y = 650; // Adjust the y-coordinate for the red segmented grid
  let redThresholdValue = redThresholdSlider.value();

  // Segment the red color in the latest snapshot and display the result
  redSegmentedImage = segmentRedColor(
    snapshots[snapshots.length - 1],
    redThresholdValue
  );
  image(redSegmentedImage, x, y, scaledWidth, scaledHeight);

  console.log("Displaying Red Segmented Grid:", redSegmentedImage);
}

// Function to segment the green color in an image based on a threshold
function segmentGreenColor(img, greenThreshold) {
  // Check if the input image is valid
  if (!img || typeof img.width === "undefined") {
    console.error("Invalid image passed to segmentGreenColor");
    // Return a default image if the input is invalid
    return createImage(scaledWidth, scaledHeight);
  }

  // Create a copy of the input image for segmentation
  let segmentedGreen = createImage(scaledWidth, scaledHeight);
  segmentedGreen.copy(
    img,
    0,
    0,
    img.width,
    img.height,
    0,
    0,
    img.width,
    img.height
  );

  // Process each pixel in the segmented image
  segmentedGreen.loadPixels();
  for (let i = 0; i < segmentedGreen.pixels.length; i += 4) {
    let redValue = segmentedGreen.pixels[i];
    let greenValue = segmentedGreen.pixels[i + 1];
    let blueValue = segmentedGreen.pixels[i + 2];

    // Check if the pixel is predominantly green based on the threshold
    if (
      greenValue > greenThreshold &&
      redValue < greenThreshold &&
      blueValue < greenThreshold
    ) {
      // Set pixel to white
      segmentedGreen.pixels[i] = 255;
      segmentedGreen.pixels[i + 1] = 255;
      segmentedGreen.pixels[i + 2] = 255;
    } else {
      // Set pixel to black (not green)
      segmentedGreen.pixels[i] = 0;
      segmentedGreen.pixels[i + 1] = 0;
      segmentedGreen.pixels[i + 2] = 0;
    }
  }
  // Update the pixel array of the segmented image
  segmentedGreen.updatePixels();

  // Add text below the grid
  fill(0, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text(
    "green segment",
    width / 2 - 1400,
    650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30
  );

  console.log("Segmented Green Image:", segmentedGreen);
  return segmentedGreen;
}

function displayGreenSegmentedGrid() {
  // Define the position for the grid of segmented green color
  let x = 640; // Move the grid to the right
  let y = 650; // Adjust the y-coordinate for the green segmented grid

  // Use the individual green threshold slider value
  let greenThresholdValue = greenThresholdSlider.value();
  // Segment the green color in the latest snapshot and display the result
  greenSegmentedImage = segmentGreenColor(
    snapshots[snapshots.length - 1],
    greenThresholdValue
  );
  image(greenSegmentedImage, x, y, scaledWidth, scaledHeight);

  console.log("Displaying Green Segmented Grid:", greenSegmentedImage);
}

// Function to segment the blue color in an image based on a threshold
function segmentBlueColor(img, blueThreshold) {
  // Check if the input image is valid
  if (!img || typeof img.width === "undefined") {
    console.error("Invalid image passed to segmentBlueColor");
    // Return a default image if the input is invalid
    return createImage(scaledWidth, scaledHeight);
  }

  // Create a copy of the input image for segmentation
  let segmentedBlue = createImage(scaledWidth, scaledHeight);
  segmentedBlue.copy(
    img,
    0,
    0,
    img.width,
    img.height,
    0,
    0,
    img.width,
    img.height
  );

  // Process each pixel in the segmented image
  segmentedBlue.loadPixels();
  for (let i = 0; i < segmentedBlue.pixels.length; i += 4) {
    let redValue = segmentedBlue.pixels[i];
    let greenValue = segmentedBlue.pixels[i + 1];
    let blueValue = segmentedBlue.pixels[i + 2];

    // Check if the pixel is predominantly blue based on the threshold
    if (
      blueValue > blueThreshold &&
      redValue < blueThreshold &&
      greenValue < blueThreshold
    ) {
      // Set pixel to white
      segmentedBlue.pixels[i] = 255;
      segmentedBlue.pixels[i + 1] = 255;
      segmentedBlue.pixels[i + 2] = 255;
    } else {
      // Set pixel to black (not blue)
      segmentedBlue.pixels[i] = 0;
      segmentedBlue.pixels[i + 1] = 0;
      segmentedBlue.pixels[i + 2] = 0;
    }
  }
  // Update the pixel array of the segmented image
  segmentedBlue.updatePixels();

  // Add text below the grid
  fill(0, 0, 0);
  textSize(16);
  textAlign(CENTER);
  text(
    "blue segment",
    width / 2 - 1150,
    650 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30
  );

  console.log("Segmented Blue Image:", segmentedBlue);
  return segmentedBlue;
}

// Function to display the grid of segmented blue color
function displayBlueSegmentedGrid() {
  // Define the position for the grid of segmented blue color
  let x = 850; // Move the grid to the right
  let y = 650; // Adjust the y-coordinate for the blue segmented grid

  let blueThresholdValue = blueThresholdSlider.value();
  // Segment the blue color in the latest snapshot and display the result
  blueSegmentedImage = segmentBlueColor(
    snapshots[snapshots.length - 1],
    blueThresholdValue
  );
  image(blueSegmentedImage, x, y, scaledWidth, scaledHeight);

  console.log("Displaying Blue Segmented Grid:", blueSegmentedImage);
}
