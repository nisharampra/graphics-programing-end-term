
      function mesh() {
  console.log("Creating Mesh Effect...");

  // Display captured snapshots in a grid
  for (let i = 0; i < snapshots.length; i++) {
    let x = 420 + (i % 5) * (scaledWidth + 10); // Adjust spacing and positioning
    let y = 1400 + Math.floor(i / 5) * (scaledHeight + 10); // Adjust spacing and positioning

    // Face detection within each snapshot
    let faceImg = createImage(scaledWidth, scaledHeight);
    faceImg.copy(snapshots[i], 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight);
    let faces = detector.detect(faceImg.canvas);

    // Draw face rectangles and apply mesh on the face
    strokeWeight(2);
    stroke(160, 32, 240);
    noFill();

    for (let j = 0; j < faces.length; j++) {
      let face = faces[j];
      if (face[4] > 4) {
        // Extract the region of the detected face
        let faceRegion = faceImg.get(face[0], face[1], face[2], face[3]);

        // Draw the original snapshot
        console.log(`Drawing original snapshot for face ${i}...`);
        image(snapshots[i], x, y, scaledWidth, scaledHeight);

        // Apply a mesh effect on the face region
        console.log(`Applying mesh effect on face ${i}...`);
        drawMeshOnFace(x + face[0], y + face[1], face[2], face[3], 10, 10); // Adjust mesh parameters as needed
      }
    }

    // Display the original snapshot if no face is detected
    if (faces.length === 0) {
      console.log(`No face detected in snapshot ${i}. Displaying the original snapshot.`);
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
    }

    // Text below the grid
    fill(0, 0, 0);
    textSize(16);
    textAlign(CENTER);
    text("mesh on face", width / 2 - 1600, 1400 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
  }

  console.log("Mesh Effect creation complete.");
}

function drawMeshOnFace(faceX, faceY, faceWidth, faceHeight, cols, rows) {
  console.log(`Drawing mesh on face at (${faceX}, ${faceY}) with width ${faceWidth} and height ${faceHeight}...`);

  // Implement your mesh drawing logic here on the detected face
  for (let i = 0; i <= cols; i++) {
    let posX = faceX + (i / cols) * faceWidth;
    line(posX, faceY, posX, faceY + faceHeight);
  }

  for (let j = 0; j <= rows; j++) {
    let posY = faceY + (j / rows) * faceHeight;
    line(faceX, posY, faceX + faceWidth, posY);
  }

  console.log("Mesh drawing complete.");
}
