function googlesearch(){
    var search_request = document.getElementById("search").value ;
    var googleSearchURL = "https://www.google.com/search?q=" + encodeURIComponent(search_request);
    window.open(googleSearchURL, "_blank");
}

var myAudio = document.getElementById("myAudio");
var autoplayFlag = false;

// Function to toggle between play and pause
function togglePlayPause() {
    if (myAudio.paused) {
        playAudio();
    } else {
        pauseAudio();
    }
}

// Function to play the audio
function playAudio() {
    myAudio.play();
}

// Function to pause the audio
function pauseAudio() {
    myAudio.pause();
}

// Function to start the audio after 20 seconds
function startAudioAfterDelay() {
    setTimeout(function() {
        if (autoplayFlag) {
            playAudio();
        } else {
            autoplayFlag = true;
            myAudio.play();
            document.getElementById("playPauseButton").innerText = "Pause";
        }
    }, 20000); // 20 seconds delay
}

// Call the function to start the audio after the specified delay
startAudioAfterDelay();