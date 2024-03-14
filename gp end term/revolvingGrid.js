
function revolvingGrid() {
  console.log("Creating Revolving Grid...");

  // Display captured snapshots in a revolving grid
  for (let i = 0; i < snapshots.length; i++) {
    let x = centerX + radius * cos(angle);
    let y = centerY + radius * sin(angle);

    // Log information about the current image
    console.log(`Displaying snapshot ${i} at coordinates (${x}, ${y})...`);

    image(snapshots[i], x, y, scaledWidth, scaledHeight);

    // Update the angle for the next image
    angle += angularSpeed;

    // Check if a full revolution is completed and reset angle
    if (angle >= TWO_PI) {
      angle = 0;
      console.log("Full revolution completed. Resetting angle.");
    }

    // Text below the grid
    fill(0, 0, 0);
    textSize(16);
    textAlign(CENTER);
    text("revolving grid", width / 2 - 1100, 1400 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);
  }

  console.log("Revolving Grid creation complete.");
}
