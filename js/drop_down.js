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
});

