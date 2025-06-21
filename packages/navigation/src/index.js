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
      
      <style>
        .nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: var(--z-fixed);
          transition: var(--transition-all);
        }
        
        .nav__container {
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: var(--space-4) var(--container-padding);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .nav__brand {
          z-index: var(--z-fixed);
        }
        
        .nav__logo {
          font-family: var(--font-family-display);
          font-size: var(--font-size-2xl);
          font-weight: var(--font-weight-bold);
          color: var(--color-neutral-000);
          text-decoration: none;
          transition: var(--transition-all);
          letter-spacing: var(--letter-spacing-tight);
        }
        
        .nav__logo:hover {
          color: var(--accent-blue);
          transform: scale(1.05);
        }
        
        .nav__menu {
          display: none;
          align-items: center;
          gap: var(--space-8);
        }
        
        .nav__link {
          color: rgba(255, 255, 255, 0.9);
          font-weight: var(--font-weight-medium);
          font-size: var(--font-size-base);
          text-decoration: none;
          padding: var(--space-3) var(--space-4);
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
          background: rgba(59, 130, 246, 0.1);
          transform: translateY(-2px);
        }
        
        .nav__link:focus-visible {
          outline: 2px solid var(--accent-blue);
          outline-offset: 2px;
        }
        
        .nav__cta {
          padding: var(--space-3) var(--space-6);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          margin-left: var(--space-4);
        }
        
        .nav__toggle {
          display: flex;
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
        
        /* Desktop Navigation */
        @media (min-width: 768px) {
          .nav__menu {
            display: flex;
          }
          
          .nav__toggle {
            display: none;
          }
        }
        
        /* Mobile Navigation */
        @media (max-width: 767px) {
          .nav__menu {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: var(--background-overlay);
            backdrop-filter: blur(var(--blur-lg));
            -webkit-backdrop-filter: blur(var(--blur-lg));
            flex-direction: column;
            justify-content: center;
            padding: var(--space-8);
            gap: var(--space-6);
            transform: translateX(100%);
            opacity: 0;
            visibility: hidden;
            transition: var(--transition-all);
          }
          
          .nav__menu.active {
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