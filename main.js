video="";
status="";
function preload()
{
    video = createVideo('video.mp4');
    video.hide();
}
function setup()
{
    canvas = createCanvas(480,300);
    canvas.center();
}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML ="Status : Detecting Objects";
}
function draw()
{
    image(video,0,0,480,300);
}
function modelLoaded()
{
    console.log("Model Loaded!");
    status=true;
    video.loop();
    video.speed(1);
    video.volume(0);
}