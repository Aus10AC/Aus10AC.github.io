// Song controls //
const play = document.querySelector('.play');
const pause = document.querySelector('.pause');
// Volume controls //
const mute = document.querySelector('.mute');
const unmute = document.querySelector('.unmute');
// Close Spotify //
const spotify = document.querySelector('.spotifyPlaylist');
const close = document.querySelector('.close');


play.addEventListener('click', () => {
  pause.style.display = "inline";
  play.style.display = "none";
})

pause.addEventListener('click', () => {
  play.style.display = "inline";
  pause.style.display = "none";
})

mute.addEventListener('click', () => {
  mute.style.display = "none";
  unmute.style.display = "inline";
})

unmute.addEventListener('click', () => {
  mute.style.display = "inline";
  unmute.style.display = "none";
})

// Close Spotify //

close.addEventListener('click', () => {
  spotify.style.display = "none";

  if ( spotify.style.display = "none" ) {
    close.innerHTML = "Open Spotify";
    close.style.bottom = "0rem";
  }

    if ( close.innerHTML === "Open Spotify" ) {
    close.addEventListener('click', () => {
      close.innerHTML = "Close Spotify";
      close.style.bottom = "5rem";
      spotify.style.display = "block";
    })

  } else {
    spotify.style.display = "block";
  }
})
