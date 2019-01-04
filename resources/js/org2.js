const playerList = document.querySelector('.playerList');
// First List Element
const li = playerList.childNodes[2];
// Removes 'addIcon'
const removeAddIcon = playerList.childNodes[1];

// HTML to enter upon 'addIcon' click eventListener
const newInput =
`
<form id="playerForm">
  <input id="playerInput" type="text" placeholder="add player...">
</form>
`;

let newAddIcon =
`
<i class="fas fa-plus"></i><li>add players</li>
`;

playerList.innerHTML = newAddIcon;
newAddIcon = document.querySelector('.fa-plus');

// Creates form
newAddIcon.addEventListener('click', (e) => {

  playerList.innerHTML = newInput;
  newAddIcon.style.display = "none";
  playerList.style.textAlign = "center";

  if ( newAddIcon.innerHTML = newInput ) {
    // Form created by 'newInput'
    const form = document.getElementById('playerForm');
    const formInput = form.querySelector('input');

    form.addEventListener('submit', (e) => {

      e.preventDefault();
      const text = formInput.value;
      const li = document.createElement('li');
      li.textContent = text;
      playerList.insertBefore(li, playerList.childNodes[0]);

      if ( e.target = 'submit' ) {
        playerList.removeChild(form);
        playerList.removeChild(newAddIcon);
        playerList.appendChild(newAddIcon);
      }

    });
  }
});
