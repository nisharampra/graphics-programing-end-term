
function takeSnapshot() {
    // Capture a snapshot and store it in the snapshots array
    let snapshot = createImage(webcam.width, webcam.height);
    snapshot.copy(webcam, 0, 0, webcam.width, webcam.height, 0, 0, webcam.width, webcam.height);
  
    // Scale the snapshot to 160x120 pixels
    snapshot.resize(scaledWidth, scaledHeight);
  
    snapshot.loadPixels(); // Load pixels before using width and pixels
  
    snapshots.push(snapshot);
  
    // Separate snapshot into color channels
    rChannelImage = extractChannel(snapshots[snapshots.length - 1], 'red');
    gChannelImage = extractChannel(snapshots[snapshots.length - 1], 'green');
    bChannelImage = extractChannel(snapshots[snapshots.length - 1], 'blue');
  
  
  }
  
  
  
  