
// Function to display individual color channels in a grid
function displayColorChannels() {
  // Check if the color channel images are available
  if (rChannelImage && gChannelImage && bChannelImage) {
      let x = 430; // Move the grid to the right
      let y = 450;
    
      // Display the red, green, and blue color channels in a grid
      console.log("Displaying red channel");
      image(rChannelImage, x, y, scaledWidth, scaledHeight);
      fill(0, 0, 0);
      textSize(16);
      textAlign(CENTER);
      text("blue color ", width / 2 - 1200, 430 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

      console.log("Displaying green channel");
      image(gChannelImage, x + gridSpacing, y, scaledWidth, scaledHeight);
      fill(0, 0, 0);
      textSize(16);
      textAlign(CENTER);
      text("green color", width / 2 - 1400, 430 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

      console.log("Displaying blue channel");
      image(bChannelImage, x + 2 * gridSpacing, y, scaledWidth, scaledHeight);
      fill(0, 0, 0);
      textSize(16);
      textAlign(CENTER);
      text("red color", width / 2 - 1600, 430 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
  }
}

// Function to extract a specific color channel from an image
function extractChannel(img, channel) {
  console.log(`Extracting ${channel} channel`);
  let extractedChannel = createImage(scaledWidth, scaledHeight);
  extractedChannel.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);

  // Apply a channel filter based on the specified color channel
  if (channel === 'red') {
      extractedChannel = applyChannelFilter(extractedChannel, [1, 0, 0]);
  } else if (channel === 'green') {
      extractedChannel = applyChannelFilter(extractedChannel, [0, 1, 0]);
  } else if (channel === 'blue') {
      extractedChannel = applyChannelFilter(extractedChannel, [0, 0, 1]);
  }
  
  return extractedChannel;
}

// Function to apply a channel filter to an image
function applyChannelFilter(img, filter) {
  console.log("Applying channel filter");
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i += 4) {
      // Apply the filter to each pixel in the image
      img.pixels[i] *= filter[0];
      img.pixels[i + 1] *= filter[1];
      img.pixels[i + 2] *= filter[2];
  }
  img.updatePixels();
  return img;
}

// Function to convert an image to grayscale
function convertToGrayscale(img) {
  console.log("Converting to grayscale");
  let newImage = createImage(img.width, img.height);
  newImage.copy(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
  // Apply a grayscale filter to the new image
  newImage.filter(GRAY);
  return newImage;
}

// Function to adjust the brightness of an image
function adjustBrightness(img, value) {
  console.log(`Adjusting brightness by ${value}`);
  img.loadPixels();
  for (let i = 0; i < img.pixels.length; i++) {
      // Adjust the brightness of each pixel in the image
      img.pixels[i] += value;
  }
  img.updatePixels();
  return img;
}
