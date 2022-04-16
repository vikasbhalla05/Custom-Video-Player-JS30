// getting all the elements required
let player = document.querySelector('.player');
let video = player.querySelector('.player__video');
let toggleBtn = player.querySelector('.toggle');
let progress = player.querySelector('.progress');
let progressBar = player.querySelector('.progress__filled');
let skipBtn = player.querySelectorAll('[data-skip]');
let ranges = player.querySelectorAll('.player__slider');

// creating functions for all
let paused;
function pauseOrPlay(){
	const method = video.paused ? 'play' : 'pause';
	video[method]();// shorthand method
}

function updateButton(){
	toggleBtn.innerHTML = this.paused ? '▶' : '❚ ❚';
}

function skipPlay(){
	video.currentTime += parseFloat(this.dataset.skip);// converting string to number
}

function handleSliderChange(){
	video[this.name] = this.value;
}


// hooking up every element
video.addEventListener('click', pauseOrPlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggleBtn.addEventListener('click', pauseOrPlay);
skipBtn.forEach(button => button.addEventListener('click', skipPlay));
ranges.forEach(range => range.addEventListener('change', handleSliderChange));

// doing the progress bar
