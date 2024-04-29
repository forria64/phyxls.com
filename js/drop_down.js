document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.getElementById('menu-icon');
  const menu = document.getElementById('menu');

  // Function to toggle menu state
  function toggleMenu(isOpen) {
    if (isOpen) {
      menuIcon.src = '/images/open.png';
      menu.style.transform = 'translateX(0)';
    } else {
      menuIcon.src = '/images/closed.png';
      menu.style.transform = 'translateX(100%)';
    }
  }

  // Function to extract menu state from URL query parameter
  function getMenuStateFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.has('menuOpen') && urlParams.get('menuOpen') === 'true';
  }

  // Initially set menu state based on URL query parameter
  toggleMenu(getMenuStateFromURL());

  // Add event listener to toggle menu
  menuIcon.addEventListener('click', function() {
    const newMenuState = !getMenuStateFromURL();
    const urlParams = new URLSearchParams(window.location.search);
    if (newMenuState) {
      urlParams.set('menuOpen', 'true');
    } else {
      urlParams.delete('menuOpen');
    }
    history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
    toggleMenu(newMenuState);
  });
});

