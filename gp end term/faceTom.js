function faceTom() {
    // Display captured snapshots in a grid
    for (let i = 0; i < snapshots.length; i++) {
      let x = 640 + (i % 5) * (scaledWidth + 10);
      let y = 1190 + Math.floor(i / 5) * (scaledHeight + 10);
  
      // Face detection within each snapshot
      let faceImg = createImage(scaledWidth, scaledHeight);
      faceImg.copy(snapshots[i], 0, 0, scaledWidth, scaledHeight, 0, 0, scaledWidth, scaledHeight);
      let faces = detector.detect(faceImg.canvas);
  
      // Draw face rectangles
      strokeWeight(2);
      noFill();
  
      for (let j = 0; j < faces.length; j++) {
        let face = faces[j];
        if (face[4] > 4) {
          // Draw the original snapshot
          image(snapshots[i], x, y, scaledWidth, scaledHeight);
  
          // Draw a box around the face
          stroke(255, 0, 0);
          rect(x + face[0], y + face[1], face[2], face[3]);
  
          // Apply tint to the cartoon image and draw it over the face
          tint(255, 150); // Adjust the transparency as needed
          image(cartoonImage, x + face[0], y + face[1], face[2], face[3]);
          noTint();
        }
      }
  
      // Display the original snapshot if no face is detected
      if (faces.length === 0) {
        image(snapshots[i], x, y, scaledWidth, scaledHeight);
      }
         fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("face tom", width / 2 -1400, 1190 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    }
   
  }
  