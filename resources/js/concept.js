const doc = document.querySelector('.transformContainer');
const button = document.querySelector('button');
const sheet = document.createElement('style')
const newContainer = document.querySelector('.newContainer');
const items = sideContainer.getElementsByTagName('i');
const sideMenu = document.getElementById('sideMenu');

const html = {

  home: `.transformContainer {
    overflow: hidden;
    transform: perspective( 3500px ) rotateY( -45deg ) scale(.836);
    -webkit-box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    transition: 1000ms ease-in;
    animation-name: slide;
    animation-duration: 1000ms;
    animation-timing-function: ease-in;
    animation-delay: 100ms;
  }
  @keyframes slide {
    0% {
      left: 0px;
    }
    10% {
      left: 28px;
    }
    20% {
      left: 56px;
    }
    30% {
      left: 84px;
    }
    40% {
      left: 112px;
    }
    50% {
      left: 140px;
    }
    60% {
      left: 168px;
    }
    70% {
      left: 196px;
    }
    80% {
      left: 230px;
    }
    90% {
      left: 285px;
    }
    100% {
      left: 285px;
    }
  }`,

  home2: `.transformContainer {
    overflow: hidden;
    transform: perspective( 3500px ) rotateY( -45deg ) scale(.836);
    left: 285px;
  }`,

  newPage: `.newContainer {
    -webkit-box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 76px -10px rgba(0,0,0,0.75);
    right: 0;
    transition: 1000ms ease-in;
    z-index: 2;
  }`,

  newPage2: `.newContainer {
    transform: scale(1);
    grid-row: 4 / 38;
    grid-column: 4 / 41;
    right: 0;
    z-index: 2;
    background-color: rgba(0, 0, 0, .8);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }`

};

const pixels = 280;
function loop() {
  for ( let i = 0; i < pixels; i += 1 ) {
    pixels[i];
  }
}

function interval( ) {
  setInterval( () => {
    html["home2"]
  }, 50)
}

sideMenu.addEventListener('click', (e) => {
  for ( let i = 0; i < items.length; i += 1 ) {
    if ( e.target === items[i] ) {
      let color = items[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
    }
  }
  sheet.innerHTML = html["home"] + html["newPage"];
  document.body.appendChild(sheet);
  button.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  loop();
});



newContainer.addEventListener('transitionend', ( e ) => {
  sheet.innerHTML += html["newPage2"] + html["home2"];
  button.style.border = "1px solid white";
});
