import BlaBla from '@vimeo/player';
import throttle from 'lodash.throttle';

// Init Player instance
const iframe = document.querySelector('#vimeo-player');
const player = new BlaBla(iframe);

// throttle function even 1 second
function setLocaleStorage({seconds}) {
  // create local storage current time from player instance
  localStorage.setItem('videoplayer-current-time', seconds);
};

// set curent time to player instance from locale storage
const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time')) || 0;
player.setCurrentTime(currentTime);

// call throttled function
player.on('timeupdate', throttle(setLocaleStorage));