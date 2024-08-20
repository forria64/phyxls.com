document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');
  let isOpen = localStorage.getItem('menuOpen') === 'true';

  // Function to open the menu
  function openMenu() {
    menuIcon.src = '/images/open.png'; // Change icon to open.png
    menu.style.transform = 'translateX(0)';
    isOpen = true;
    localStorage.setItem('menuOpen', 'true'); // Store menu state
  }

  function QuickOpenMenu() {
    menuIcon.src = '/images/open.png'; // Change icon to open.png
    menu.style.transform = 'translateX(0)';
    menu.style.transition = 'none';  
    isOpen = true;
    localStorage.setItem('menuOpen', 'true'); // Store menu state
  }


  // Function to close the menu
  function closeMenu() {
    menuIcon.src = '/images/closed.png'; // Change icon to closed.png
    menu.style.transform = 'translateX(100%)';
    isOpen = false;
    localStorage.setItem('menuOpen', 'false'); // Store menu state
  }

  // Function to toggle the menu
  function toggleMenu() {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // Handle click event on menu icon to toggle menu
  menuIcon.addEventListener('click', function(event) {
    toggleMenu(); // Toggle the menu
    event.stopPropagation(); // Prevent click event from propagating to the document body
  });

  // Function to close the menu when clicking outside of it
  document.addEventListener('click', function(event) {
    const isMenuClicked = menu.contains(event.target) || menuIcon.contains(event.target);
    if (!isMenuClicked && isOpen) {
      closeMenu();
    }
  });

  // Function to toggle team dropdown
  function toggleTeamDropdown() {
    const teamButton = document.getElementById('team-button');
    const teamDropdown = document.getElementById('team-dropdown');
    teamButton.classList.toggle('active');
    teamDropdown.classList.toggle('active');
  }

  // Function to toggle about dropdown
  function toggleAboutDropdown() {
    const aboutButton = document.getElementById('about-button');
    const aboutDropdown = document.getElementById('about-dropdown');
    aboutButton.classList.toggle('active');
    aboutDropdown.classList.toggle('active');
  }

  // Add event listener to toggle team dropdown
  const teamButton = document.getElementById('team-button');
  const teamDropdown = document.getElementById('team-dropdown');
  teamButton.addEventListener('click', function() {
    toggleTeamDropdown();
  });

  // Add event listener to toggle about dropdown
  const aboutButton = document.getElementById('about-button');
  const aboutDropdown = document.getElementById('about-dropdown');
  aboutButton.addEventListener('click', function() {
    toggleAboutDropdown();
  });

  // Open submenu on specific pages for Team
  const currentPage = window.location.pathname;
  const pagesToOpenTeamSubmenu = ['/forria', '/phovel', '/stefanb'];
  if (pagesToOpenTeamSubmenu.includes(currentPage)) {
    QuickOpenMenu();
    toggleTeamDropdown();
  }

  // Open submenu on specific pages for About
  const pagesToOpenAboutSubmenu = ['/digitization', '/metadata', '/phyxls_0'];
  if (pagesToOpenAboutSubmenu.includes(currentPage)) {
    QuickOpenMenu();
    toggleAboutDropdown();
  }
  
  // Open menu on main pages
  const pagesToOpenMenu = ['/contact', '/revenue'];
  if (pagesToOpenMenu.includes(currentPage)) {
    QuickOpenMenu();
  }

});

function navigateTo(url) {
  window.location.href = url;
}

