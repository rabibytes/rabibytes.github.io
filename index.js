// --- Translation Dictionary ---
const translations = {
    en: {
        "nav-home": "Home",
        "nav-videos": "Videos",
        "nav-about": "About",
        "nav-connect": "Connect",
        "hero-title": "Practical <span class='text-primary'>Tech Knowledge</span>",
        "hero-sub": "Exploring <span class='text-highlight'>technology</span>, <span class='text-highlight'>coding</span>, <span class='text-highlight'>software development</span>, and <span class='text-highlight'>real-life experience</span>.",
        "btn-subscribe": "Subscribe",
        "section-latest": "Latest <span class='text-accent'>Content</span>",
        "section-meet": "Meet the <span class='text-primary'>Host</span>",
        "badge-host": "Host & Presenter",
        "host-name": "Rabi Ibrahim",
        "host-role": "Software Engineer & Content Creator",
        "bio-1": "Welcome to RabiBytes! I'm a passionate software engineer who views engineering not just as a job, but as a craft.",
        "bio-2": "My mission is to bridge the gap between academic theory and real-world, high-scale production systems. Focused on empowering the Arabic tech region, I break down complex concepts into digestible, byte-sized lessons to help you master the art of software development.",
        "btn-portfolio": "Visit Portfolio",
        "btn-linkedin": "Connect on LinkedIn",
        "btn-back": "Back to Content",
        "footer-copyright": "&copy; 2026 RabiBytes. All rights reserved.",
        "footer-desc": "Bridging the gap between academic theory and real-world production systems.",
        "footer-links": "Quick Links",
        "footer-resources": "Resources",
        "footer-github": "GitHub Repos",
        "footer-made": "Crafted with &hearts; for the Tech Community",
        "lang-btn-text": "عربي"
    },
    ar: {
        "nav-home": "الرئيسية",
        "nav-videos": "فيديوهات",
        "nav-about": "نبذة عني",
        "nav-connect": "تواصل",
        "hero-title": "معرفة تقنية <span class='text-primary'>عملية</span>",
        "hero-sub": "استكشاف <span class='text-highlight'>التكنولوجيا</span>، <span class='text-highlight'>البرمجة</span>، <span class='text-highlight'>تطوير البرمجيات</span>، و <span class='text-highlight'>الخبرات الواقعية</span>.",
        "btn-subscribe": "اشترك الآن",
        "section-latest": "أحدث <span class='text-accent'>المحتوى</span>",
        "section-meet": "تعرف على <span class='text-primary'>المضيف</span>",
        "badge-host": "مضيف ومقدم",
        "host-name": "ربيع إبراهيم",
        "host-role": "مهندس برمجيات وصانع محتوى",
        "bio-1": "أهلاً بك في RabiBytes! أنا مهندس برمجيات شغوف أرى الهندسة ليست مجرد وظيفة، بل حرفة وإتقان.",
        "bio-2": "مهمتي هي سد الفجوة بين النظريات الأكاديمية وأنظمة الإنتاج الواقعية عالية الأداء. مع التركيز على تمكين المجتمع التقني العربي، أقوم بتبسيط المفاهيم المعقدة إلى دروس قصيرة ومبسطة لمساعدتك على إتقان فن تطوير البرمجيات.",
        "btn-portfolio": "زيارة المعرض",
        "btn-linkedin": "تواصل عبر لينكد إن",
        "btn-back": "العودة للمحتوى",
        "footer-copyright": "&copy; 2026 RabiBytes. كل الحقوق محفوظة.",
        "footer-desc": "سد الفجوة بين النظريات الأكاديمية وأنظمة الإنتاج الواقعية.",
        "footer-links": "روابط سريعة",
        "footer-resources": "المصادر",
        "footer-github": "مستودعات GitHub",
        "footer-made": "صُنع بـ &hearts; للمجتمع التقني",
        "lang-btn-text": "English"
    }
};

// --- Content Database (Localized) ---

// 1. Gallery Items
const videos = [
    {
        // localized content
        title: {
            en: "How to Build & Host This Website",
            ar: "كيفية بناء واستضافة هذا الموقع"
        },
        description: {
            en: "A step-by-step tutorial on creating this portfolio with HTML, CSS, JS and hosting it on GitHub Pages.",
            ar: "شرح خطوة بخطوة لإنشاء هذا الموقع باستخدام HTML و CSS و JS واستضافته على GitHub Pages."
        },
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
        internalId: "build-website", 
        url: "#" 
    }
];

// 2. Blog Posts
// Note: For full blog translation, we'd need 'body' in both languages. 
// For this demo, I'm duplicating the object structure or just checking lang in logic.
const blogPosts = {
    "build-website": {
        date: { en: "October 26, 2025", ar: "26 أكتوبر 2025" },
        author: { en: "Rabi Ibrahim", ar: "ربيع إبراهيم" },
        image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1000&auto=format&fit=crop&q=80",
        
        // English Content
        en: {
            title: "How to Build & Host This Website",
            body: `
            <p>
                Have you ever wanted to create a sleek, professional portfolio or landing page but didn't know where to start? 
                In this tutorial, I'll walk you through exactly how I built the RabiBytes website using vanilla HTML, CSS, and JavaScript, 
                and how you can host it for free using GitHub Pages.
            </p>

            <h2>Step 1: Setting Up the Structure (HTML)</h2>
            <p>
                HTML (HyperText Markup Language) is the backbone of any website. For this project, we need a clean structure consisting of a 
                Header (navigation), a Main area (Hero, Gallery, About), and a Footer.
            </p>
            <pre><code>&lt;!-- A simple semantic structure --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;
    &lt;section id="hero"&gt;...&lt;/section&gt;
    &lt;section id="videos"&gt;...&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>

            <h2>Step 2: Styling with Modern CSS</h2>
            <p>
                To achieve the "Dark Tech" aesthetic, we use CSS Variables for color management and Flexbox/Grid for layout.
                Crucially, we use a mobile-first approach.
            </p>

            <h2>Step 3: Hosting on GitHub Pages</h2>
            <p>
                This is the best part—hosting is completely free!
            </p>
            <ol>
                <li>Create a GitHub account.</li>
                <li>Create a new repository named <code>username.github.io</code>.</li>
                <li>Upload your files.</li>
                <li>Go to <strong>Settings > Pages</strong> and ensure the source is set to the main branch.</li>
            </ol>
            `
        },
        // Arabic Content
        ar: {
            title: "كيفية بناء واستضافة هذا الموقع",
            body: `
            <p>
                هل أردت يومًا إنشاء محفظة أعمال أو صفحة هبوط احترافية ولكن لم تكن تعرف من أين تبدأ؟
                في هذا الدرس، سأشرح لك بالضبط كيف قمت ببناء موقع RabiBytes باستخدام HTML و CSS و JavaScript،
                وكيف يمكنك استضافته مجانًا باستخدام GitHub Pages.
            </p>

            <h2>الخطوة 1: إعداد الهيكل (HTML)</h2>
            <p>
                HTML هو العمود الفقري لأي موقع ويب. لهذا المشروع، نحتاج إلى هيكل نظيف يتكون من ترويسة (Header)، منطقة رئيسية (Main)، وتذييل (Footer).
            </p>
            <pre><code>&lt;!-- هيكل دلالي بسيط --&gt;
&lt;header&gt;...&lt;/header&gt;
&lt;main&gt;
    &lt;section id="hero"&gt;...&lt;/section&gt;
    &lt;section id="videos"&gt;...&lt;/section&gt;
&lt;/main&gt;
&lt;footer&gt;...&lt;/footer&gt;</code></pre>

            <h2>الخطوة 2: التصميم باستخدام CSS الحديث</h2>
            <p>
                لتحقيق جمالية "Dark Tech"، نستخدم متغيرات CSS لإدارة الألوان و Flexbox/Grid للتخطيط.
                والأهم من ذلك، نستخدم نهج "الجوال أولاً" (Mobile-first).
            </p>

            <h2>الخطوة 3: الاستضافة على GitHub Pages</h2>
            <p>
                هذا هو الجزء الأفضل - الاستضافة مجانية تمامًا!
            </p>
            <ol>
                <li>أنشئ حسابًا على GitHub.</li>
                <li>أنشئ مستودعًا جديدًا باسم <code>username.github.io</code>.</li>
                <li>ارفع ملفاتك.</li>
                <li>اذهب إلى <strong>Settings > Pages</strong> وتأكد من تعيين المصدر إلى الفرع الرئيسي.</li>
            </ol>
            `
        }
    }
};

// --- App Logic ---

const app = {
    // Current Language state
    lang: localStorage.getItem('rabi-lang') || 'en',

    init: () => {
        app.updateLanguage(app.lang); // Apply initial lang
        app.renderVideos();
        app.setupMobileMenu();
        app.setupNavigation();
        app.setupLanguageToggle();
        app.setupScrollToTop();
        app.initNetworkAnimation();
    },

    toggleLanguage: () => {
        app.lang = app.lang === 'en' ? 'ar' : 'en';
        localStorage.setItem('rabi-lang', app.lang);
        app.updateLanguage(app.lang);
        app.renderVideos(); // Re-render dynamic content
        
        // If viewing a blog post, reload it in new lang
        // This is a simplified check; usually we store currentView state
        const blogView = document.getElementById('blog-view');
        if (blogView && !blogView.classList.contains('hidden')) {
             const title = document.getElementById('blog-title').textContent;
             // Find ID by matching EN title (rough approach) or store currentPostId in app state
             // For safety, just go home or stay if possible.
             // Ideally: app.currentPostId would exist.
             if(app.currentPostId) app.renderBlog(app.currentPostId);
        }
    },

    updateLanguage: (lang) => {
        // 1. Set HTML dir and lang attributes
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // 2. Update all static text with data-i18n
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                // Use innerHTML to preserve spans inside translations
                el.innerHTML = translations[lang][key];
            }
        });

        // 3. Update Toggle Button Text
        const btnText = document.querySelector('#lang-toggle .lang-text');
        if (btnText) {
            btnText.textContent = translations[lang]['lang-btn-text'];
        }
    },

    setupLanguageToggle: () => {
        const btn = document.getElementById('lang-toggle');
        if (btn) {
            btn.addEventListener('click', app.toggleLanguage);
        }
    },

    setupScrollToTop: () => {
        const scrollBtn = document.getElementById('scroll-to-top');
        if (!scrollBtn) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
        });

        scrollBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    },

    // Renders the cards on the homepage
    renderVideos: () => {
        const gallery = document.getElementById('video-gallery');
        if (!gallery) return;

        gallery.innerHTML = videos.map(video => {
            const isInternal = !!video.internalId;
            const href = isInternal ? `#post-${video.internalId}` : video.url;
            const targetAttr = isInternal ? '' : 'target="_blank"'; 
            
            const iconClass = isInternal ? 'fa-file-lines' : 'fa-play'; 
            
            // RTL specific margin handling for icon is handled by CSS (margin-inline-start/end) 
            // but inline styles were used previously. Let's fix that.
            // Old: style="${iconStyle}". We remove inline style and rely on CSS/flex gap.
            
            const linkClass = isInternal ? 'video-card internal-link' : 'video-card';
            const dataId = isInternal ? `data-id="${video.internalId}"` : '';

            // Localized text
            const title = video.title[app.lang];
            const description = video.description[app.lang];

            return `
            <a href="${href}" ${targetAttr} class="${linkClass}" ${dataId}>
                <div class="video-thumbnail-wrapper">
                    <img src="${video.thumbnail}" alt="${title}" class="video-thumbnail" loading="lazy">
                    <div class="play-icon">
                        <i class="fas ${iconClass}"></i>
                    </div>
                </div>
                <div class="video-content">
                    <h3 class="video-title">${title}</h3>
                    <p class="video-description">${description}</p>
                </div>
            </a>
        `}).join('');
    },

    currentPostId: null,

    // Injects data into the generic blog template
    renderBlog: (id) => {
        const post = blogPosts[id];
        if (!post) return;

        app.currentPostId = id;

        // Localized Post Data
        const content = post[app.lang];
        const date = post.date[app.lang];
        const author = post.author[app.lang];

        // Fill elements
        document.getElementById('blog-title').textContent = content.title;
        document.getElementById('blog-date').textContent = date;
        document.getElementById('blog-author').textContent = author;
        document.getElementById('blog-body').innerHTML = content.body;

        // Handle Hero Image
        const heroImg = document.getElementById('blog-hero-image');
        if (post.image) {
            heroImg.src = post.image;
            heroImg.alt = content.title;
            heroImg.classList.remove('hidden');
        } else {
            heroImg.classList.add('hidden');
        }

        app.showBlogView();
    },

    showHomeView: () => {
        document.getElementById('home-view').classList.remove('hidden');
        document.getElementById('blog-view').classList.add('hidden');
        app.currentPostId = null;
    },

    showBlogView: () => {
        document.getElementById('home-view').classList.add('hidden');
        document.getElementById('blog-view').classList.remove('hidden');
        window.scrollTo(0, 0);
    },

    setupNavigation: () => {
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.addEventListener('click', () => {
                app.showHomeView();
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        document.addEventListener('click', (e) => {
            const card = e.target.closest('.internal-link');
            if (card) {
                e.preventDefault();
                const id = card.getAttribute('data-id');
                app.renderBlog(id);
            }

            const backBtn = e.target.closest('.back-link-action');
            if (backBtn) {
                e.preventDefault();
                app.showHomeView();
                const gallery = document.getElementById('videos');
                if(gallery) gallery.scrollIntoView({ behavior: 'smooth' });
            }

            const navLink = e.target.closest('.nav-link');
            if (navLink) {
                e.preventDefault(); 
                app.showHomeView();
                const targetId = navLink.getAttribute('href');
                if (targetId && targetId !== '#') {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({ behavior: 'smooth' });
                    }
                } else if (targetId === '#home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }
                
                const navMenu = document.querySelector('.nav-menu');
                const hamburgerIcon = document.querySelector('.hamburger i');
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    hamburgerIcon.classList.remove('fa-times');
                    hamburgerIcon.classList.add('fa-bars');
                }
            }
        });
    },

    setupMobileMenu: () => {
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');

        if (hamburger && navMenu) {
            hamburger.addEventListener('click', (e) => {
                e.stopPropagation();
                navMenu.classList.toggle('active');
                const icon = hamburger.querySelector('i');
                if (navMenu.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        }
    },

    initNetworkAnimation: () => {
        const canvas = document.getElementById('network-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let width, height;
        let particles = [];

        // Optimization: Reduce particle density on smaller screens
        const getParticleCount = () => window.innerWidth < 768 ? 35 : 80;
        const connectionDistance = 150; 
        const primaryColorRGB = '14, 165, 233'; 
        
        // Optimization: Throttle frame rate to ~30 FPS
        const targetFPS = 30;
        const frameInterval = 1000 / targetFPS;
        let lastDrawTime = 0;

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.5; 
                this.vy = (Math.random() - 0.5) * 0.5; 
                this.size = Math.random() * 2 + 1;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;
                
                // Bounce off edges
                if (this.x < 0 || this.x > width) this.vx *= -1;
                if (this.y < 0 || this.y > height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, 0.5)`;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            const count = getParticleCount();
            for (let i = 0; i < count; i++) {
                particles.push(new Particle());
            }
        };

        const animate = (timestamp) => {
            requestAnimationFrame(animate);

            // Throttle FPS
            const elapsed = timestamp - lastDrawTime;
            if (elapsed < frameInterval) return;

            lastDrawTime = timestamp - (elapsed % frameInterval);

            ctx.clearRect(0, 0, width, height);
            
            // Use for loops for better performance
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.update();
                p.draw();
                
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    
                    // Quick bounding box check to avoid expensive sqrt
                    if (Math.abs(dx) > connectionDistance || Math.abs(dy) > connectionDistance) continue;

                    const distanceSq = dx * dx + dy * dy;
                    const connectionDistanceSq = connectionDistance * connectionDistance;

                    if (distanceSq < connectionDistanceSq) {
                        const distance = Math.sqrt(distanceSq);
                        const opacity = 1 - (distance / connectionDistance);
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(${primaryColorRGB}, ${opacity * 0.4})`; 
                        ctx.lineWidth = 1;
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Debounce Resize
        let resizeTimeout;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeout);
            resizeTimeout = setTimeout(resize, 200);
        });
        
        // Init
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        initParticles();
        requestAnimationFrame(animate);
    }
};

document.addEventListener('DOMContentLoaded', app.init);