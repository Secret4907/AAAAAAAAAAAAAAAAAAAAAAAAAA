noseX=0;
noseY=0;
difference = 0;
rigthWrisX = 0;
leftWristX = 0;
//inicializar o programa
function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550,500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotPoses(results) 
{
if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX = " + noseX +" noseY = "+ noseY)
    
    leftWristX = results[0].pose.leftWrist.x;
    rigthWrisX = results[0].pose.rigthWrist.x;
    difference = floor(leftWristX - rigthWrisX);

    console.log = floor("leftWrist = " + leftWristX + " rightWristX = " + rigthWristX + "difference = " + difference)
}

}

function draw() {
    background('#969A97');

    document.getElementById("square_side").innerHTML = "largura e altura serão = " + difference + "px"
    fill('F90093')
    stroke('f90093')
    square(noseX, noseY, difference)
}