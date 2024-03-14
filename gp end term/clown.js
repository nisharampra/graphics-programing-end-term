
function Clown() {
  // Display captured snapshots in a grid
  for (let i = 0; i < snapshots.length; i++) {
    // Calculate the position for each snapshot in the grid
    let x = 420 + (i % 5) * (scaledWidth + 10); // Adjust spacing and positioning
    let y = 1190 + Math.floor(i / 5) * (scaledHeight + 10); // Adjust spacing and positioning

    // Face detection within each snapshot
    let faceImg = createImage(scaledWidth, scaledHeight);
    // Copy the content of the current snapshot to the faceImg
    faceImg.copy(snapshots[i], 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight);
    // Detect faces in the faceImg using a face detection algorithm (e.g., using the 'detector' object)
    let faces = detector.detect(faceImg.canvas);

    // Draw face rectangles
    strokeWeight(2);
    stroke(255, 0, 0);
    noFill();

    for (let j = 0; j < faces.length; j++) {
      let face = faces[j];
      if (face[4] > 4) {
        // Draw the original snapshot if a face is detected
        image(snapshots[i], x, y, scaledWidth, scaledHeight);
          
        // Display the eyeball image on the nose
        let noseX = x + face[0] + face[2] / 2;
        let noseY = y + face[1] + face[3] / 2;

        // Check if the eyeImage is loaded before attempting to draw it
        if (eyeImage.width > 0 && eyeImage.height > 0) {
          // Adjust the size of the image (e.g., 30x30)
          let imageSize = 30;
          // Draw the eyeImage at the calculated position on the nose
          image(eyeImage, noseX - imageSize / 2, noseY - imageSize / 2, imageSize, imageSize);
        }
      }
    }

    // Display the original snapshot if no face is detected
    if (faces.length === 0) {
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
    }
   console.log(`Clown ${i}: ${faces.length} face(s) detected`);
// text below the grid
fill(0, 0, 0); 
textSize(16);
textAlign(CENTER);
text("Clown on the Nose", width / 2 - 1600, 1190 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

  }

}
