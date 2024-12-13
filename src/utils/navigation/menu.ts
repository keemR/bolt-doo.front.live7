interface MenuElements {
  button: HTMLElement;
  menu: HTMLElement;
}

class MobileMenuManager {
  private elements: MenuElements;
  private isOpen: boolean = false;

  constructor(elements: MenuElements) {
    this.elements = elements;
    this.init();
  }

  private init(): void {
    this.setupEventListeners();
    this.setupA11y();
  }

  private setupEventListeners(): void {
    // Toggle menu
    this.elements.button.addEventListener('click', () => this.toggle());

    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
      }
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (this.isOpen && 
          !this.elements.menu.contains(e.target as Node) &&
          !this.elements.button.contains(e.target as Node)) {
        this.close();
      }
    });
  }

  private setupA11y(): void {
    this.elements.button.setAttribute('aria-haspopup', 'true');
    this.elements.menu.setAttribute('role', 'navigation');
  }

  private toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  private open(): void {
    this.isOpen = true;
    this.elements.button.setAttribute('aria-expanded', 'true');
    this.elements.menu.classList.remove('hidden');
  }

  private close(): void {
    this.isOpen = false;
    this.elements.button.setAttribute('aria-expanded', 'false');
    this.elements.menu.classList.add('hidden');
  }
}

export function initMobileMenu(): void {
  try {
    const button = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');

    if (!button || !menu) {
      throw new Error('Required menu elements not found');
    }

    new MobileMenuManager({ button, menu });
  } catch (error) {
    console.error('Failed to initialize mobile menu:', error);
  }
}
