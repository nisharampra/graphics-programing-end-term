

// Function to display the Y’PbPr color in a grid
function displayYPbPrSegmentedGrid() {
      console.log("Displaying Y’PbPr Segmented Grid...");
  // Define the position for the grid of Y’PbPr color
  let x = 640; // Move the grid to the right
  let y = 850; // Adjust the y-coordinate for the Y’PbPr grid

  // Check if there is at least one snapshot before conversion
  if (snapshots.length > 0) {
    // Apply the Y’PbPr conversion to the latest snapshot
    yPbPrSegmentedImage = convertRGBtoYPbPr(snapshots[snapshots.length - 1]);
    // Display the Y’PbPr segmented image in the specified grid position
    image(yPbPrSegmentedImage, x, y, scaledWidth, scaledHeight);
               // Add text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("YPbPr", width / 2 -1400, 830 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

  } else {
    console.error('No snapshots available for Y’PbPr conversion.');

  }
  console.log("Y’PbPr Segmented Grid displayed successfully.");

}

// Function to convert an RGB image to Y’PbPr color space
function convertRGBtoYPbPr(img) {
      console.log("Converting RGB to Y’PbPr...");

  // Create an image in the Y’PbPr color space
  let yPbPrImage = createImage(img.width, img.height);

  // Load pixels for both the input RGB image and the Y’PbPr image
  yPbPrImage.loadPixels();
  img.loadPixels();

  // Process each pixel in the input RGB image
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i] / 255;
    let g = img.pixels[i + 1] / 255;
    let b = img.pixels[i + 2] / 255;

    // Convert RGB to Y’PbPr
    let y = 0.567 * r + 0.190 * g + 0.193 * b;
    let pb = -0.115 * r - 0.386 * g + 0.500 * b;
    let pr = 0.500 * r - 0.454 * g - 0.046 * b;

    // Set pixels in the Y’PbPr image
    yPbPrImage.pixels[i] = y * 255;
    yPbPrImage.pixels[i + 1] = (pb + 0.5) * 255;
    yPbPrImage.pixels[i + 2] = (pr + 0.5) * 255;
    yPbPrImage.pixels[i + 3] = img.pixels[i + 3]; // Preserve alpha value
  }

  // Update the pixel array of the Y’PbPr image
  yPbPrImage.updatePixels();

  return yPbPrImage;
      console.log("Conversion to Y’PbPr completed.");

}

// Function to display the segmented PhotoYCC color in a grid
function displayPhotoYCCSegmentedGrid() {
      console.log("Displaying PhotoYCC Segmented Grid...");

  // Define the position for the grid of segmented PhotoYCC color
  let x = 850; // Move the grid to the right
  let y = 850; // Adjust the y-coordinate for the PhotoYCC segmented grid

  // Check if there is at least one snapshot before conversion
  if (snapshots.length > 0) {
    // Apply the PhotoYCC conversion to the latest snapshot
    photoYCCSegmentedImage = convertRGBtoPhotoYCC(snapshots[snapshots.length - 1]);
    // Display the segmented PhotoYCC image in the specified grid position
    image(photoYCCSegmentedImage, x, y, scaledWidth, scaledHeight);
  } else {
    console.error('No snapshots available for PhotoYCC conversion.');
  }
      console.log("PhotoYCC Segmented Grid displayed successfully.");

}

// Function to convert an RGB image to PhotoYCC color space
function convertRGBtoPhotoYCC(img) {
      console.log("Converting RGB to PhotoYCC...");

  // Create an image in the PhotoYCC color space
  let photoYCCImage = createImage(img.width, img.height);

  // Load pixels for both the input RGB image and the PhotoYCC image
  photoYCCImage.loadPixels();
  img.loadPixels();

  // Process each pixel in the input RGB image
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i] / 255;
    let g = img.pixels[i + 1] / 255;
    let b = img.pixels[i + 2] / 255;

    // Apply the transfer function (gamma correction) to each color channel
    r = (r > 0.018) ? (1.099 * Math.pow(r, 0.45) - 0.099) : (r * 4.5);
    g = (g > 0.018) ? (1.099 * Math.pow(g, 0.45) - 0.099) : (g * 4.5);
    b = (b > 0.018) ? (1.099 * Math.pow(b, 0.45) - 0.099) : (b * 4.5);

    // Set pixels in the PhotoYCC image
    photoYCCImage.pixels[i] = r * 255;
    photoYCCImage.pixels[i + 1] = g * 255;
    photoYCCImage.pixels[i + 2] = b * 255;
    photoYCCImage.pixels[i + 3] = img.pixels[i + 3]; // Preserve alpha value
  }

  // Update the pixel array of the PhotoYCC image
  photoYCCImage.updatePixels();
    
// Add text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("PhotoYCC", width / 2 -1150, 830 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

  return photoYCCImage;
      console.log("Conversion to PhotoYCC completed.");

}
