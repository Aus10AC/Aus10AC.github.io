const grid = document.getElementById('gridContainer');
const mainHeader = document.getElementById('mainHeader');
const sideMenu = document.getElementById('sideMenu');
const chat = document.getElementById('chat');
const main = document.getElementById('main');
const spotify = document.getElementById('spotify');
const sideContainer = document.getElementById('sideContainer');

// Creates new SubMenu
const subMenu = document.createElement('section');
subMenu.setAttribute("id", "subMenu");
const ul = document.createElement('ul');
ul.style.textDecoration = "none";
ul.style.listStyleType = "none";
ul.style.textAlign = "center";
ul.style.padding = "1rem";

// Keep Spotify closed until interaction
// spotify.style.display = "none";

//grabes the 'i' elements
const items = sideContainer.getElementsByTagName('i');

// sideMenu.addEventListener('click', (event) => {
//
//   for ( let i = 0; i < items.length; i += 1 ) {
//     if ( event.target === items[i] ) {
//       grid.appendChild(subMenu);
//       chat.style.gridColumn = "6 / 20";
//       main.style.gridColumn = "20 / 41";
//       let color = items[i].style.backgroundColor = "rgba(0, 0, 0, 0.4)";
//     }
//   }
//
//   if ( event.target === sideContainer.childNodes[7].nextElementSibling ) {
//     sideMenu.style.gridRow = "3 / 38";
//     subMenu.style.gridRow = "3 / 38";
//     chat.style.gridRow = "3 / 38";
//     spotify.style.display = "block";
//   }
//
//   if ( event.target === sideContainer.childNodes[1] ) {
//     ul.innerHTML =
//     `
//     <li style="margin: 1rem;">Home</li>
//     <li style="margin: 1rem;">About</li>
//     <li style="margin: 1rem;">Contact</li>
//     `;
//     subMenu.appendChild(ul);
//     //sideContainer.querySelector('i').appendChild(ul);
//     //subMenu.style.display = "none";
//     //sideMenu.style.gridColumn = "1 / 6";
//   }
//
//   if ( event.target === sideContainer.childNodes[3] ) {
//     ul.innerHTML =
//     `
//     <li style="margin: 1rem;">Profile</li>
//     <li style="margin: 1rem;">Followers</li>
//     <li style="margin: 1rem;">Following</li>
//     <li style="margin: 1rem;">Edit</li>
//     <li style="margin: 1rem;">Media</li>
//     `;
//     subMenu.appendChild(ul);
//   }
//
//   if ( event.target === sideContainer.childNodes[5] ) {
//     ul.innerHTML =
//     `
//     <li style="margin: 1rem;">Messages</li>
//     <li style="margin: 1rem;">Notifictions</li>
//     <li style="margin: 1rem;">Compose Message</li>
//
//     `;
//     subMenu.appendChild(ul);
//   }
//
// });
