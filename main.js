rightWristX = 0;
leftWristX = 0;
squareSize = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(550,150);
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw(){
    background("#09df70");
    fill("#d56603");
    stroke("#0372d5");
    text("aadhav", 50, 400);
    textSize(squareSize);
    document.getElementById("result").innerHTML = "size of the font is "+squareSize+"px";
}
function modelLoaded(){
    console.log("Model Loaded!");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        squareSize = floor(leftWristX - rightWristX); 
        
    }
}
