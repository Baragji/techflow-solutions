<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TechRix - Next-Gen Digital Solutions</title>
    <style>
        /* Phase 1: Core Glass System */
        :root {
            --glass-blur-primary: 16px;
            --glass-saturate-primary: 1.2;
            --glass-blur-secondary: 8px;
            --glass-saturate-secondary: 1;
            --glass-white: rgba(255, 255, 255, 0.1);
            --glass-border: rgba(255, 255, 255, 0.2);
            --anim-duration: 400ms;
            --anim-easing: cubic-bezier(0.4, 0, 0.2, 1);
            --primary-color: #007bff;
            --text-primary: #ffffff;
            --text-secondary: rgba(255, 255, 255, 0.8);
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            color: var(--text-primary);
            overflow-x: hidden;
        }

        /* Base glass layers */
        .glass-layer-1 {
            background: var(--glass-white);
            backdrop-filter: blur(var(--glass-blur-primary)) saturate(var(--glass-saturate-primary));
            -webkit-backdrop-filter: blur(var(--glass-blur-primary)) saturate(var(--glass-saturate-primary));
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            padding: 24px;
            will-change: transform, opacity;
            transition: all var(--anim-duration) var(--anim-easing);
            position: relative;
        }

        .glass-layer-2 {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(var(--glass-blur-secondary)) saturate(var(--glass-saturate-secondary));
            -webkit-backdrop-filter: blur(var(--glass-blur-secondary)) saturate(var(--glass-saturate-secondary));
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 8px;
            padding: 16px;
            will-change: transform, opacity;
            transition: all var(--anim-duration) var(--anim-easing);
        }

        /* Advanced layers hidden by default */
        .glass-layer-3,
        .glass-layer-4 {
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
        }

        .high-end .glass-layer-3 {
            opacity: 1;
            visibility: visible;
            background: rgba(255, 255, 255, 0.15);
            backdrop-filter: blur(24px) saturate(200%);
            -webkit-backdrop-filter: blur(24px) saturate(200%);
            border: 1px solid rgba(255, 255, 255, 0.25);
            mix-blend-mode: overlay;
        }

        .high-end .glass-layer-4 {
            opacity: 1;
            visibility: visible;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(32px) saturate(220%);
            -webkit-backdrop-filter: blur(32px) saturate(220%);
            border: 1px solid rgba(255, 255, 255, 0.3);
            mix-blend-mode: soft-light;
        }

        /* Fallback for no backdrop-filter support */
        @supports not (backdrop-filter: blur(1px)) {
            .glass-layer-1 { 
                background: rgba(255,255,255,0.9); 
                box-shadow: 0 4px 6px rgba(0,0,0,0.1); 
            }
            .glass-layer-2 { 
                background: rgba(255,255,255,0.8); 
                box-shadow: 0 2px 4px rgba(0,0,0,0.1); 
            }
        }

        /* Phase 2: Essential Animations */
        .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity var(--anim-duration) var(--anim-easing),
                       transform var(--anim-duration) var(--anim-easing);
        }

        .fade-in.visible { 
            opacity: 1; 
            transform: translateY(0); 
        }

        .hover-highlight {
            transition: transform var(--anim-duration) var(--anim-easing),
                       box-shadow var(--anim-duration) var(--anim-easing);
        }

        .hover-highlight:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 16px rgba(0,0,0,0.2);
        }

        /* Layout */
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }

        .hero {
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            position: relative;
        }

        .hero-content {
            max-width: 800px;
        }

        .hero h1 {
            font-size: 3.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
            background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }

        .hero p {
            font-size: 1.25rem;
            margin-bottom: 2rem;
            color: var(--text-secondary);
        }

        .services {
            padding: 100px 0;
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            margin-top: 60px;
        }

        .service-card {
            margin-bottom: 20px;
        }

        .service-card h3 {
            font-size: 1.5rem;
            margin-bottom: 1rem;
        }

        .service-card p {
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 1.5rem;
        }

        /* Buttons */
        .btn {
            display: inline-block;
            padding: 12px 30px;
            border-radius: 8px;
            text-decoration: none;
            font-weight: 600;
            transition: all var(--anim-duration) var(--anim-easing);
            border: none;
            cursor: pointer;
            font-size: 1rem;
        }

        .btn-primary {
            background: var(--primary-color);
            color: white;
        }

        .btn-primary:hover {
            background: #0056b3;
            transform: translateY(-2px);
        }

        .btn-glass {
            background: rgba(255, 255, 255, 0.1);
            color: white;
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
        }

        .btn-glass:hover {
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.3);
        }

        /* CTA Section */
        .cta-section {
            text-align: center;
            padding: 80px 0;
        }

        .cta-section h2 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        .cta-section p {
            font-size: 1.2rem;
            color: var(--text-secondary);
            margin-bottom: 2rem;
        }

        /* Performance indicators */
        .performance-indicator {
            position: fixed;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 8px 12px;
            border-radius: 20px;
            font-size: 0.8rem;
            opacity: 0;
            transition: opacity 0.3s ease;
            z-index: 1000;
        }

        .performance-indicator.visible {
            opacity: 1;
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
            .glass-layer-1,
            .glass-layer-2,
            .fade-in,
            .hover-highlight,
            .btn {
                transition: none !important;
            }
            .fade-in { 
                opacity: 1 !important; 
                transform: none !important; 
            }
        }

        /* Mobile adjustments */
        @media (max-width: 768px) {
            :root { 
                --glass-blur-primary: 12px; 
                --glass-blur-secondary: 6px; 
            }
            .glass-layer-1 { padding: 16px; }
            .glass-layer-2 { padding: 12px; }
            .hero h1 { font-size: 2.5rem; }
            .services-grid { grid-template-columns: 1fr; }
        }
    </style>
</head>
<body>
    <div class="performance-indicator" id="performance-indicator">
        Standard Mode
    </div>

    <section class="hero">
        <div class="container">
            <div class="hero-content glass-layer-1 fade-in">
                <h1>Next-Gen Digital Solutions</h1>
                <p>Adaptive experiences that scale with your users' capabilities</p>
                <a href="#services" class="btn btn-primary" id="hero-cta">Explore Services</a>
            </div>
        </div>
    </section>

    <section class="services" id="services">
        <div class="container">
            <div class="services-grid">
                <div class="service-card glass-layer-1 fade-in hover-highlight">
                    <h3>Performance-First Development</h3>
                    <p>Intelligent systems that adapt to device capabilities and network conditions for optimal user experience.</p>
                    <a href="#" class="btn btn-glass cta-service" data-service="performance">Learn More</a>
                </div>

                <div class="service-card glass-layer-2 fade-in hover-highlight">
                    <h3>Progressive Enhancement</h3>
                    <p>Layered experiences that work everywhere but shine on capable devices with advanced visual effects.</p>
                    <a href="#" class="btn btn-glass cta-service" data-service="progressive">Learn More</a>
                </div>

                <div class="service-card glass-layer-1 fade-in hover-highlight">
                    <h3>Real-Time Optimization</h3>
                    <p>Continuous monitoring and automatic adjustments to maintain smooth performance across all conditions.</p>
                    <a href="#" class="btn btn-glass cta-service" data-service="optimization">Learn More</a>
                </div>
            </div>
        </div>
    </section>

    <section class="cta-section">
        <div class="container">
            <div class="glass-layer-1 fade-in hover-highlight">
                <h2>Ready to Transform Your Digital Presence?</h2>
                <p>Experience the future of adaptive web development</p>
                <a href="#" class="btn btn-primary" id="cta-get-started">Get Started Today</a>
            </div>
        </div>
    </section>

    <script>
        // Debug Panel for Development
        class DebugPanel {
            constructor() {
                this.isVisible = false;
                this.metrics = {};
                this.logs = [];
                this.maxLogs = 50;
                this.createPanel();
                this.bindKeyboard();
            }

            createPanel() {
                this.panel = document.createElement('div');
                this.panel.id = 'debug-panel';
                this.panel.innerHTML = `
                    <div class="debug-header">
                        <h3>TechRix Debug Console</h3>
                        <button id="debug-close">×</button>
                    </div>
                    <div class="debug-tabs">
                        <button class="debug-tab active" data-tab="performance">Performance</button>
                        <button class="debug-tab" data-tab="capabilities">Capabilities</button>
                        <button class="debug-tab" data-tab="logs">Logs</button>
                        <button class="debug-tab" data-tab="config">Config</button>
                    </div>
                    <div class="debug-content">
                        <div class="debug-tab-content active" id="debug-performance">
                            <div class="metric-grid" id="performance-metrics"></div>
                        </div>
                        <div class="debug-tab-content" id="debug-capabilities">
                            <div id="capabilities-info"></div>
                        </div>
                        <div class="debug-tab-content" id="debug-logs">
                            <div class="log-controls">
                                <button id="clear-logs">Clear</button>
                                <select id="log-level">
                                    <option value="all">All</option>
                                    <option value="error">Errors</option>
                                    <option value="warn">Warnings</option>
                                    <option value="info">Info</option>
                                </select>
                            </div>
                            <div class="logs-container" id="logs-container"></div>
                        </div>
                        <div class="debug-tab-content" id="debug-config">
                            <div class="config-controls" id="config-controls"></div>
                        </div>
                    </div>
                `;
                
                // Add debug styles
                const style = document.createElement('style');
                style.textContent = `
                    #debug-panel {
                        position: fixed;
                        top: 50px;
                        right: 20px;
                        width: 400px;
                        max-height: 80vh;
                        background: rgba(0, 0, 0, 0.95);
                        color: #fff;
                        border-radius: 8px;
                        font-family: 'Monaco', 'Menlo', monospace;
                        font-size: 12px;
                        z-index: 10000;
                        display: none;
                        overflow: hidden;
                    }
                    .debug-header {
                        padding: 10px;
                        background: #333;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                    }
                    .debug-header h3 { margin: 0; font-size: 14px; }
                    #debug-close {
                        background: none;
                        border: none;
                        color: #fff;
                        font-size: 18px;
                        cursor: pointer;
                    }
                    .debug-tabs {
                        display: flex;
                        background: #222;
                    }
                    .debug-tab {
                        flex: 1;
                        padding: 8px;
                        background: none;
                        border: none;
                        color: #999;
                        cursor: pointer;
                        font-size: 11px;
                    }
                    .debug-tab.active { color: #fff; background: #444; }
                    .debug-content {
                        max-height: 60vh;
                        overflow-y: auto;
                        padding: 10px;
                    }
                    .debug-tab-content { display: none; }
                    .debug-tab-content.active { display: block; }
                    .metric-grid {
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                        gap: 10px;
                    }
                    .metric {
                        background: #333;
                        padding: 8px;
                        border-radius: 4px;
                    }
                    .metric-label { color: #999; font-size: 10px; }
                    .metric-value { color: #0f0; font-weight: bold; }
                    .metric-value.warning { color: #ff0; }
                    .metric-value.error { color: #f00; }
                    .log-entry {
                        margin: 2px 0;
                        padding: 4px;
                        border-left: 3px solid #666;
                        font-size: 11px;
                    }
                    .log-entry.error { border-color: #f00; background: rgba(255,0,0,0.1); }
                    .log-entry.warn { border-color: #ff0; background: rgba(255,255,0,0.1); }
                    .log-entry.info { border-color: #0f0; background: rgba(0,255,0,0.1); }
                    .config-control {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        margin: 8px 0;
                        padding: 8px;
                        background: #333;
                        border-radius: 4px;
                    }
                    .config-control input, .config-control select {
                        background: #444;
                        border: 1px solid #666;
                        color: #fff;
                        padding: 4px;
                        border-radius: 2px;
                    }
                `;
                document.head.appendChild(style);
                document.body.appendChild(this.panel);
                
                this.bindEvents();
            }

            bindKeyboard() {
                document.addEventListener('keydown', (e) => {
                    // Ctrl+Shift+D to toggle debug panel
                    if (e.ctrlKey && e.shiftKey && e.key === 'D') {
                        e.preventDefault();
                        this.toggle();
                    }
                });
            }

            bindEvents() {
                document.getElementById('debug-close').onclick = () => this.hide();
                
                document.querySelectorAll('.debug-tab').forEach(tab => {
                    tab.onclick = () => this.switchTab(tab.dataset.tab);
                });

                document.getElementById('clear-logs').onclick = () => this.clearLogs();
            }

            toggle() {
                this.isVisible ? this.hide() : this.show();
            }

            show() {
                this.panel.style.display = 'block';
                this.isVisible = true;
                this.updateMetrics();
                this.updateCapabilities();
                this.updateConfig();
            }

            hide() {
                this.panel.style.display = 'none';
                this.isVisible = false;
            }

            switchTab(tabName) {
                document.querySelectorAll('.debug-tab').forEach(t => t.classList.remove('active'));
                document.querySelectorAll('.debug-tab-content').forEach(c => c.classList.remove('active'));
                
                document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');
                document.getElementById(`debug-${tabName}`).classList.add('active');
            }

            log(level, message, data = {}) {
                const timestamp = new Date().toLocaleTimeString();
                this.logs.unshift({
                    level,
                    message,
                    data,
                    timestamp
                });
                
                if (this.logs.length > this.maxLogs) {
                    this.logs = this.logs.slice(0, this.maxLogs);
                }
                
                if (this.isVisible) {
                    this.updateLogs();
                }
                
                // Also log to console with context
                console[level](`[TechRix] ${message}`, data);
            }

            updateMetrics() {
                const container = document.getElementById('performance-metrics');
                if (!container) return;

                const fps = this.metrics.fps || 0;
                const memory = performance.memory ? Math.round(performance.memory.usedJSHeapSize / 1024 / 1024) : 'N/A';
                const glassLevel = document.documentElement.classList.contains('high-end') ? 'Advanced' : 
                                document.documentElement.classList.contains('standard') ? 'Standard' : 'Minimal';

                container.innerHTML = `
                    <div class="metric">
                        <div class="metric-label">FPS</div>
                        <div class="metric-value ${fps < 30 ? 'error' : fps < 50 ? 'warning' : ''}">${fps.toFixed(1)}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Memory (MB)</div>
                        <div class="metric-value">${memory}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Glass Level</div>
                        <div class="metric-value">${glassLevel}</div>
                    </div>
                    <div class="metric">
                        <div class="metric-label">Active Animations</div>
                        <div class="metric-value">${window.motionBudget?.active?.length || 0}</div>
                    </div>
                `;
            }

            updateCapabilities() {
                const container = document.getElementById('capabilities-info');
                if (!container) return;

                const caps = {
                    cores: navigator.hardwareConcurrency || 'Unknown',
                    memory: navigator.deviceMemory || 'Unknown',
                    connection: navigator.connection?.effectiveType || 'Unknown',
                    viewport: `${window.innerWidth}x${window.innerHeight}`,
                    pixelRatio: window.devicePixelRatio || 1,
                    reducedMotion: window.matchMedia('(prefers-reduced-motion: reduce)').matches,
                    backDropFilter: CSS.supports('backdrop-filter', 'blur(1px)')
                };

                container.innerHTML = Object.entries(caps)
                    .map(([key, value]) => `
                        <div class="config-control">
                            <span>${key}:</span>
                            <span>${value}</span>
                        </div>
                    `).join('');
            }

            updateLogs() {
                const container = document.getElementById('logs-container');
                if (!container) return;

                const level = document.getElementById('log-level').value;
                const filteredLogs = level === 'all' ? this.logs : this.logs.filter(l => l.level === level);

                container.innerHTML = filteredLogs.map(log => `
                    <div class="log-entry ${log.level}">
                        <span style="color: #666;">${log.timestamp}</span> 
                        <strong>[${log.level.toUpperCase()}]</strong> 
                        ${log.message}
                        ${Object.keys(log.data).length ? `<pre>${JSON.stringify(log.data, null, 2)}</pre>` : ''}
                    </div>
                `).join('');
            }

            updateConfig() {
                const container = document.getElementById('config-controls');
                if (!container) return;

                container.innerHTML = `
                    <div class="config-control">
                        <label>Force Glass Level:</label>
                        <select id="force-glass-level">
                            <option value="auto">Auto</option>
                            <option value="minimal">Minimal</option>
                            <option value="standard">Standard</option>
                            <option value="advanced">Advanced</option>
                        </select>
                    </div>
                    <div class="config-control">
                        <label>Motion Budget:</label>
                        <input type="range" id="motion-budget" min="1" max="10" value="2">
                        <span id="motion-budget-value">2</span>
                    </div>
                    <div class="config-control">
                        <label>Performance Monitor:</label>
                        <input type="checkbox" id="perf-monitor" checked>
                    </div>
                `;

                this.bindConfigEvents();
            }

            bindConfigEvents() {
                const glassSelect = document.getElementById('force-glass-level');
                const motionRange = document.getElementById('motion-budget');
                const perfCheck = document.getElementById('perf-monitor');

                if (glassSelect) {
                    glassSelect.onchange = (e) => {
                        const level = e.target.value;
                        if (level === 'auto') {
                            // Reset to auto detection
                            const autoLevel = DeviceCapabilities.getGlassLevel();
                            document.documentElement.className = autoLevel;
                        } else {
                            document.documentElement.className = level;
                        }
                        this.log('info', `Glass level changed to: ${level}`);
                    };
                }

                if (motionRange) {
                    const valueDisplay = document.getElementById('motion-budget-value');
                    motionRange.oninput = (e) => {
                        const value = parseInt(e.target.value);
                        valueDisplay.textContent = value;
                        if (window.motionBudget) {
                            window.motionBudget.limit = value;
                        }
                        this.log('info', `Motion budget changed to: ${value}`);
                    };
                }

                if (perfCheck) {
                    perfCheck.onchange = (e) => {
                        if (window.performanceGuard) {
                            if (e.target.checked) {
                                // Re-enable monitoring logic here
                                this.log('info', 'Performance monitoring enabled');
                            } else {
                                this.log('info', 'Performance monitoring disabled');
                            }
                        }
                    };
                }
            }

            clearLogs() {
                this.logs = [];
                this.updateLogs();
            }

            setMetric(name, value) {
                this.metrics[name] = value;
                if (this.isVisible) {
                    this.updateMetrics();
                }
            }
        }

        // Performance Profiler for Development
        class PerformanceProfiler {
            constructor() {
                this.timers = new Map();
                this.marks = [];
                this.enabled = window.location.search.includes('debug=true') || localStorage.getItem('techrix-debug') === 'true';
            }

            start(name) {
                if (!this.enabled) return;
                this.timers.set(name, performance.now());
                performance.mark(`${name}-start`);
            }

            end(name) {
                if (!this.enabled) return;
                const startTime = this.timers.get(name);
                if (startTime) {
                    const duration = performance.now() - startTime;
                    performance.mark(`${name}-end`);
                    performance.measure(name, `${name}-start`, `${name}-end`);
                    
                    if (window.debugPanel) {
                        window.debugPanel.log('info', `Timer: ${name}`, { duration: `${duration.toFixed(2)}ms` });
                    }
                    
                    this.timers.delete(name);
                    return duration;
                }
            }

            measureFrameRate() {
                if (!this.enabled) return;
                
                let frames = 0;
                let lastTime = performance.now();
                
                const measure = (currentTime) => {
                    frames++;
                    if (currentTime - lastTime >= 1000) {
                        const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                        
                        if (window.debugPanel) {
                            window.debugPanel.setMetric('fps', fps);
                        }
                        
                        frames = 0;
                        lastTime = currentTime;
                    }
                    requestAnimationFrame(measure);
                };
                
                requestAnimationFrame(measure);
            }
        }

        // Simplified onboarding system
        class OnboardingGuide {
            constructor() {
                this.steps = [
                    {
                        target: '.hero-content',
                        title: 'Welcome to TechRix',
                        content: 'This demo showcases adaptive performance based on your device capabilities.'
                    },
                    {
                        target: '.performance-indicator',
                        title: 'Performance Monitor',
                        content: 'Watch how the system adapts to maintain smooth performance.'
                    },
                    {
                        target: '.service-card:first-child',
                        title: 'Adaptive Effects',
                        content: 'Glass effects automatically adjust based on your device capabilities.'
                    }
                ];
                this.currentStep = 0;
                this.isActive = false;
            }

            start() {
                if (localStorage.getItem('techrix-onboarding-complete') === 'true') {
                    return;
                }
                
                this.isActive = true;
                this.showStep(0);
            }

            showStep(stepIndex) {
                if (stepIndex >= this.steps.length) {
                    this.complete();
                    return;
                }

                const step = this.steps[stepIndex];
                const target = document.querySelector(step.target);
                
                if (!target) {
                    this.showStep(stepIndex + 1);
                    return;
                }

                this.createTooltip(target, step, stepIndex);
            }

            createTooltip(target, step, stepIndex) {
                // Remove existing tooltip
                const existing = document.getElementById('onboarding-tooltip');
                if (existing) existing.remove();

                const tooltip = document.createElement('div');
                tooltip.id = 'onboarding-tooltip';
                tooltip.innerHTML = `
                    <div class="tooltip-content">
                        <h4>${step.title}</h4>
                        <p>${step.content}</p>
                        <div class="tooltip-actions">
                            <button id="tooltip-skip">Skip Tour</button>
                            <button id="tooltip-next">${stepIndex === this.steps.length - 1 ? 'Finish' : 'Next'}</button>
                        </div>
                        <div class="tooltip-progress">
                            Step ${stepIndex + 1} of ${this.steps.length}
                        </div>
                    </div>
                `;

                // Basic tooltip styling
                const style = document.createElement('style');
                style.textContent = `
                    #onboarding-tooltip {
                        position: absolute;
                        background: rgba(0, 0, 0, 0.9);
                        color: white;
                        padding: 20px;
                        border-radius: 8px;
                        max-width: 300px;
                        z-index: 10001;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                    }
                    .tooltip-content h4 { margin: 0 0 10px 0; }
                    .tooltip-content p { margin: 0 0 15px 0; font-size: 14px; line-height: 1.4; }
                    .tooltip-actions { display: flex; gap: 10px; margin-bottom: 10px; }
                    .tooltip-actions button {
                        padding: 8px 16px;
                        border: none;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                    }
                    #tooltip-skip { background: #666; color: white; }
                    #tooltip-next { background: #007bff; color: white; }
                    .tooltip-progress { font-size: 12px; color: #999; text-align: center; }
                `;
                document.head.appendChild(style);

                // Position tooltip
                const rect = target.getBoundingClientRect();
                tooltip.style.top = (rect.bottom + 10) + 'px';
                tooltip.style.left = rect.left + 'px';

                document.body.appendChild(tooltip);

                // Bind events
                document.getElementById('tooltip-skip').onclick = () => this.complete();
                document.getElementById('tooltip-next').onclick = () => this.showStep(stepIndex + 1);

                // Highlight target
                target.style.outline = '2px solid #007bff';
                target.style.outlineOffset = '4px';
            }

            complete() {
                this.isActive = false;
                localStorage.setItem('techrix-onboarding-complete', 'true');
                
                const tooltip = document.getElementById('onboarding-tooltip');
                if (tooltip) tooltip.remove();
                
                // Remove highlights
                document.querySelectorAll('[style*="outline"]').forEach(el => {
                    el.style.outline = '';
                    el.style.outlineOffset = '';
                });
            }
        }

        // Phase 1: Core System
        class DeviceCapabilities {
            static isHighEnd() {
                try {
                    const cores = navigator.hardwareConcurrency || 2;
                    const conn = navigator.connection;
                    const slow = conn && ['slow-2g','2g','3g'].includes(conn.effectiveType);
                    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
                    const ram = navigator.deviceMemory ? navigator.deviceMemory >= 4 : true;
                    return cores >= 4 && !slow && !reduced && window.innerWidth >= 768 && ram;
                } catch (e) {
                    console.warn('DeviceCapabilities error', e);
                    return false;
                }
            }

            static getGlassLevel() {
                if (this.isHighEnd()) return 'advanced';
                return (navigator.hardwareConcurrency >= 2) ? 'standard' : 'minimal';
            }
        }

        class MotionBudget {
            constructor(limit = 2) {
                this.limit = limit;
                this.queue = [];
                this.active = [];
            }

            animate(el, frames, opts = {}) {
                if (!el || this.active.length >= this.limit) {
                    this.queue.push({el, frames, opts});
                    return Promise.resolve();
                }

                return new Promise((resolve, reject) => {
                    try {
                        const anim = el.animate(frames, {...opts, fill: 'forwards'});
                        this.active.push(anim);
                        
                        anim.addEventListener('finish', () => {
                            this._cleanup(anim);
                            resolve(anim);
                        });
                        
                        anim.addEventListener('cancel', () => {
                            this._cleanup(anim);
                            reject();
                        });
                    } catch(err) {
                        reject(err);
                    }
                });
            }

            _cleanup(anim) {
                this.active = this.active.filter(a => a !== anim);
                if (this.queue.length) {
                    const next = this.queue.shift();
                    this.animate(next.el, next.frames, next.opts);
                }
            }
        }

        class PerformanceGuard {
            constructor() {
                this.threshold = 55;
                this.drops = 0;
                this.window = 60;
                this.count = 0;
                this.degraded = false;
                this.indicator = document.getElementById('performance-indicator');
                requestAnimationFrame(this._monitor.bind(this));
            }

            _monitor(ts) {
                if (!this.last) this.last = ts;
                const fps = 1000 / (ts - this.last);
                this.count++;

                if (fps < this.threshold) this.drops++;

                if (this.count % this.window === 0) {
                    if (this.drops > 10 && !this.degraded) {
                        this.degrade();
                    } else if (this.drops < 3 && this.degraded) {
                        this.restore();
                    }
                    this.drops = 0;
                }

                this.last = ts;
                requestAnimationFrame(this._monitor.bind(this));
            }

            degrade() {
                this.degraded = true;
                document.documentElement.style.setProperty('--glass-blur-primary', '8px');
                document.documentElement.style.setProperty('--glass-blur-secondary', '4px');
                document.documentElement.classList.add('performance-degraded');
                this.updateIndicator('Performance Mode');
                console.warn('Performance degraded');
            }

            restore() {
                this.degraded = false;
                document.documentElement.style.setProperty('--glass-blur-primary', '16px');
                document.documentElement.style.setProperty('--glass-blur-secondary', '8px');
                document.documentElement.classList.remove('performance-degraded');
                this.updateIndicator('Standard Mode');
                console.info('Performance restored');
            }

            updateIndicator(text) {
                if (this.indicator) {
                    this.indicator.textContent = text;
                    this.indicator.classList.add('visible');
                    setTimeout(() => {
                        this.indicator.classList.remove('visible');
                    }, 3000);
                }
            }
        }

        class RevealAnimations {
            constructor(stagger = true) {
                this.observer = new IntersectionObserver(
                    this._callback.bind(this),
                    { threshold: 0.1, rootMargin: '50px' }
                );
                this.stagger = stagger;
                this._init();
            }

            _init() {
                if (document.readyState === 'loading') {
                    document.addEventListener('DOMContentLoaded', () => this._observe());
                } else {
                    this._observe();
                }
            }

            _observe() {
                document.querySelectorAll('.fade-in').forEach((el, i) => {
                    if (this.stagger) {
                        el.style.transitionDelay = `${i * 100}ms`;
                    }
                    this.observer.observe(el);
                });
            }

            _callback(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        this.observer.unobserve(entry.target);
                    }
                });
            }
        }

        // Analytics and Tracking
        class Analytics {
            static track(event, data = {}) {
                // Mock analytics - replace with your actual implementation
                console.log('Analytics:', event, data);
                
                // Example: Google Analytics 4
                if (typeof gtag !== 'undefined') {
                    gtag('event', event, data);
                }
            }
        }

        // Initialize system with comprehensive error handling and debugging
        document.addEventListener('DOMContentLoaded', () => {
            try {
                // Initialize debug tools first (only in development)
                const isDebugMode = window.location.search.includes('debug=true') || 
                                  localStorage.getItem('techrix-debug') === 'true';
                
                if (isDebugMode) {
                    window.debugPanel = new DebugPanel();
                    window.profiler = new PerformanceProfiler();
                    window.profiler.measureFrameRate();
                    
                    // Add debug info to page
                    document.body.insertAdjacentHTML('beforeend', `
                        <div style="position: fixed; bottom: 20px; left: 20px; background: rgba(0,0,0,0.8); color: white; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; z-index: 9999;">
                            Debug Mode Active - Press Ctrl+Shift+D for console
                        </div>
                    `);
                }

                window.profiler?.start('initialization');

                // Determine device capabilities
                const level = DeviceCapabilities.getGlassLevel();
                document.documentElement.classList.add(level);
                
                if (DeviceCapabilities.isHighEnd()) {
                    document.documentElement.classList.add('high-end');
                }

                window.debugPanel?.log('info', 'Device capabilities detected', {
                    level,
                    isHighEnd: DeviceCapabilities.isHighEnd(),
                    cores: navigator.hardwareConcurrency,
                    memory: navigator.deviceMemory,
                    connection: navigator.connection?.effectiveType
                });

                // Initialize core systems with error boundaries
                try {
                    window.performanceGuard = new PerformanceGuard();
                    window.performanceGuard.updateIndicator(`${level.charAt(0).toUpperCase() + level.slice(1)} Mode`);
                } catch (err) {
                    console.error('Performance guard initialization failed:', err);
                    window.debugPanel?.log('error', 'Performance guard failed', { error: err.message });
                }

                try {
                    window.motionBudget = new MotionBudget();
                    window.revealAnimations = new RevealAnimations(true);
                } catch (err) {
                    console.error('Animation system initialization failed:', err);
                    window.debugPanel?.log('error', 'Animation system failed', { error: err.message });
                }

                // Graceful fallback for smooth scrolling
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                    anchor.addEventListener('click', function (e) {
                        e.preventDefault();
                        const target = document.querySelector(this.getAttribute('href'));
                        if (target) {
                            try {
                                target.scrollIntoView({ behavior: 'smooth' });
                            } catch (err) {
                                // Fallback for older browsers
                                target.scrollIntoView();
                            }
                        }
                    });
                });

                // Analytics with error handling
                const trackingHandlers = [
                    { id: 'hero-cta', location: 'hero' },
                    { id: 'cta-get-started', location: 'footer' }
                ];

                trackingHandlers.forEach(({ id, location }) => {
                    const element = document.getElementById(id);
                    if (element) {
                        element.addEventListener('click', (e) => {
                            try {
                                Analytics.track('CTA Click', { location, device_level: level });
                                window.debugPanel?.log('info', 'CTA clicked', { location, device_level: level });
                            } catch (err) {
                                console.warn('Analytics tracking failed:', err);
                            }
                        });
                    }
                });

                document.querySelectorAll('.cta-service').forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        e.preventDefault();
                        try {
                            Analytics.track('Service Interest', {
                                service: btn.dataset.service,
                                device_level: level
                            });
                        } catch (err) {
                            console.warn('Service tracking failed:', err);
                        }
                    });
                });

                // Initialize onboarding for new users
                const onboarding = new OnboardingGuide();
                setTimeout(() => onboarding.start(), 2000);

                window.profiler?.end('initialization');
                window.debugPanel?.log('info', 'System initialized successfully', { 
                    level, 
                    timestamp: new Date().toISOString() 
                });

                console.info(`TechRix initialized: ${level} mode`);

            } catch (error) {
                console.error('Critical initialization error:', error);
                
                // Fallback mode - disable all advanced features
                document.documentElement.classList.add('fallback-mode');
                document.documentElement.style.setProperty('--glass-blur-primary', '0px');
                document.documentElement.style.setProperty('--glass-blur-secondary', '0px');
                
                // Show user-friendly error message
                const errorNotice = document.createElement('div');
                errorNotice.innerHTML = `
                    <div style="position: fixed; top: 20px; left: 50%; transform: translateX(-50%); background: #ff4444; color: white; padding: 15px 20px; border-radius: 8px; z-index: 10000; font-family: system-ui;">
                        <strong>Notice:</strong> Advanced features disabled due to compatibility issues. Basic functionality is still available.
                        <button onclick="this.parentElement.remove()" style="background: none; border: none; color: white; margin-left: 10px; cursor: pointer;">×</button>
                    </div>
                `;
                document.body.appendChild(errorNotice);
                
                // Remove error notice after 10 seconds
                setTimeout(() => {
                    if (errorNotice.parentElement) {
                        errorNotice.remove();
                    }
                }, 10000);
            }
        });

        // Web Vitals monitoring (simplified)
        function observeWebVitals() {
            // Largest Contentful Paint
            if ('PerformanceObserver' in window) {
                const observer = new PerformanceObserver((list) => {
                    const entries = list.getEntries();
                    const lastEntry = entries[entries.length - 1];
                    Analytics.track('Web Vital', {
                        name: 'LCP',
                        value: lastEntry.startTime
                    });
                });
                observer.observe({ entryTypes: ['largest-contentful-paint'] });
            }

            // Cumulative Layout Shift
            let cumulativeLayoutShiftScore = 0;
            const observer = new PerformanceObserver((list) => {
                for (const entry of list.getEntries()) {
                    if (!entry.hadRecentInput) {
                        cumulativeLayoutShiftScore += entry.value;
                    }
                }
            });
            observer.observe({ type: 'layout-shift', buffered: true });

            // Report CLS on page unload
            window.addEventListener('beforeunload', () => {
                Analytics.track('Web Vital', {
                    name: 'CLS',
                    value: cumulativeLayoutShiftScore
                });
            });
        }

        // Initialize web vitals monitoring
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', observeWebVitals);
        } else {
            observeWebVitals();
        }
    </script>
</body>
</html>