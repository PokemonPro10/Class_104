//https://teachablemachine.withgoogle.com/models/m9_udcrAd/

Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 wersion:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/m9_udcrAd/model.json',modelLoaded);