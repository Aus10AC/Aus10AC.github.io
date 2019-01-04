const teamCard = document.querySelector('.teamCard');
const playerList = document.querySelector('.playerList');
const addIcon = document.querySelector('.fa-plus');

let button = playerList.childNodes[3];
button.style.display = "none";
// creates an input element to add to the list item
let input = document.createElement('input');
// Inner UL Text
const ulButton =
`
<button type="submit">add</button>
`

addIcon.addEventListener('click', () => {
  const li = playerList.childNodes[2];
  const newLi = playerList.childNodes[1];
  input =
        `
        <form>
          <input onclick="event" type="text" id="a" class="playerInput" placeholder="add player...">
          <button></button>
        </form>
        `
        // adds an input element inside of the list element
  li.innerHTML = input;
  playerList.removeChild(newLi);
  playerList.style.textAlign = "center";
  button.style.display = "inline-block";
});

// captures input
function inputValue(text) {
  text = input.value;
  console.log(text);
  return text;
}
