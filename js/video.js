// Add js here.

var video = document.querySelector("video");

document.addEventListener("load", myFunction);

function myFunction() {
    video.autoplay = false;
    video.loop = false; 
}

//play button

var playButton = document.getElementById("play");

playButton.addEventListener("click", function () {
    video.play();
});

//pause button
var pauseButton = document.getElementById("pause");

pauseButton.addEventListener("click", function () {
    video.pause();
});

//mute button

var muteButton = document.getElementById("mute");

muteButton.addEventListener("click", function () {
    if (muteButton.innerHTML === "Mute") {
        video.muted = true;
        var slider = document.getElementById("slider");
        slider.value = 0;
        muteButton.innerHTML = "Unmute";
    } else {
        video.muted = false;
        muteButton.innerHTML = "Mute";
        var slider = document.getElementById("slider");
        slider.value = 100;


    }
});

//slow down button

var slowButton = document.getElementById("slower");

slowButton.addEventListener("click", function () {

    let rate = video.playbackRate;
    switch (rate) {
        case 0.5:
            alert("Video is at slowest speed!");
            break;
        case 1:
            video.playbackRate = 0.5;
            break;
        case 2:
            video.playbackRate = 1;
            break;
        default:
            text = "No playback found";
    }
});

//speed up button

var fasterButton = document.getElementById("faster");

fasterButton.addEventListener("click", function () {

    let rate = video.playbackRate;
    switch (rate) {
        case 2:
            alert("Video is at fastest speed!");
            break;
        case 1:
            video.playbackRate = 2;
            break;
        case 0.5:
            video.playbackRate = 1;
            break;
        default:
            text = "No playback found";
    }
});

//skip ahead

var skipButton = document.getElementById("skip");

skipButton.addEventListener("click", function () {

    video.currentTime += 15;

    video.addEventListener('ended', function () {
        video.currentTime = 0;
        video.play();
    });

});

//volume slider

var slider = document.getElementById("slider");
var sliderText = document.getElementById("volume");

slider.addEventListener("click", function () {
    var sliderValue = document.getElementById("slider").value;
    video.volume = sliderValue / 100;
    sliderText.innerHTML = sliderValue;
});



