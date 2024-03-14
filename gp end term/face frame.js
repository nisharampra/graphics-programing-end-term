function faceFrame() {
  console.log("Creating Face Frame...");

    // Display captured snapshots in a grid within the frame
    for (let i = 0; i < snapshots.length; i++) {
      // Display the frame image
    let frameX = 640; // x-coordinate of the frame
    let frameY = 1400; //  y-coordinate of the frame
    image(frameImage, frameX, frameY, frameWidth, frameHeight);
      let snapshotX = frameX + 18; //  x-coordinate within the frame
      let snapshotY = frameY+15 ; //  y-coordinate within the frame
      let scaledWidth = 100; //  width of each snapshot
      let scaledHeight = 100; // height of each snapshot
    
  
      // Display each snapshot within the frame
            console.log(`Displaying snapshot ${i} in the face frame...`);

      image(snapshots[i], snapshotX, snapshotY, scaledWidth, scaledHeight);
      
      // Update the x-coordinate for the next snapshot
      snapshotX += scaledWidth-20;
            console.log(`Face frame created for snapshot ${i}.`);

          //  text below the grid
fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("face frame", width / 2 -1400, 1420 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    }

  }
  