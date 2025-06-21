/**
 * Hero Component - TechRix Website v2.0
 * Professional Obsidian-inspired hero section
 * 
 * @param {Object} props - Component properties
 * @param {string} props.title - Main hero title
 * @param {string[]} props.highlights - Array of highlighted text elements
 * @param {string} props.subtitle - Hero subtitle
 * @param {string} props.description - Hero description
 * @returns {string} Pre-computed HTML with inline CSS
 */
export function render({ 
  title = "Hvor",
  highlights = ["ambition", "møder", "ekspertise"],
  subtitle = "Vi transformerer digitale muligheder til målbare forretningsresultater",
  description = "Gennem strategisk digital markedsføring og datadriven indsigt hjælper vi virksomheder med at opnå bæredygtig vækst.",
  basePath = "/"
} = {}) {
  
  const heroWords = [title, ...highlights];
  const subWords = subtitle.split(' ');
  
  const heroWordsHtml = heroWords.map((word, index) => 
    `<span class="hero__word" style="animation-delay: ${index * 0.1}s">${word}</span>`
  ).join(' ');
  
  const subWordsHtml = subWords.map((word, index) => 
    `<span class="hero__sub-word" style="animation-delay: ${(index * 0.05) + 0.5}s">${word}</span>`
  ).join(' ');

  return `
    <section id="home" class="hero">
      <!-- Cinematic Background -->
      <div class="hero__background"></div>
      
      <!-- Subtle Background Elements -->
      <div class="hero__background-elements">
        <!-- Obsidian-style dots pattern -->
        <div class="hero__dots-pattern"></div>
        
        <!-- Floating geometric shapes -->
        <div class="hero__floating-shapes">
          <div class="hero__shape hero__shape--1"></div>
          <div class="hero__shape hero__shape--2"></div>
          <div class="hero__shape hero__shape--3"></div>
        </div>
      </div>

      <div class="hero__container">
        <!-- Ultra minimal content like Obsidian Agency -->
        <div class="hero__content">
          <!-- Main Headline - Elegant typography -->
          <div class="hero__headline">
            <h1 class="hero__title">
              ${heroWordsHtml}
            </h1>
            
            <p class="hero__subtitle">
              ${subWordsHtml}
            </p>
          </div>

          <!-- Simple CTA -->
          <div class="hero__actions">
            <a href="#contact" class="hero__cta">
              Lad os tale sammen
            </a>
          </div>
        </div>
      </div>

      <!-- Decorative Elements -->
      <div class="hero__decorative">
        <div class="hero__circle hero__circle--1"></div>
        <div class="hero__circle hero__circle--2"></div>
      </div>
      
      <style>
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        
        /* Cinematic Background - Real Image */
        .hero__background {
          position: absolute;
          inset: 0;
          background-image: url('${basePath}images/obsidian-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }
        
        /* Clean overlay for text readability - no color tints */
        .hero__background::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.4) 100%);
        }
        
        /* Background Elements */
        .hero__background-elements {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .hero__dots-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.1;
          background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0);
          background-size: 60px 60px;
        }
        
        .hero__floating-shapes {
          position: absolute;
          inset: 0;
        }
        
        .hero__shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(1px);
        }
        
        .hero__shape--1 {
          top: 25%;
          left: 16.67%;
          width: 8rem;
          height: 8rem;
          background: rgba(59, 130, 246, 0.03);
          animation: float 8s ease-in-out infinite;
        }
        
        .hero__shape--2 {
          bottom: 25%;
          right: 16.67%;
          width: 12rem;
          height: 12rem;
          background: rgba(139, 92, 246, 0.03);
          animation: float 10s ease-in-out infinite reverse;
        }
        
        .hero__shape--3 {
          top: 50%;
          left: 50%;
          width: 6rem;
          height: 6rem;
          background: rgba(16, 185, 129, 0.03);
          animation: float 6s ease-in-out infinite;
          transform: translate(-50%, -50%);
        }
        
        /* Main Container - More elegant proportions */
        .hero__container {
          position: relative;
          z-index: 20;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: var(--space-20) var(--container-padding); /* Reduced top/bottom padding */
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
        }
        
        .hero__content {
          width: 100%;
          max-width: 48rem; /* Smaller, more focused */
          text-align: center;
          padding: var(--space-12) var(--space-6) var(--space-12); /* More balanced padding */
          border-radius: var(--radius-xl); /* Slightly smaller radius */
          position: relative;
          /* Elegant glassmorphism */
          background: rgba(255, 255, 255, 0.06); /* More subtle */
          backdrop-filter: blur(20px); /* Reduced blur */
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.08); /* More subtle border */
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.2); /* Softer shadow */
        }
        
        /* Typography - Elegant minimal like Obsidian */
        .hero__headline {
          margin-bottom: var(--space-6); /* Reduced spacing */
        }
        
        .hero__title {
          font-size: clamp(2rem, 5vw, 3.5rem); /* More refined, smaller */
          font-weight: var(--font-weight-medium); /* Lighter weight */
          line-height: var(--line-height-tight);
          letter-spacing: var(--letter-spacing-tight);
          color: var(--color-neutral-000);
          margin-bottom: var(--space-4); /* Tighter spacing */
          text-align: center;
        }
        
        .hero__subtitle {
          font-size: clamp(0.875rem, 1.8vw, 1.125rem); /* Smaller, more elegant */
          font-weight: var(--font-weight-light);
          line-height: var(--line-height-relaxed);
          color: rgba(255, 255, 255, 0.7); /* More subtle */
          margin-bottom: var(--space-6); /* Reduced spacing */
          max-width: 36rem; /* Narrower for better readability */
          margin-left: auto;
          margin-right: auto;
        }
        
        .hero__title-main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-4);
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: var(--font-weight-medium); /* Lighter weight */
          line-height: var(--line-height-tight); /* More breathing room */
          letter-spacing: var(--letter-spacing-tight);
          color: var(--color-neutral-000);
          margin-bottom: var(--space-8); /* More space */
        }
        
        .hero__word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px); /* Gentler animation */
          filter: blur(5px); /* Less aggressive blur */
          animation: textReveal 1s ease-out forwards; /* Slower, smoother */
        }
        
        .hero__title-sub {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: var(--font-weight-light); /* Even lighter */
          line-height: var(--line-height-snug); /* More elegant spacing */
          letter-spacing: var(--letter-spacing-normal);
          color: rgba(255, 255, 255, 0.85); /* Slightly softer */
        }
        
        .hero__sub-word {
          display: inline-block;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.6s ease forwards;
        }
        
        .hero__description {
          font-size: var(--font-size-xl);
          line-height: var(--line-height-relaxed);
          color: rgba(255, 255, 255, 0.7);
          max-width: 48rem;
          margin: 0 auto var(--space-8);
          font-weight: var(--font-weight-light);
        }
        
        /* Tags */
        .hero__tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
          margin-bottom: var(--space-10);
        }
        
        .hero__tag {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: rgba(255, 255, 255, 0.85);
          padding: var(--space-2) var(--space-4);
          font-size: var(--font-size-sm);
          border-radius: var(--radius-full);
          transition: var(--transition-all);
          font-weight: var(--font-weight-normal); /* Lighter weight */
        }
        
        .hero__tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }
        
        /* Actions - Minimal elegant CTA */
        .hero__actions {
          display: flex;
          justify-content: center;
          margin-bottom: 0; /* Remove bottom margin for cleaner look */
        }
        
        .hero__cta {
          padding: var(--space-2) var(--space-5); /* Smaller, more elegant */
          font-size: var(--font-size-xs); /* Even smaller text */
          font-weight: var(--font-weight-normal);
          border-radius: var(--radius-md); /* Smaller radius */
          transition: var(--transition-all);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary-950);
          color: white;
          border: 1px solid var(--color-primary-900);
          min-width: 140px; /* Much smaller */
          letter-spacing: 0.02em; /* Subtle letter spacing */
        }
        
        .hero__cta:hover {
          background: var(--color-primary-975); /* Ultra dark on hover */
          border-color: var(--color-primary-950);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(23, 37, 84, 0.5); /* Very dark blue shadow */
        }
        
        .hero__cta-primary {
          padding: var(--space-4) var(--space-8);
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-lg);
          transition: var(--transition-all);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background: var(--color-primary-500); /* Clean blue */
          color: white;
          border: 1px solid var(--color-primary-400);
          min-width: 200px;
        }
        
        .hero__cta-primary:hover {
          background: var(--color-primary-600);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);
        }
        
        /* Scroll Indicator */
        .hero__scroll-indicator {
          position: absolute;
          bottom: var(--space-8);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          color: rgba(255, 255, 255, 0.4);
          cursor: pointer;
          transition: var(--transition-all);
        }
        
        .hero__scroll-indicator:hover {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .hero__scroll-text {
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          margin-bottom: var(--space-2);
        }
        
        .hero__scroll-arrow {
          width: 1.5rem;
          height: 1.5rem;
          animation: bounce 2s infinite;
        }
        
        /* Decorative Elements */
        .hero__decorative {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
          z-index: 1;
        }
        
        .hero__circle {
          position: absolute;
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: 50%;
          opacity: 0.2;
        }
        
        .hero__circle--1 {
          top: -10rem;
          right: -10rem;
          width: 20rem;
          height: 20rem;
        }
        
        .hero__circle--2 {
          bottom: -12rem;
          left: -12rem;
          width: 24rem;
          height: 24rem;
        }
        
        /* Animations */
        @keyframes textReveal {
          0% {
            opacity: 0;
            transform: translateY(30px) rotateX(-90deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) rotateX(0deg);
            filter: blur(0px);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translateY(0);
          }
          40%, 43% {
            transform: translateY(-8px);
          }
          70% {
            transform: translateY(-4px);
          }
          90% {
            transform: translateY(-2px);
          }
        }
        
        /* Responsive Design - Elegant mobile layout */
        @media (max-width: 768px) {
          .hero__container {
            padding: var(--space-16) var(--space-4); /* Less padding on mobile */
          }
          
          .hero__content {
            padding: var(--space-8) var(--space-4) var(--space-8); /* Compact mobile padding */
            max-width: 100%; /* Full width on mobile */
          }
          
          .hero__title {
            font-size: clamp(1.75rem, 8vw, 2.5rem); /* Smaller on mobile */
            margin-bottom: var(--space-3);
          }
          
          .hero__subtitle {
            font-size: clamp(0.875rem, 4vw, 1rem); /* Very compact on mobile */
            margin-bottom: var(--space-4);
            max-width: 100%;
          }
          
          .hero__cta {
            min-width: 120px; /* Smaller on mobile */
            padding: var(--space-2) var(--space-4);
          }
          
          .hero__tags {
            gap: var(--space-2);
          }
          
          .hero__tag {
            font-size: var(--font-size-xs);
            padding: var(--space-1) var(--space-3);
          }
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .hero__word,
          .hero__sub-word,
          .hero__shape,
          .hero__scroll-arrow {
            animation: none;
          }
          
          .hero__word,
          .hero__sub-word {
            opacity: 1;
            transform: none;
            filter: none;
          }
        }
      </style>
      
      <script>
        // Smooth scroll functionality
        document.addEventListener('DOMContentLoaded', function() {
          const scrollIndicator = document.querySelector('.hero__scroll-indicator');
          if (scrollIndicator) {
            scrollIndicator.addEventListener('click', function() {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            });
          }
        });
      </script>
    </section>
  `;
}