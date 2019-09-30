let video;
let poseNet;
let poses = [];

function setup() {
  createCanvas(0, 0);
	
  // Video capture
  video = createCapture(VIDEO);
  video.size(width, height);

  // Create a new poseNet method
  poseNet = ml5.poseNet(video, modelReady);
	
	// Listen to new 'pose' events and fill global variable "poses"
  // with an array every time new poses are detected.
  poseNet.on('pose', function(results) {
    poses = results;
  });
  
  video.hide();
}

function draw() {
  findEyes();
  adjustFontSize(); 
}

var rightEye, leftEye, eyesDistance;

// Custom function to detect the eye distance
function findEyes()  {
	
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
		
    // For each pose detected, loop through all the keypoints
			// A keypoint is an object describing a body part.
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      let keypoint = pose.keypoints[j];
			leftEye = pose.keypoints[1].position;
      rightEye = pose.keypoints[2].position;

      // Calculate distance between both eyes.
				// The bigger the eyesDistance is, the nearer the eyes are to the camera
				// The smaller the eyesDistance is, the farther the eyes are to the camera
      eyesDistance = Math.round(Math.sqrt(Math.pow((leftEye.x - rightEye.x), 2) + Math.pow((leftEye.y - rightEye.y), 2)));
    }
  }
}

var fontSize;
function adjustFontSize() {
	// The font size and the eyesDistance has an inverse variation.
		// This is a formula that I devised.
	fontSize = Math.round(500/eyesDistance) * 6;
  document.getElementById('text').style.fontSize = fontSize + 'px';
}

function modelReady(){
	let story = "<strong>Did you ever hear the tragedy of Darth Plagueis the Wise?</strong> </br> I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic, he could save others from death, but not himself.";
  select('#text').html(story);
}


