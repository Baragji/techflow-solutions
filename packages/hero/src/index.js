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
  title = "Du", 
  highlights = ["kunne", "vokse", "lige", "nu"],
  subtitle = "Lad os accelerere din digitale transformation",
  description = "Vi skaber digitale løsninger der ikke bare ser godt ud – de leverer målbare resultater. Fra apps der engagerer til hjemmesider der konverterer og automatisering der sparer tid."
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
        <div class="hero__content glass-hero">
          <!-- Main Headline -->
          <div class="hero__headline">
            <div class="hero__title-main">
              ${heroWordsHtml}
            </div>
            
            <div class="hero__title-sub">
              ${subWordsHtml}
            </div>
          </div>

          <!-- Description -->
          <p class="hero__description">
            ${description}
          </p>

          <!-- Tags -->
          <div class="hero__tags">
            <span class="hero__tag">Web Development</span>
            <span class="hero__tag">App Development</span>
            <span class="hero__tag">Digital Marketing</span>
            <span class="hero__tag">SEO</span>
            <span class="hero__tag">Automation</span>
          </div>

          <!-- CTA Buttons -->
          <div class="hero__actions">
            <a href="#contact" class="hero__cta-primary btn-primary">
              Kom i gang i dag
            </a>
            <a href="#services" class="hero__cta-secondary btn-secondary">
              Se vores services
            </a>
          </div>

          <!-- Scroll Indicator -->
          <div class="hero__scroll-indicator">
            <span class="hero__scroll-text">Scroll for mere</span>
            <svg class="hero__scroll-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
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
          background-image: url('/images/obsidian-bg.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          background-repeat: no-repeat;
        }
        
        /* Dark overlay for text readability */
        .hero__background::after {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(10, 10, 10, 0.7) 0%, rgba(20, 20, 25, 0.8) 50%, rgba(10, 10, 10, 0.7) 100%);
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
        
        /* Main Container */
        .hero__container {
          position: relative;
          z-index: 20;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: var(--space-32) var(--container-padding);
          display: flex;
          justify-content: center;
        }
        
        .hero__content {
          width: 100%;
          max-width: 64rem;
          text-align: center;
          padding: var(--space-12) var(--space-8) var(--space-20);
          border-radius: var(--radius-xl);
          position: relative;
        }
        
        /* Typography */
        .hero__headline {
          margin-bottom: var(--space-8);
        }
        
        .hero__title-main {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-4);
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: var(--font-weight-extrabold);
          line-height: var(--line-height-tight);
          letter-spacing: var(--letter-spacing-tighter);
          color: var(--color-neutral-000);
          margin-bottom: var(--space-6);
        }
        
        .hero__word {
          display: inline-block;
          opacity: 0;
          transform: translateY(30px) rotateX(-90deg);
          filter: blur(10px);
          animation: textReveal 0.8s ease forwards;
        }
        
        .hero__title-sub {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: var(--space-3);
          font-size: clamp(1.5rem, 4vw, 3rem);
          font-weight: var(--font-weight-medium);
          line-height: var(--line-height-tight);
          letter-spacing: var(--letter-spacing-tight);
          color: rgba(255, 255, 255, 0.9);
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
          color: rgba(255, 255, 255, 0.9);
          padding: var(--space-2) var(--space-4);
          font-size: var(--font-size-sm);
          border-radius: var(--radius-full);
          transition: var(--transition-all);
          font-weight: var(--font-weight-medium);
        }
        
        .hero__tag:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: var(--accent-blue);
          color: var(--accent-blue);
        }
        
        /* Actions */
        .hero__actions {
          display: flex;
          gap: var(--space-4);
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: var(--space-16);
        }
        
        .hero__cta-primary,
        .hero__cta-secondary {
          padding: var(--space-4) var(--space-8);
          font-size: var(--font-size-lg);
          font-weight: var(--font-weight-medium);
          border-radius: var(--radius-md);
          transition: var(--transition-all);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
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
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .hero__container {
            padding: var(--space-20) var(--space-4);
          }
          
          .hero__content {
            padding: var(--space-8) var(--space-6) var(--space-16);
          }
          
          .hero__title-main {
            gap: var(--space-2);
          }
          
          .hero__title-sub {
            gap: var(--space-2);
          }
          
          .hero__actions {
            flex-direction: column;
            align-items: center;
          }
          
          .hero__cta-primary,
          .hero__cta-secondary {
            width: 100%;
            max-width: 20rem;
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