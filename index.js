
var audio = new Audio("music.mp3");

document.querySelector('.button').addEventListener("click", function() {
while(document.querySelector('.button').innerText="Play"){
  audio.play();
  document.querySelector('.button').innerText="Pause";
}

while (document.querySelector('.button').innerText="Pause") {
  audio.pause();
  document.querySelector('.button').innerText="Play";
}

});
