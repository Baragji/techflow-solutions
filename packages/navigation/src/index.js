/**
 * Navigation Component - TechRix Website v2.0
 * Professional Obsidian-inspired navigation with advanced glassmorphism
 * 
 * @param {Object} props - Component properties
 * @param {string} props.logo - Logo text or HTML
 * @param {Array} props.links - Navigation links array
 * @returns {string} Pre-computed HTML with inline CSS
 */
export function render({ 
  logo = "TechRix", 
  links = [
    { href: "#home", text: "Hjem" },
    { href: "#services", text: "Services" },
    { href: "#about", text: "Om os" },
    { href: "#contact", text: "Kontakt" }
  ]
} = {}) {
  const linksHtml = links.map(link => 
    `<a href="${link.href}" class="nav__link">${link.text}</a>`
  ).join('');

  return `
    <nav class="nav" id="main-navigation">
      <div class="nav__wrapper">
        <!-- Left Navigation Group - Logo + Links -->
        <div class="nav__group nav__group--left glass-nav">
          <div class="nav__brand">
            <a href="#home" class="nav__logo">${logo}</a>
          </div>
          
          <div class="nav__divider"></div>
          
          <div class="nav__links">
            ${linksHtml}
          </div>
        </div>
        
        <!-- Right Navigation Group - Language + CTA -->
        <div class="nav__group nav__group--right glass-nav">
          <div class="nav__language">
            <span class="nav__globe">🌐</span>
            <span class="nav__lang-text">DA</span>
            <span class="nav__arrow">▾</span>
          </div>
          
          <div class="nav__divider"></div>
          
          <a href="#contact" class="nav__cta">Få et tilbud →</a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button class="nav__toggle" id="nav-toggle" aria-label="Toggle navigation">
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
        </button>
        
        <!-- Mobile Menu -->
        <div class="nav__mobile-menu glass-nav" id="nav-menu">
          ${linksHtml}
          <a href="#contact" class="nav__mobile-cta btn-primary">Kom i gang</a>
        </div>
      </div>
      
      <style>
        .nav {
          position: fixed;
          top: 12px; /* Even closer to top, minimal */
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          transition: var(--transition-all);
          background: none;
          padding: 0;
        }
        
        .nav__wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: var(--space-3); /* Reduced from var(--space-4) */
        }
        
        /* Glass Navigation Groups - Ultra subtle like Obsidian */
        .glass-nav {
          background: rgba(255, 255, 255, 0.05); /* Much more subtle */
          backdrop-filter: blur(24px); /* Stronger blur */
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.08); /* Barely visible border */
          border-radius: 9999px;
          transition: var(--transition-all);
        }
        
        .glass-nav:hover {
          background: rgba(255, 255, 255, 0.08); /* Subtle hover */
          border-color: rgba(255, 255, 255, 0.12);
        }
        
        .nav.scrolled .glass-nav {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
        }
        
        /* Navigation Groups - Ultra minimal like Obsidian Agency */
        .nav__group {
          display: flex;
          align-items: center;
          padding: 6px 16px; /* Much more compact */
          gap: 8px; /* Tighter spacing */
        }
        
        .nav__group--left {
          gap: 16px; /* Reduced significantly */
        }
        
        .nav__group--right {
          gap: 8px; /* Very tight */
        }
        
        /* Logo - Ultra minimal like Obsidian */
        .nav__logo {
          font-size: var(--font-size-base); /* Smaller, more understated */
          font-weight: var(--font-weight-medium); /* Lighter weight */
          color: var(--color-neutral-000);
          text-decoration: none;
          transition: var(--transition-all);
        }
        
        .nav__logo:hover {
          color: var(--accent-blue);
        }
        
        /* Navigation Links - Minimal elegant spacing */
        .nav__links {
          display: flex;
          align-items: center;
          gap: 12px; /* Very tight like Obsidian */
        }
        
        .nav__link {
          color: rgba(255, 255, 255, 0.7); /* More subtle */
          text-decoration: none;
          font-weight: var(--font-weight-normal);
          font-size: var(--font-size-sm);
          transition: var(--transition-all);
          padding: 4px 8px; /* Very minimal padding */
          border-radius: var(--radius-sm);
        }
        
        .nav__link:hover {
          color: var(--color-neutral-000);
          background: rgba(255, 255, 255, 0.06); /* Very subtle hover */
        }
        
        /* Language Selector - Minimal style */
        .nav__language {
          display: flex;
          align-items: center;
          gap: 4px; /* Tighter spacing */
          color: rgba(255, 255, 255, 0.7); /* More subtle */
          cursor: pointer;
          transition: var(--transition-all);
          font-size: var(--font-size-xs); /* Smaller */
        }
        
        .nav__language:hover {
          color: var(--color-neutral-000);
        }
        
        .nav__globe {
          font-size: 14px;
        }
        
        .nav__lang-text {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
        }
        
        .nav__arrow {
          font-size: 10px;
          opacity: 0.7;
        }
        
        /* Dividers - Ultra subtle like Obsidian */
        .nav__divider {
          width: 1px;
          height: 12px; /* Much smaller */
          background: rgba(255, 255, 255, 0.1); /* Barely visible */
        }
        
        /* CTA Button - Understated like Obsidian */
        .nav__cta {
          color: var(--color-neutral-000);
          text-decoration: none;
          font-weight: var(--font-weight-medium); /* Lighter */
          font-size: var(--font-size-xs); /* Smaller */
          transition: var(--transition-all);
          white-space: nowrap;
          opacity: 0.9; /* Slightly transparent */
        }
        
        .nav__cta:hover {
          color: var(--accent-blue);
          opacity: 1; /* Full opacity on hover */
        }
        
        /* Mobile Toggle - More compact */
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 3px; /* Reduced from 4px */
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px; /* Reduced from 8px */
          z-index: var(--z-dropdown);
        }
        
        .nav__toggle-line {
          width: 20px;
          height: 2px;
          background: var(--color-neutral-000);
          transition: var(--transition-all);
          border-radius: 2px;
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(2) {
          opacity: 0;
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -6px);
        }
        
        /* Mobile Menu */
        .nav__mobile-menu {
          display: none;
          position: absolute;
          top: 70px;
          right: var(--space-6);
          min-width: 200px;
          padding: var(--space-4);
          flex-direction: column;
          gap: var(--space-2);
          transform: translateY(-10px);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-all);
        }
        
        .nav__mobile-menu.active {
          display: flex;
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        
        .nav__mobile-menu .nav__link {
          padding: var(--space-3);
          border-radius: var(--radius-md);
          text-align: center;
        }
        
        .nav__mobile-cta {
          margin-top: var(--space-2);
          padding: var(--space-3) var(--space-4);
          text-align: center;
          border-radius: var(--radius-md);
        }
        
        /* Responsive Design */
        @media (max-width: 1024px) {
          .nav__group {
            display: none;
          }
          
          .nav__toggle {
            display: flex;
          }
          
          .nav__mobile-menu {
            display: flex;
          }
        }
        
        @media (max-width: 768px) {
          .nav__wrapper {
            padding: 0 var(--space-4);
          }
          
          .nav__mobile-menu {
            right: var(--space-4);
          }
        }
      </style>
    </nav>
  `;
}