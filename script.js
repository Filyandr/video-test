let buttonStart = document.querySelector('.item-button');
let buttonStartVideo = document.querySelector('.button-click');
let hoverPlay = document.querySelector('.hover-play');
let buttonStartMute = document.querySelector('.item-button-mute');
let buttonStartVideoMute = document.querySelector('.button-click-mute');
let hoverPlayMute = document.querySelector('.hover-play-mute');
let buttonStartMuteAutoplay = document.querySelector('.item-button-mute-autoplay');
let buttonStartVideoMuteAutoplay = document.querySelector('.button-click-mute-autoplay');
let hoverPlayMuteAutoplay = document.querySelector('.hover-play-mute-autoplay');
let buttonStartMuteAutoplayInline = document.querySelector('.item-button-mute-autoplay-inline');
let buttonStartVideoMuteAutoplayInline = document.querySelector('.button-click-mute-autoplay-inline');
let hoverPlayMuteAutoplayInline = document.querySelector('.hover-play-mute-autoplay-inline');


function PlayVideo() {
	buttonStartVideo.play();
}

function DelayPlayVideo() {
	setTimeout(PlayVideo, 2000);
}

buttonStart.addEventListener('click', DelayPlayVideo);


function handlerPlay(event) {
  if (event.target.className.includes('hover-play')) {
	 event.target.play()
  }
};

hoverPlay.addEventListener('mouseover', handlerPlay);



function PlayVideoMute() {
	buttonStartVideoMute.play();
}

function DelayPlayVideoMute() {
	setTimeout(PlayVideoMute, 2000);
}

buttonStartMute.addEventListener('click', DelayPlayVideoMute);


function handlerPlayMute(event) {
  if (event.target.className.includes('hover-play-mute')) {
	 event.target.play()
  }
};

hoverPlayMute.addEventListener('mouseover', handlerPlayMute);



function PlayVideoMuteAutoplay() {
	buttonStartVideoMuteAutoplay.play();
}

function DelayPlayVideoMuteAutoplay() {
	setTimeout(PlayVideoMuteAutoplay, 2000);
}

buttonStartMuteAutoplay.addEventListener('click', DelayPlayVideoMuteAutoplay);


function handlerPlayMuteAutoplay(event) {
  if (event.target.className.includes('hover-play-mute-autoplay')) {
	 event.target.play()
  }
};

hoverPlayMuteAutoplay.addEventListener('mouseover', handlerPlayMuteAutoplay);


function PlayVideoMuteAutoplayInline() {
	buttonStartVideoMuteAutoplayInline.play();
}

function DelayPlayVideoMuteAutoplayInline() {
	setTimeout(PlayVideoMuteAutoplayInline, 2000);
}

buttonStartMuteAutoplayInline.addEventListener('click', DelayPlayVideoMuteAutoplayInline);


function handlerPlayMuteAutoplayInline(event) {
  if (event.target.className.includes('hover-play-mute-autoplay-inline')) {
	 event.target.play()
  }
};

hoverPlayMuteAutoplayInline.addEventListener('mouseover', handlerPlayMuteAutoplayInline);