
function displayYPbPrSegmentedGridWithThreshold() {
        console.log("Displaying Y'PbPr Segmented Grid with Threshold...");

    //  position for the grid of segmented Y’PbPr color
    let x = 640; // Move the grid to the right
    let y = 1000; // Adjust the y-coordinate for the Y’PbPr segmented grid with threshold
  
    // Check if there is at least one snapshot before conversion
    if (snapshots.length > 0) {
      // Apply the Y’PbPr conversion to the latest snapshot
      yPbPrSegmentedImage = convertRGBtoYPbPr(snapshots[snapshots.length - 1]);
  
      // Set a threshold for Y' value
      let yPbPrThreshold = yPbPrThresholdSlider.value(); 
      // Segment the Y’PbPr color based on the threshold and display the result
      let yPbPrThresholdedImage = segmentYPbPrColor(yPbPrSegmentedImage, yPbPrThreshold);
      image(yPbPrThresholdedImage, x, y, scaledWidth, scaledHeight);
    
    } else {
      console.error('No snapshots available for Y’PbPr conversion.');
    }
    console.log("Y'PbPr Segmented Grid displayed successfully.");

  }
  
  // Function to segment the Y’PbPr color in an image based on a threshold
  function segmentYPbPrColor(img, yThreshold) {
          console.log("Segmenting Y'PbPr Color...");

    // Check if the input image is valid
    if (!img || typeof img.width === 'undefined') {
      console.error('Invalid image passed to segmentYPbPrColor');
      // Return a default image if the input is invalid
      return createImage(scaledWidth, scaledHeight);
    }
  
    // Create a copy of the input image for segmentation
    let segmentedYPbPr = createImage(scaledWidth, scaledHeight);
    segmentedYPbPr.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  
    // Process each pixel in the segmented image
    segmentedYPbPr.loadPixels();
    for (let i = 0; i < segmentedYPbPr.pixels.length; i += 4) {
      let yValue = segmentedYPbPr.pixels[i];
  
      // Check if the Y' value is above the threshold
      if (yValue > yThreshold) {
        // Set pixel to white
        segmentedYPbPr.pixels[i] = 255;
        segmentedYPbPr.pixels[i + 1] = 255;
        segmentedYPbPr.pixels[i + 2] = 255;
      } else {
        // Set pixel to black
        segmentedYPbPr.pixels[i] = 0;
        segmentedYPbPr.pixels[i + 1] = 0;
        segmentedYPbPr.pixels[i + 2] = 0;
      }
    }
    // Update the pixel array of the segmented image
    segmentedYPbPr.updatePixels();
        // Add text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("ypbpr segment", width / 2 -1400, 1000 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    return segmentedYPbPr;
          console.log("Y'PbPr Color segmented successfully.");

  }
  
  
  
  // Function to display the PhotoYCC segmented grid with threshold
  function displayPhotoYCCSegmentedGridWithThreshold() {
          console.log("Displaying PhotoYCC Segmented Grid with Threshold...");

    // Define the position for the grid of segmented PhotoYCC color
    let x = 850; // Move the grid to the right
    let y = 1000; // Adjust the y-coordinate for the PhotoYCC segmented grid with threshold
  
    // Check if there is at least one snapshot before conversion
    if (snapshots.length > 0) {
      // Apply the PhotoYCC conversion to the latest snapshot
      photoYCCSegmentedImage = convertRGBtoPhotoYCC(snapshots[snapshots.length - 1]);
  
      // Set a threshold for Y' value in PhotoYCC
      let yccThreshold = photoYCCThresholdSlider.value(); 
      // Segment the PhotoYCC color based on the threshold and display the result
      let photoYCCThresholdedImage = segmentPhotoYCCColor(photoYCCSegmentedImage, yccThreshold);
      image(photoYCCThresholdedImage, x, y, scaledWidth, scaledHeight);
  
    } else {
      console.error('No snapshots available for PhotoYCC conversion.');
    }
          console.log("PhotoYCC Segmented Grid displayed successfully.");

  }
  
  
  // Function to segment the PhotoYCC color in an image based on a threshold
  function segmentPhotoYCCColor(img, yccThreshold) {
          console.log("Segmenting PhotoYCC Color...");

    // Check if the input image is valid
    if (!img || typeof img.width === 'undefined') {
      console.error('Invalid image passed to segmentPhotoYCCColor');
      // Return a default image if the input is invalid
      return createImage(scaledWidth, scaledHeight);
    }
  
    // Create a copy of the input image for segmentation
    let segmentedPhotoYCC = createImage(scaledWidth, scaledHeight);
    segmentedPhotoYCC.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  
    // Process each pixel in the segmented image
    segmentedPhotoYCC.loadPixels();
    for (let i = 0; i < segmentedPhotoYCC.pixels.length; i += 4) {
      let yValue = segmentedPhotoYCC.pixels[i];
  
      // Check if the Y' value in PhotoYCC is above the threshold
      if (yValue > yccThreshold) {
        // Set pixel to white
        segmentedPhotoYCC.pixels[i] = 255;
        segmentedPhotoYCC.pixels[i + 1] = 255;
        segmentedPhotoYCC.pixels[i + 2] = 255;
      } else {
        // Set pixel to black
        segmentedPhotoYCC.pixels[i] = 0;
        segmentedPhotoYCC.pixels[i + 1] = 0;
        segmentedPhotoYCC.pixels[i + 2] = 0;
      }
    }
    // Update the pixel array of the segmented image
    segmentedPhotoYCC.updatePixels();
       // Add text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("segmentedPhotoYCC", width / 2 -1150, 1000 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

  
    return segmentedPhotoYCC;
            console.log("PhotoYCC Color segmented successfully.");

  }
  
