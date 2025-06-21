/**
 * Navigation Comp  return `
    <nav class="nav" id="main-navigation">
      <div class="nav__wrapper">
        <!-- Left Navigation Group - Logo + Links -->
        <div class="nav__group nav__group--left glass-nav">
          <div class="nav__brand">
            <a href="#home" class="nav__logo">${logo}</a>
          </div>
          
          <div class="nav__links">
            ${linksHtml}
          </div>
        </div>
        
        <!-- Right Navigation Group - Language + CTA -->
        <div class="nav__group nav__group--right glass-nav">
          <div class="nav__language">
            <span class="nav__globe">🌐</span>
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
      </div>`bsite v2.0
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
    <nav class="nav glass-nav" id="main-navigation">
      <div class="nav__container">
        <div class="nav__brand">
          <a href="#home" class="nav__logo">${logo}</a>
        </div>
        
        <div class="nav__menu" id="nav-menu">
          ${linksHtml}
          <a href="#contact" class="nav__cta btn-primary">Kom i gang</a>
        </div>
        
        <button class="nav__toggle" id="nav-toggle" aria-label="Toggle navigation">
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
          <span class="nav__toggle-line"></span>
        </button>
      </div>
      
      <script>
        // Enhanced navigation with pill-shaped groups
        (function() {
          const nav = document.getElementById('main-navigation');
          const mobileToggle = document.getElementById('nav-toggle');
          const mobileMenu = document.getElementById('nav-menu');
          let lastScrollY = window.scrollY;
          
          // Mobile menu toggle
          if (mobileToggle && mobileMenu) {
            mobileToggle.addEventListener('click', function() {
              mobileToggle.classList.toggle('active');
              mobileMenu.classList.toggle('active');
            });
            
            // Close mobile menu when clicking links
            const mobileLinks = mobileMenu.querySelectorAll('a');
            mobileLinks.forEach(link => {
              link.addEventListener('click', function() {
                mobileToggle.classList.remove('active');
                mobileMenu.classList.remove('active');
              });
            });
          }
          
          function updateNavigation() {
            const currentScrollY = window.scrollY;
            
            // Add/remove scrolled class for enhanced glassmorphism
            if (currentScrollY > 50) {
              nav.classList.add('scrolled');
            } else {
              nav.classList.remove('scrolled');
            }
            
            // Auto-hide navigation on scroll down (desktop only)
            if (window.innerWidth >= 1024) {
              if (currentScrollY > lastScrollY && currentScrollY > 200) {
                nav.style.transform = 'translateY(-100%)';
              } else {
                nav.style.transform = 'translateY(0)';
              }
            }
            
            lastScrollY = currentScrollY;
          }
          
          // Throttled scroll handler for performance
          let ticking = false;
          function handleScroll() {
            if (!ticking) {
              requestAnimationFrame(() => {
                updateNavigation();
                ticking = false;
              });
              ticking = true;
            }
          }
          
          window.addEventListener('scroll', handleScroll, { passive: true });
          
          // Handle resize
          window.addEventListener('resize', function() {
            if (window.innerWidth >= 1024) {
              mobileToggle.classList.remove('active');
              mobileMenu.classList.remove('active');
            }
          });
        })();
      </script>
      
      <style>
        .nav {
          position: fixed;
          top: 20px;
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          transition: var(--transition-all);
        }
        
        .nav__wrapper {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 var(--space-6);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        /* Navigation Groups - Pill shaped containers */
        .nav__group {
          display: flex;
          align-items: center;
          padding: var(--space-3) var(--space-6);
          border-radius: var(--radius-full);
          transition: var(--transition-all);
        }
        
        .nav__group--left {
          gap: var(--space-6);
        }
        
        .nav__group--right {
          gap: var(--space-4);
        }
        
        /* Logo styling */
        .nav__brand {
          z-index: var(--z-fixed);
        }
        
        .nav__logo {
          font-family: var(--font-family-display);
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-000);
          text-decoration: none;
          transition: var(--transition-all);
          letter-spacing: var(--letter-spacing-tight);
        }
        
        .nav__logo:hover {
          color: var(--accent-blue);
          transform: scale(1.05);
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }
        
        /* Navigation Links */
        .nav__links {
          display: flex;
          align-items: center;
          gap: var(--space-6);
        }
        
        .nav__link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
          text-decoration: none;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          transition: var(--transition-all);
          position: relative;
          overflow: hidden;
        }
        
        .nav__link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.2), transparent);
          transition: left 0.5s ease;
        }
        
        .nav__link:hover::before {
          left: 100%;
        }
        
        .nav__link:hover {
          color: var(--accent-blue);
          background: rgba(59, 130, 246, 0.15);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(59, 130, 246, 0.3);
        }
        
        /* Right Group - Language and CTA */
        .nav__language {
          display: flex;
          align-items: center;
          gap: var(--space-1);
          cursor: pointer;
          padding: var(--space-2);
          border-radius: var(--radius-md);
          transition: var(--transition-all);
        }
        
        .nav__language:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .nav__globe {
          font-size: var(--font-size-sm);
        }
        
        .nav__arrow {
          font-size: var(--font-size-xs);
          color: rgba(255, 255, 255, 0.7);
        }
        
        .nav__divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.2);
          margin: 0 var(--space-2);
        }
        
        .nav__cta {
          color: var(--color-neutral-000);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-sm);
          text-decoration: none;
          padding: var(--space-2) var(--space-3);
          border-radius: var(--radius-md);
          transition: var(--transition-all);
        }
        
        .nav__cta:hover {
          color: var(--accent-blue);
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-1px);
        }
        
        /* Mobile Menu Toggle */
        .nav__toggle {
          display: none;
          flex-direction: column;
          gap: 4px;
          background: none;
          border: none;
          cursor: pointer;
          padding: var(--space-3);
          border-radius: var(--radius-md);
          transition: var(--transition-all);
          z-index: var(--z-fixed);
        }
        
        .nav__toggle:hover {
          background: rgba(255, 255, 255, 0.1);
        }
        
        .nav__toggle-line {
          width: 24px;
          height: 2px;
          background: var(--color-neutral-000);
          border-radius: 1px;
          transition: var(--transition-all);
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(2) {
          opacity: 0;
        }
        
        .nav__toggle.active .nav__toggle-line:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }
        
        /* Mobile Menu */
        .nav__mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: var(--space-6);
          right: var(--space-6);
          border-radius: var(--radius-2xl);
          flex-direction: column;
          padding: var(--space-6);
          gap: var(--space-4);
          transform: translateY(-20px);
          opacity: 0;
          visibility: hidden;
          transition: var(--transition-all);
        }
        
        .nav__mobile-menu.active {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }
        
        .nav__mobile-cta {
          margin-top: var(--space-4);
          text-align: center;
        }
        
        /* Desktop Navigation - Show pill groups */
        @media (min-width: 1024px) {
          .nav__group {
            display: flex;
          }
          
          .nav__toggle {
            display: none;
          }
        }
        
        /* Mobile Navigation - Hide pill groups, show toggle */
        @media (max-width: 1023px) {
          .nav__group {
            display: none;
          }
          
          .nav__toggle {
            display: flex;
          }
          
          .nav__mobile-menu {
            display: flex;
          }
          
          .nav__wrapper {
            justify-content: flex-end;
            padding: 0 var(--space-4);
          }
        }
        
        /* Tablet adjustments */
        @media (max-width: 768px) {
          .nav {
            top: var(--space-4);
          }
          
          .nav__mobile-menu {
            top: 70px;
            left: var(--space-4);
            right: var(--space-4);
          }
        }
            display: flex;
            transform: translateX(0);
            opacity: 1;
            visibility: visible;
          }
          
          .nav__link {
            width: 100%;
            text-align: center;
            padding: var(--space-4);
            font-size: var(--font-size-xl);
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(255, 255, 255, 0.05);
          }
          
          .nav__cta {
            margin-left: 0;
            margin-top: var(--space-4);
            padding: var(--space-4) var(--space-8);
            font-size: var(--font-size-lg);
          }
        }
        
        /* Scroll Effects */
        .nav.scrolled {
          background-color: var(--glass-nav-scrolled);
          box-shadow: var(--shadow-obsidian);
        }
        
        /* Enhanced glassmorphism for scrolled state */
        .nav.scrolled::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
          pointer-events: none;
        }
        
        /* Floating navigation effect */
        @media (min-width: 768px) {
          .nav.scrolled .nav__container {
            margin: var(--space-4) auto;
            max-width: calc(var(--container-max-width) - var(--space-8));
            border-radius: var(--radius-2xl);
            background: var(--glass-nav);
            backdrop-filter: blur(var(--blur-lg));
            -webkit-backdrop-filter: blur(var(--blur-lg));
            border: 1px solid var(--border-glass);
            box-shadow: var(--shadow-obsidian);
          }
        }
        
        /* Smooth reveal animation */
        .nav {
          animation: navReveal 0.8s ease-out;
        }
        
        @keyframes navReveal {
          from {
            opacity: 0;
            transform: translateY(-100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Link hover effects */
        .nav__link {
          position: relative;
        }
        
        .nav__link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: var(--accent-blue);
          transition: var(--transition-all);
          transform: translateX(-50%);
        }
        
        .nav__link:hover::after {
          width: 80%;
        }
        
        /* Active link state */
        .nav__link.active {
          color: var(--accent-blue);
          background: rgba(59, 130, 246, 0.1);
        }
        
        .nav__link.active::after {
          width: 80%;
        }
      </style>
      
      <script>
        // Enhanced Navigation functionality
        (function() {
          const nav = document.getElementById('main-navigation');
          const navToggle = document.getElementById('nav-toggle');
          const navMenu = document.getElementById('nav-menu');
          const navLinks = document.querySelectorAll('.nav__link');
          
          // Mobile menu toggle
          if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
              navToggle.classList.toggle('active');
              navMenu.classList.toggle('active');
              document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
            });
          }
          
          // Close mobile menu when clicking on links
          navLinks.forEach(link => {
            link.addEventListener('click', () => {
              navToggle?.classList.remove('active');
              navMenu?.classList.remove('active');
              document.body.style.overflow = '';
            });
          });
          
          // Enhanced scroll effect with throttling
          let ticking = false;
          
          function updateNavigation() {
            if (window.scrollY > 50) {
              nav?.classList.add('scrolled');
            } else {
              nav?.classList.remove('scrolled');
            }
            ticking = false;
          }
          
          window.addEventListener('scroll', () => {
            if (!ticking) {
              requestAnimationFrame(updateNavigation);
              ticking = true;
            }
          });
          
          // Active link highlighting
          function setActiveLink() {
            const sections = document.querySelectorAll('section[id]');
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
              const sectionTop = section.offsetTop;
              const sectionHeight = section.offsetHeight;
              const sectionId = section.getAttribute('id');
              
              if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                  link.classList.remove('active');
                  if (link.getAttribute('href') === '#' + sectionId) {
                    link.classList.add('active');
                  }
                });
              }
            });
          }
          
          window.addEventListener('scroll', setActiveLink);
          window.addEventListener('load', setActiveLink);
          
          // Smooth scrolling for anchor links
          document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
              e.preventDefault();
              const target = document.querySelector(this.getAttribute('href'));
              if (target) {
                const offsetTop = target.offsetTop - 80; // Account for fixed nav
                window.scrollTo({
                  top: offsetTop,
                  behavior: 'smooth'
                });
              }
            });
          });
          
          // Close mobile menu on escape key
          document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu?.classList.contains('active')) {
              navToggle?.classList.remove('active');
              navMenu?.classList.remove('active');
              document.body.style.overflow = '';
            }
          });
          
          // Close mobile menu on outside click
          document.addEventListener('click', (e) => {
            if (navMenu?.classList.contains('active') && 
                !nav?.contains(e.target)) {
              navToggle?.classList.remove('active');
              navMenu?.classList.remove('active');
              document.body.style.overflow = '';
            }
          });
        })();
      </script>
    </nav>
  `;
}