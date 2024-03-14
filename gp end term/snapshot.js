
function displaySnapshots() {
    // Display captured snapshots in a grid
    for (let i = 0; i < snapshots.length; i++) {
      let x = 420; // Adjust the x-coordinate to change the position of the webcam image grid
      let y = 250; // Adjust the y-coordinate to change the position of the webcam image grid
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
           fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("web cam image", width / 2 -1600, 250 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    }
  }
  
  
  function displayGrayscaleSnapshots() {
    // Display captured snapshots in grayscale with increased brightness in a grid
    for (let i = 0; i < snapshots.length; i++) {
      let x = (i % 3) * gridSpacing + 630; // Move the grid to the right
      let y = floor(i / 3) * gridSpacing + 250;
  
      // Convert image to grayscale and increase brightness
      let grayscaleSnapshot = convertToGrayscale(snapshots[i]);
      grayscaleSnapshot = adjustBrightness(grayscaleSnapshot, 20);
  
      image(grayscaleSnapshot, x, y, scaledWidth, scaledHeight);
           fill(0, 0, 0);
textSize(16);
textAlign(CENTER);
text("grey scale", width / 2 -1400, 250 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    }
  }
  
  
  function display2Snapshots() {
    // Display captured snapshots in a grid
    for (let i = 0; i < snapshots.length; i++) {
      let x = 420; // Adjust the x-coordinate to change the position of the webcam image grid
      let y = 850; // Adjust the y-coordinate to change the position of the webcam image grid
      image(snapshots[i], x, y, scaledWidth, scaledHeight);
        textSize(16);
textAlign(CENTER);
text("web cam image", width / 2 -1600, 830 + Math.ceil(snapshots.length / 5) * (scaledHeight + 10) + 30);

    }
  }
      
  

