function setup() {
    video = createCapture(VIDEO);
    video.size(500, 400);
    video.position(250, 100);

    canvas = createCanvas(500, 400);
    canvas.position(1100, 100);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotposes);
}

function modelLoded() {
    console.log("posenet is intialized");
}

function draw() {
    background("grey");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
    }
}