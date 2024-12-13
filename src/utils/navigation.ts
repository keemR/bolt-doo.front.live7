export function initMobileMenu() {
  try {
    const menuButton = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');

    if (!menuButton || !mobileMenu) {
      throw new Error('Menu elements not found');
    }

    const toggleMenu = () => {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      menuButton.setAttribute('aria-expanded', (!isExpanded).toString());
      mobileMenu.classList.toggle('hidden');
    };

    // Handle click events
    menuButton.addEventListener('click', toggleMenu);

    // Handle escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
        toggleMenu();
      }
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (menuButton.getAttribute('aria-expanded') === 'true' &&
          !mobileMenu.contains(e.target as Node) &&
          !menuButton.contains(e.target as Node)) {
        toggleMenu();
      }
    });

  } catch (error) {
    console.error('Error initializing mobile menu:', error);
  }
}
