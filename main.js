img ="";
statuss = "";
objects = [];

function preload()
{
    img = loadImage('dog_cat.jpg');
}

function draw()
{
    image(img, 0, 0, 640, 420);

    if (statuss != "")
    {
        for(i = 0; i< objects.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("Blue");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + "" + percent + "%" , objects[i].x , objects[i].y);
            noFill();
            stroke("blue");
            rect(objects[i].x , objects[i].y , objects[i].width , objects[i].height)
        }
    }
}



function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "status : detecting objects"; 
}

function modelLoaded()
{
    console.log("ModelLoaded!");
    statuss = true;
    objectDetector.detect(img, gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
    objects = results;
}