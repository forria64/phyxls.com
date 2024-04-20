document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  let isOpen = false;

  // Initially hide the menu
  menu.style.transform = 'translateX(100%)';
  menuIcon.src = '/images/closed.png'; // Set the initial icon to closed.png

  menuIcon.addEventListener('click', function() {
    if (!isOpen) {
      menuIcon.src = '/images/open.png'; // Change icon to open.png when opening the menu
      menu.style.transform = 'translateX(0)';
      isOpen = true;
    } else {
      menuIcon.src = '/images/closed.png'; // Change icon to closed.png when closing the menu
      menu.style.transform = 'translateX(100%)';
      isOpen = false;
    }
  });

  // Add event listener to toggle team dropdown
  const teamButton = document.getElementById('team-button');
  const teamDropdown = document.getElementById('team-dropdown');
  teamButton.addEventListener('click', function() {
    teamButton.classList.toggle('active');
    teamDropdown.classList.toggle('active');
  });

  // Open submenu on specific pages
  const currentPage = window.location.pathname;
  const pagesToOpenSubmenu = ['/stefanb.html', '/phovel.html', '/forria.html'];
  if (pagesToOpenSubmenu.includes(currentPage)) {
    teamButton.classList.add('active');
    teamDropdown.classList.add('active');
  }

  // Handle click event on "team" link
  const teamLink = document.getElementById('team-link');
  teamLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    menu.style.transform = 'translateX(0)'; // Open the menu
    menuIcon.src = '/images/open.png'; // Change icon to open.png
    isOpen = true; // Update isOpen flag
    teamButton.classList.add('active'); // Extend submenu
    teamDropdown.classList.add('active'); // Extend submenu
  });
});

function navigateTo(url) {
  window.location.href = url;
}
