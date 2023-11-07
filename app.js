

var video = document.getElementById('vid')
var butn = document.getElementById('demo')
butn.style.background = "url(play.png) t"

function play () {
    if (video.paused){
        video.play();
        butn.style.background = "url(play.png) no-repeat"
        butn.style.background = "red"
    }else {
        video.pause()
        butn.style.background = "url(pause.png) no-repeat"
        butn.style.background = "black"
    }
}