/**
 * Services Component - TechRix Website v2.0
 * Professional services section with gradient icons and advanced hover effects
 * 
 * @param {Object} props - Component properties
 * @param {Array} props.services - Array of service objects
 * @returns {string} Pre-computed HTML with inline CSS
 */
export function render({ 
  services = [
    {
      id: 'hjemmesider',
      title: 'Hjemmeside Udvikling',
      description: 'Moderne, responsive hjemmesider der konverterer besøgende til kunder med fokus på brugeroplevelse og performance.',
      features: ['Responsive Design', 'SEO Optimeret', 'CMS Integration', 'Performance Optimering'],
      icon: 'globe',
      href: '/services/hjemmesider',
      gradient: 'from-accent-blue to-accent-purple',
    },
    {
      id: 'webshop',
      title: 'E-commerce Løsninger',
      description: 'Professionelle webshops der øger dit salg med integrerede betalingsløsninger og avanceret produkthåndtering.',
      features: ['Payment Integration', 'Inventory Management', 'Analytics', 'Mobile Commerce'],
      icon: 'shopping-cart',
      href: '/services/webshop',
      gradient: 'from-accent-green to-accent-blue',
    },
    {
      id: 'apps',
      title: 'App Udvikling',
      description: 'Native og cross-platform apps til iOS og Android med fokus på brugeroplevelse og skalerbarhed.',
      features: ['iOS & Android', 'Cross-platform', 'API Integration', 'Push Notifications'],
      icon: 'mobile',
      href: '/services/apps',
      gradient: 'from-accent-purple to-accent-orange',
    },
    {
      id: 'automatisering',
      title: 'Proces Automatisering',
      description: 'Automatiser manuelle processer og workflows for øget effektivitet og reducerede omkostninger.',
      features: ['Workflow Automation', 'API Integration', 'Data Processing', 'Custom Solutions'],
      icon: 'cog',
      href: '/services/automatisering',
      gradient: 'from-accent-orange to-accent-green',
    },
    {
      id: 'digital-strategi',
      title: 'Digital Strategi',
      description: 'Strategisk rådgivning og planlægning af din digitale transformation og teknologiske roadmap.',
      features: ['Strategisk Planlægning', 'Technology Roadmap', 'Competitive Analysis', 'ROI Optimization'],
      icon: 'lightbulb',
      href: '/services/digital-strategi',
      gradient: 'from-accent-blue to-accent-green',
    },
    {
      id: 'analytics',
      title: 'Analytics & Tracking',
      description: 'Implementering af avancerede analytics løsninger for datadrevet beslutningstagning og optimering.',
      features: ['Google Analytics', 'Custom Dashboards', 'Conversion Tracking', 'Performance Metrics'],
      icon: 'chart-bar',
      href: '/services/analytics',
      gradient: 'from-accent-purple to-accent-blue',
    },
  ]
} = {}) {

  // Icon SVGs - Professional Heroicons style
  const icons = {
    globe: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/></svg>`,
    'shopping-cart': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6.5-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"/></svg>`,
    mobile: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a1 1 0 001-1V4a1 1 0 00-1-1H8a1 1 0 00-1 1v16a1 1 0 001 1z"/></svg>`,
    cog: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    lightbulb: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>`,
    'chart-bar': `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>`
  };

  const servicesHtml = services.map((service, index) => {
    const iconSvg = icons[service.icon] || icons.globe;
    const featuresHtml = service.features.map((feature, featureIndex) => 
      `<div class="service__feature" style="animation-delay: ${(index * 0.1) + (featureIndex * 0.05)}s">
        <div class="service__feature-dot"></div>
        ${feature}
      </div>`
    ).join('');

    return `
      <div class="service-card" style="animation-delay: ${index * 0.1}s" data-gradient="${service.gradient}">
        <!-- Gradient Overlay -->
        <div class="service-card__gradient"></div>
        
        <!-- Icon Container -->
        <div class="service-card__icon-container">
          <div class="service-card__icon">
            ${iconSvg}
          </div>
          <!-- Floating particles -->
          <div class="service-card__particle service-card__particle--1"></div>
          <div class="service-card__particle service-card__particle--2"></div>
          <div class="service-card__particle service-card__particle--3"></div>
        </div>

        <!-- Content -->
        <div class="service-card__content">
          <h3 class="service-card__title">${service.title}</h3>
          <p class="service-card__description">${service.description}</p>
          
          <!-- Features -->
          <div class="service-card__features">
            ${featuresHtml}
          </div>
          
          <!-- CTA Link -->
          <a href="${service.href}" class="service-card__cta">
            Læs mere
            <svg class="service-card__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <!-- Shimmer Effect -->
        <div class="service-card__shimmer"></div>
      </div>
    `;
  }).join('');

  return `
    <section id="services" class="services">
      <!-- Background Elements -->
      <div class="services__background">
        <div class="services__shape services__shape--1"></div>
        <div class="services__shape services__shape--2"></div>
      </div>

      <div class="services__container">
        <!-- Section Header -->
        <div class="services__header">
          <div class="services__badge">
            <span>Vores Ekspertise</span>
          </div>
          
          <h2 class="services__title">
            Løsninger der
            <span class="services__title-gradient">driver vækst</span>
          </h2>
          
          <p class="services__description">
            Vi leverer skræddersyede teknologiske løsninger der transformerer din forretning
            og skaber målbare resultater gennem innovation og ekspertise.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="services__grid">
          ${servicesHtml}
        </div>

        <!-- Bottom CTA -->
        <div class="services__cta">
          <p class="services__cta-text">Klar til at transformere din forretning?</p>
          <a href="#contact" class="services__cta-button">
            Start dit projekt
            <svg class="services__cta-arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
            </svg>
          </a>
        </div>
      </div>
      
      <style>
        .services {
          position: relative;
          padding: var(--space-32) 0;
          background: var(--obsidian-darker);
          overflow: hidden;
        }
        
        /* Background Elements */
        .services__background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }
        
        .services__shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(3px);
        }
        
        .services__shape--1 {
          top: 25%;
          left: 25%;
          width: 24rem;
          height: 24rem;
          background: rgba(59, 130, 246, 0.05);
          animation: float 12s ease-in-out infinite;
        }
        
        .services__shape--2 {
          bottom: 25%;
          right: 25%;
          width: 24rem;
          height: 24rem;
          background: rgba(139, 92, 246, 0.05);
          animation: float 15s ease-in-out infinite reverse;
        }
        
        /* Container */
        .services__container {
          position: relative;
          z-index: 10;
          max-width: var(--container-max-width);
          margin: 0 auto;
          padding: 0 var(--container-padding);
        }
        
        /* Header */
        .services__header {
          text-align: center;
          margin-bottom: var(--space-20);
        }
        
        .services__badge {
          display: inline-block;
          margin-bottom: var(--space-4);
          opacity: 0;
          transform: translateY(20px) scale(0.8);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.2s forwards;
        }
        
        .services__badge span {
          padding: var(--space-2) var(--space-4);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(var(--blur-sm));
          border-radius: var(--radius-full);
          font-size: var(--font-size-sm);
          font-weight: var(--font-weight-medium);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .services__title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: var(--font-weight-bold);
          line-height: var(--line-height-tight);
          color: var(--color-neutral-000);
          margin-bottom: var(--space-6);
          opacity: 0;
          transform: translateY(30px);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.4s forwards;
        }
        
        .services__title-gradient {
          display: block;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple), var(--accent-green));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .services__description {
          font-size: var(--font-size-xl);
          line-height: var(--line-height-relaxed);
          color: rgba(255, 255, 255, 0.7);
          max-width: 48rem;
          margin: 0 auto;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards;
        }
        
        /* Services Grid */
        .services__grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: var(--space-8);
          max-width: 84rem;
          margin: 0 auto var(--space-16);
        }
        
        /* Service Cards */
        .service-card {
          position: relative;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(var(--blur-md));
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: var(--radius-2xl);
          padding: var(--space-8);
          transition: var(--transition-all);
          overflow: hidden;
          opacity: 0;
          transform: translateY(40px);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .service-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        
        /* Gradient Overlay */
        .service-card__gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          opacity: 0;
          transition: opacity 0.5s ease;
          border-radius: var(--radius-2xl);
        }
        
        .service-card:hover .service-card__gradient {
          opacity: 0.05;
        }
        
        /* Icon Container */
        .service-card__icon-container {
          position: relative;
          margin-bottom: var(--space-6);
        }
        
        .service-card__icon {
          width: 4rem;
          height: 4rem;
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          border-radius: var(--radius-xl);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: var(--space-4);
          transition: var(--transition-all);
          box-shadow: var(--shadow-lg);
        }
        
        .service-card__icon svg {
          width: 2rem;
          height: 2rem;
          color: var(--color-neutral-000);
        }
        
        .service-card:hover .service-card__icon {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.4);
        }
        
        /* Floating Particles */
        .service-card__particle {
          position: absolute;
          width: 0.75rem;
          height: 0.75rem;
          background: var(--accent-blue);
          border-radius: 50%;
          opacity: 0;
          transition: var(--transition-all);
        }
        
        .service-card__particle--1 {
          top: -0.5rem;
          right: -0.5rem;
          animation-delay: 0s;
        }
        
        .service-card__particle--2 {
          top: 1rem;
          right: -1rem;
          background: var(--accent-purple);
          animation-delay: 0.2s;
        }
        
        .service-card__particle--3 {
          top: -1rem;
          right: 1rem;
          background: var(--accent-green);
          animation-delay: 0.4s;
        }
        
        .service-card:hover .service-card__particle {
          opacity: 0.6;
          animation: ping 2s infinite;
        }
        
        /* Content */
        .service-card__content {
          position: relative;
        }
        
        .service-card__title {
          font-size: var(--font-size-xl);
          font-weight: var(--font-weight-semibold);
          color: var(--color-neutral-000);
          margin-bottom: var(--space-3);
          transition: var(--transition-all);
        }
        
        .service-card:hover .service-card__title {
          color: var(--color-neutral-000);
        }
        
        .service-card__description {
          color: rgba(255, 255, 255, 0.7);
          line-height: var(--line-height-relaxed);
          margin-bottom: var(--space-6);
          transition: var(--transition-all);
        }
        
        .service-card:hover .service-card__description {
          color: rgba(255, 255, 255, 0.8);
        }
        
        /* Features */
        .service-card__features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: var(--space-2);
          margin-bottom: var(--space-8);
        }
        
        .service__feature {
          display: flex;
          align-items: center;
          font-size: var(--font-size-sm);
          color: rgba(255, 255, 255, 0.6);
          transition: var(--transition-all);
          opacity: 0;
          transform: translateX(-10px);
          animation: slideInScale 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }
        
        .service-card:hover .service__feature {
          color: rgba(255, 255, 255, 0.7);
        }
        
        .service__feature-dot {
          width: 0.375rem;
          height: 0.375rem;
          background: var(--accent-blue);
          border-radius: 50%;
          margin-right: var(--space-2);
          transition: var(--transition-all);
        }
        
        .service-card:hover .service__feature-dot {
          background: var(--accent-purple);
        }
        
        /* CTA Link */
        .service-card__cta {
          display: inline-flex;
          align-items: center;
          color: var(--color-neutral-000);
          font-weight: var(--font-weight-medium);
          text-decoration: none;
          transition: var(--transition-all);
        }
        
        .service-card__cta:hover {
          color: var(--accent-blue);
          transform: translateX(4px);
        }
        
        .service-card__arrow {
          width: 1rem;
          height: 1rem;
          margin-left: var(--space-2);
          transition: var(--transition-all);
        }
        
        .service-card__cta:hover .service-card__arrow {
          transform: translateX(4px);
        }
        
        /* Shimmer Effect */
        .service-card__shimmer {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          transform: translateX(-100%) skewX(-15deg);
          transition: transform 0.8s ease;
          border-radius: var(--radius-2xl);
        }
        
        .service-card:hover .service-card__shimmer {
          transform: translateX(200%) skewX(-15deg);
        }
        
        /* Bottom CTA */
        .services__cta {
          text-align: center;
          opacity: 0;
          transform: translateY(30px);
          animation: slideInScale 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) 1.2s forwards;
        }
        
        .services__cta-text {
          color: rgba(255, 255, 255, 0.6);
          margin-bottom: var(--space-6);
        }
        
        .services__cta-button {
          display: inline-flex;
          align-items: center;
          padding: var(--space-4) var(--space-8);
          background: linear-gradient(135deg, var(--accent-blue), var(--accent-purple));
          color: var(--color-neutral-000);
          font-weight: var(--font-weight-semibold);
          text-decoration: none;
          border-radius: var(--radius-xl);
          transition: var(--transition-all);
          box-shadow: var(--shadow-lg);
        }
        
        .services__cta-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 15px 30px rgba(59, 130, 246, 0.25);
        }
        
        .services__cta-arrow {
          width: 1.25rem;
          height: 1.25rem;
          margin-left: var(--space-2);
        }
        
        /* Animations */
        @keyframes slideInScale {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }
        
        @keyframes ping {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.5);
            opacity: 0.3;
          }
          100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        /* Responsive */
        @media (max-width: 768px) {
          .services__grid {
            grid-template-columns: 1fr;
            gap: var(--space-6);
          }
          
          .service-card {
            padding: var(--space-6);
          }
          
          .service-card__features {
            grid-template-columns: 1fr;
          }
        }
        
        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .service-card,
          .services__badge,
          .services__title,
          .services__description,
          .services__cta,
          .service__feature {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      </style>
    </section>
  `;
}