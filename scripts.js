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

// handle the progress bar range
function handleProgress(){
	let percent = (video.currentTime/video.duration)*100;
	progressBar.style.flexBasis = `${percent}%`;
}

// scrub function for the progress bar
function scrub(e){
	let scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
	video.currentTime = scrubTime;
	console.log(scrubTime);
}

// hooking up every element
video.addEventListener('click', pauseOrPlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggleBtn.addEventListener('click', pauseOrPlay);
skipBtn.forEach(button => button.addEventListener('click', skipPlay));
ranges.forEach(range => range.addEventListener('change', handleSliderChange));
video.addEventListener('timeupdate', handleProgress);

let mousedown;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mouseup', () => mousedown = false );
progress.addEventListener('mousedown', () => mousedown = true );