// Dropdown Menu //
const menu = document.getElementById('dropdown');
// Search Bar //
const searchInput = document.querySelector('.search');

// Dropdown Menu //
function openNav() {
  if ( menu.style.display === "none") {
    menu.style.display = "block";
  } else {
    menu.style.display = "none";
  }
}

// Search Bar //
function search() {
  if ( searchInput.style.display === "none") {
    searchInput.style.display = "block";
  } else {
    searchInput.style.display = "none";
  }
}
