// 3D Scroll

let zSpacing = -1300,
    lastPos = zSpacing / 6,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = [],
    scrollInterval = null, // add a scroll interval
    scrollDirection = 1; // add a scroll direction variable

window.onscroll = function() {
  let top = document.documentElement.scrollTop,
      delta = lastPos - top;

  lastPos = top;

  frames.forEach(function(n, i) {
    zVals.push((i * zSpacing) + zSpacing);
    zVals[i] += delta * -6;
    let frame = frames[i],
        transform = `translateZ(${zVals[i]}px)`,
        opacity = zVals[i] < Math.abs(zSpacing) / 5.2 ? 1 : 0;
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
  });
};

// simulate a scroll event every 16ms (60fps)
scrollInterval = setInterval(function() {
  let scrollTop = document.documentElement.scrollTop;
  let scrollHeight = document.documentElement.scrollHeight;
  let windowHeight = window.innerHeight;

  if (scrollTop + windowHeight >= scrollHeight) {
    // reached the end of the page, reverse scroll direction
    scrollDirection = -1;
  } else if (scrollTop <= 0) {
    // reached the top of the page, reverse scroll direction
    scrollDirection = 1;
  }

  window.scrollTo(0, scrollTop + scrollDirection);
}, 16);

// Audio
let soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio'),
    autoPlayTimeout = null; // add a timeout for auto-play

audio.volume = 0.07; // Add this line to set the volume to 0.07

soundButton.addEventListener('click', e => {
  clearTimeout(autoPlayTimeout); // cancel the auto-play timeout when clicked
  soundButton.classList.toggle('paused')
  audio.paused ? audio.play() : audio.pause()
})

window.onfocus = function() {
  soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
  audio.pause()
}

// start the audio play after 5 seconds if not clicked
autoPlayTimeout = setTimeout(function() {
  audio.play();
  soundButton.classList.remove('paused');
}, 5000); // 5 seconds

function randPhrase(){
	phrases = ["Brie","Panggar","Love","Mahal","My World","GAR","Sining","Just You"];
	return(`${phrases[Math.floor(Math.random()*phrases.length)]}`);
}
function htmlchanger(){
	return(document.getElementById("phrase").innerHTML= randPhrase());
}

setInterval( htmlchanger, 2200);

