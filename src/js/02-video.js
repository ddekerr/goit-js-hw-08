import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

// Init Player instance
const iframe = document.querySelector('#vimeo-player');
const player = new Vimeo(iframe);

// throttle function even 1 second
const throttled = throttle(function(data) {
  // create local storage variable and set current time from player instance
  const currentTimestringify = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTimestringify);
}, 1000);

// set curent time to player instance from locale storage
const currentTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
player.setCurrentTime(currentTime);

// call throttled function
player.on('timeupdate', throttled);