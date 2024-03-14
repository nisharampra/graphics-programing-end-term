
function faceblur() {
  // Display captured snapshots in a grid
  for (let i = 0; i < snapshots.length; i++) {
    let x = 420 + (i % 5) * (scaledWidth + 10); // Adjust spacing and positioning
    let y = 1000 + Math.floor(i / 5) * (scaledHeight + 10); // Adjust spacing and positioning

    // Face detection within each snapshot
    let faceImg = createImage(scaledWidth, scaledHeight);
    faceImg.copy(snapshots[i], 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight);
    let faces = detector.detect(faceImg.canvas);

    // Draw face rectangles
    strokeWeight(2);
    stroke(255, 0, 0);
    noFill();

    for (let j = 0; j < faces.length; j++) {
      let face = faces[j];
      if (face[4] > 4) {
        // Extract the region of the detected face
        let faceRegion = faceImg.get(face[0], face[1], face[2], face[3]);

        // Check for keypresses and apply different effects
        if (key === 'a') {
          // a. Greyscale
          faceRegion.filter(GRAY);
        } else if (key === 'b') {
          // b. Blur the face region
          faceRegion.filter(BLUR, 5); // Adjust the blur amount as needed
        } else if (key === 'c') {
          // c. Color conversion (reuse code from task 9)
          faceRegion.filter(GRAY);
          faceRegion.filter(INVERT);
        } else if (key === 'd') {
          // d. Pixelate the face region
          faceRegion.filter(GRAY);
          pixelate(faceRegion, 5); // Adjust the pixelation amount as needed
        }

        // Draw the original snapshot
        image(snapshots[i], x, y, scaledWidth, scaledHeight);

        // Draw the modified face region on top
        image(faceRegion, x + face[0], y + face[1], face[2], face[3]);
      }
    }

    // Display the original snapshot if no face is detected or no key is pressed
    if (faces.length === 0 || key === '') {
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
    }
       // Add text below the grid
  let textX = 420;
  let textY = 1150;
let textMessage = "face recgonisation press:a,b,c,d";
  fill(0,0,0);
  textSize(16);
  text(textMessage, textX, textY);
  }
}


// Function to pixelate the image
// Function to pixelate the image
function pixelate(img, resolution) {
  img.loadPixels();
  for (let x = 0; x < img.width; x += resolution) {
    for (let y = 0; y < img.height; y += resolution) {
      let avePixInt = calculateAveragePixelIntensity(img, x, y, resolution);

      // Iterate through the block and set pixel values
      for (let i = 0; i < resolution; i++) {
        for (let j = 0; j < resolution; j++) {
          let pixelX = x + i;
          let pixelY = y + j;

          // Ensure the pixel coordinates are within the image bounds
          if (pixelX < img.width && pixelY < img.height) {
            img.set(pixelX, pixelY, img.get(pixelX, pixelY));
          }
        }
      }
    }
  }
  img.updatePixels();
}


// Function to calculate the average pixel intensity in a block
function calculateAveragePixelIntensity(img, startX, startY, resolution) {
  let sum = 0;
  for (let i = 0; i < resolution; i++) {
    for (let j = 0; j < resolution; j++) {
      let index = (startY + j) * img.width + (startX + i);
      sum += img.pixels[index * 4]; // Assuming a greyscale image
    }
  }
  return sum / (resolution * resolution);
}
