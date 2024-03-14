
// Function to create an abstract representation of detected faces in a grid of snapshots
function FaceAbstract() {
      console.log("Creating Face Abstract...");
  // Display captured snapshots in a grid
  for (let i = 0; i < snapshots.length; i++) {
    // Adjust spacing and positioning for each snapshot in the grid
    let x = 850 + (i % 5) * (scaledWidth + 10);
    let y = 1190 + Math.floor(i / 5) * (scaledHeight + 10);

    // Create a copy of the snapshot for face detection
    let faceImg = createImage(scaledWidth, scaledHeight);
    faceImg.copy(snapshots[i], 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight);
    
    // Detect faces within the current snapshot
    let faces = detector.detect(faceImg.canvas);

    // Draw semi-transparent red rectangles around detected faces
    noStroke();
    fill(255, 0, 0, 150); // Semi-transparent red fill for face rectangles

    for (let j = 0; j < faces.length; j++) {
      let face = faces[j];
      if (face[4] > 4) {
        // Draw a rectangle for the detected face
        rect(x + face[0], y + face[1], face[2], face[3]);

        // Add your face abstract representation here
        // You can use shapes, patterns, or any other creative representation
        // For example, drawing circles at face keypoints
        fill(255, 255, 0); // Yellow fill for abstract representation
        ellipse(x + face[0] + face[2] / 2, y + face[1] + face[3] / 2, face[2], face[3]);
      }
    }

    // Display the original snapshot if no face is detected
    if (faces.length === 0) {
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
    }
      // Add text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("face abstract", width / 2 -1150, 1190 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
          console.log(`Face Abstract created for snapshot ${i}.`);


  }

}
