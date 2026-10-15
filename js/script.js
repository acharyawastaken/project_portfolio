/* === SVG Icons === */
const ico = {
    brain: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A5.5 5.5 0 0 0 4 7.5c0 1.09.32 2.1.86 2.96A5.5 5.5 0 0 0 7.5 22h1A5.5 5.5 0 0 0 14 18.64a5.5 5.5 0 0 0 2.5.86h1a5.5 5.5 0 0 0 2.64-10.33c.54-.87.86-1.88.86-2.97A5.5 5.5 0 0 0 15.5 2a5.5 5.5 0 0 0-3 .89A5.5 5.5 0 0 0 9.5 2z"/></svg>',
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
    zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
    bar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
    bot: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" y1="16" x2="8" y2="16"/><line x1="16" y1="16" x2="16" y2="16"/></svg>',
    puzzle: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.315 8.685a.98.98 0 0 1 .837-.276c.47.07.802.48.968.925a2.501 2.501 0 1 0 3.214-3.214c-.446-.166-.855-.497-.925-.968a.979.979 0 0 1 .276-.837l1.61-1.61a2.404 2.404 0 0 1 1.705-.707c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02z"/></svg>',
    db: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>',
    globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.21 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.36-1.333-1.722-1.333-1.722-1.089-.73.083-.716.083-.716 1.205.083 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.98.108-.763.418-1.282.762-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0 1 12 6.803c1.02.005 2.047.135 3.004.397 2.277-1.523 3.275-1.209 3.275-1.209.652 1.623.243 2.822.12 3.12.765.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.528-5.475 5.818.43.364.823 1.084.823 2.184 0 1.576-.015 2.846-.015 3.232 0 .316.216.683.825.567C20.565 21.917 24 17.497 24 12.292 24 5.78 18.627.5 12 .5z"/></svg>'
};

/* === SKILLS (Icon Grid) === */
const skills = [
    { name: "Python", icon: ico.code, thought: "Ah, Python. Where whitespace matters more than my own opinions." },
    { name: "FastAPI", icon: ico.zap, thought: "Because I like my APIs like I like my coffee—fast, async, and heavily typed." },
    { name: "React", icon: ico.globe, thought: "I learned this so I could write HTML inside JavaScript inside HTML. Brilliant." },
    { name: "Node.js", icon: ico.db, thought: "Single-threaded chaos that somehow runs the entire internet. I'm here for it." },
    { name: "LangChain", icon: ico.brain, thought: "Gluing LLMs together until they hallucinate something actually useful." },
    { name: "Hugging Face", icon: ico.brain, thought: "Because training models from scratch is for people with too much GPU money." },
    { name: "FAISS", icon: ico.search, thought: "Turning words into numbers and finding the closest numbers. Basically magic." },
    { name: "AWS", icon: ico.cloud, thought: "I learned AWS just to understand my $0.02 monthly billing statements." },
    { name: "Docker", icon: ico.db, thought: "'It works on my machine'... and now it works on yours too. Magic." },
    { name: "PostgreSQL", icon: ico.db, thought: "Because NoSQL is fun until you need actual, reliable relationships." },
    { name: "MongoDB", icon: ico.db, thought: "For when schemas are too stressful and I just want to dump objects somewhere." },
    { name: "n8n", icon: ico.zap, thought: "Visual scripting so I can pretend I'm not writing code while automating my life." },
    { name: "GitHub", icon: ico.github, thought: "I finally learned how to exit Vim without restarting my computer." }
];

/* === PROJECTS === */
const rotations = ["rotate-n1", "rotate-p1", "rotate-n2"];

const projects = {
    fullstack: [
        { name: "SaaS Platform", icon: ico.code, desc: "A platform with auth and billing so good, you'll want to charge yourself.", color: "amber", tech: ["React", "Node.js", "FastAPI", "PostgreSQL"], thought: "Building auth from scratch again because I clearly don't respect my own time.", github: "https://github.com/acharyawastaken/" },
        { name: "Scalable MERN App", icon: ico.globe, desc: "It scales. It has AI. It's fully buzzword compliant.", color: "purple", tech: ["MERN", "FastAPI", "Docker", "Redis"], thought: "I used Mongo because writing SQL migrations sounded too much like actual work.", github: "https://github.com/acharyawastaken/" },
        { name: "AI Support Assistant", icon: ico.bot, desc: "A bot that won't make your customers want to scream 'REPRESENTATIVE!'", color: "blue", tech: ["FastAPI", "Redis", "React", "WebSockets"], thought: "Replaced the customer support team with an API endpoint. You're welcome.", github: "https://github.com/acharyawastaken/" },
    ],
    ai: [
        { name: "RAG AI Chatbot", icon: ico.brain, desc: "Because scrolling through PDFs is so 2010. Let the AI do the reading.", color: "blue", tech: ["LangChain", "FAISS", "FastAPI", "OpenAI"], featured: true, thought: "Chunks documents, embeds them, then hallucinates anyway. 10/10.", github: "https://github.com/acharyawastaken/" },
        { name: "Document Intelligence", icon: ico.search, desc: "Finding the needle in the haystack, even if the haystack is a terabyte of text.", color: "purple", tech: ["LangChain", "Hugging Face", "FastAPI"], thought: "Turns out regex was too hard, so I trained a 7-billion parameter model instead.", github: "https://github.com/acharyawastaken/" },
        { name: "n8n Automation", icon: ico.zap, desc: "I automated my automations. Now I just sit here and watch it work.", color: "amber", tech: ["n8n", "REST APIs", "OpenAI"], thought: "If I spend 10 hours automating a 5-minute task, that's called 'engineering'.", github: "https://github.com/acharyawastaken/" },
        { name: "Chrome Research AI", icon: ico.puzzle, desc: "An AI in your browser. Like having a very smart, very tiny assistant.", color: "blue", tech: ["Chrome APIs", "LangChain", "React"], thought: "Now Google isn't the only one reading my search history.", github: "https://github.com/acharyawastaken/" },
    ],
    data: [
        { name: "ML Prediction System", icon: ico.bar, desc: "Predicting the future with math, because my crystal ball broke.", color: "purple", tech: ["Scikit-learn", "Pandas", "React", "D3.js"], thought: "Linear regression in a trench coat masquerading as AI.", github: "https://github.com/acharyawastaken/" },
        { name: "ETL & Reporting", icon: ico.db, desc: "Cleaning data so you don't have to look at the mess.", color: "amber", tech: ["Pandas", "PostgreSQL", "Power BI"], thought: "80% cleaning CSV files, 20% complaining about dates in Excel.", github: "https://github.com/acharyawastaken/" },
    ]
};

/* === SERVICES === */
const services = [
    { emoji: "🤖", text: "AI-powered application development", tagline: "Because regular apps weren't complicated enough." },
    { emoji: "🔗", text: "RAG pipeline & AI workflow integrations", tagline: "Stuffing PDFs into LLMs so you don't have to read them." },
    { emoji: "🌐", text: "Full-stack web application development", tagline: "Centering divs and blaming the database since 2021." },
    { emoji: "⚡", text: "MERN & FastAPI backend systems", tagline: "I write APIs that return 200 OK even when everything is on fire." },
    { emoji: "🔄", text: "Automation workflows using n8n", tagline: "Putting myself out of a job, one node at a time." },
    { emoji: "📊", text: "Data cleaning & analytics solutions", tagline: "Turning your chaotic spreadsheets into slightly less chaotic charts." },
    { emoji: "🔌", text: "REST API development & integrations", tagline: "Making two completely different computers talk without fighting." },
    { emoji: "💬", text: "AI chatbot & document intelligence systems", tagline: "Teaching computers to sound like humans (the polite ones, mostly)." },
    { emoji: "📈", text: "Machine learning & predictive analytics", tagline: "Predicting the future with math, because my crystal ball broke." },
    { emoji: "🎬", text: "Digital content & media enhancement", tagline: "Making pixels look pretty with the magic of algorithms." }
];

/* === RENDER SKILLS === */
function renderSkills() {
    const g = document.getElementById("skills-grid"); if (!g) return;
    g.innerHTML = skills.map((s, i) => `
        <div class="icon-grid-item reveal" style="transition-delay: ${(i % 6) * 0.08}s">
            <div class="icon-box" aria-label="${s.name}" data-magnetic="true">
                ${s.icon}
                <span class="icon-name">${s.name}</span>
                <div class="thought-bubble">${s.thought}</div>
            </div>
        </div>`).join("");
}

function createProjectCard(p, i, domain) {
    const rot = rotations[i % 3];
    return `
    <div class="project-card ${rot} reveal">
        <div class="project-card-bg"></div>
        <div class="project-card-body">
        ${p.featured ? '<div class="project-badge">Featured!</div>' : ""}
        <div class="project-icon project-icon--${p.color}">${p.icon}</div>
        <h3 class="project-name">${p.name}</h3>
        <p class="project-desc">${p.desc}</p>
        <ul class="project-tech">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
        <button onclick="openProjectModal('${domain}', ${i})" class="project-btn ${p.featured ? "project-btn--featured" : ""}">View Details</button>
        </div>
    </div>`;
}

function openProjectModal(domain, index) {
    const p = projects[domain][index];
    document.getElementById("modal-title").innerText = p.name;
    
    const thoughtEl = document.getElementById("modal-thought");
    const thoughtText = p.thought || "I built this to avoid touching grass.";
    thoughtEl.innerHTML = '<span class="typewriter-text"></span><span class="typewriter-cursor"></span>';
    
    const textSpan = thoughtEl.querySelector('.typewriter-text');
    if (window.typewriterInterval) clearInterval(window.typewriterInterval);
    
    let charIndex = 0;
    // Add a slight delay before typing starts for a better effect
    setTimeout(() => {
        window.typewriterInterval = setInterval(() => {
            if (charIndex < thoughtText.length) {
                textSpan.textContent += thoughtText.charAt(charIndex);
                charIndex++;
            } else {
                clearInterval(window.typewriterInterval);
            }
        }, 25);
    }, 300);

    document.getElementById("modal-tech").innerHTML = p.tech.map(t => `<li>${t}</li>`).join("");
    document.getElementById("modal-github").href = p.github || "#";
    
    const modal = document.getElementById("project-modal");
    if(modal) {
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }
}

function closeProjectModal() {
    const modal = document.getElementById("project-modal");
    if(modal) {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }
}

function renderProjects() {
    const fs = document.getElementById("projects-fullstack");
    const ai = document.getElementById("projects-ai");
    const ds = document.getElementById("projects-data");
    if (fs) fs.innerHTML = projects.fullstack.map((p, i) => createProjectCard(p, i, 'fullstack')).join("");
    if (ai) ai.innerHTML = projects.ai.map((p, i) => createProjectCard(p, i, 'ai')).join("");
    if (ds) ds.innerHTML = projects.data.map((p, i) => createProjectCard(p, i, 'data')).join("");

    // Setup domain click logic
    const selectionView = document.getElementById('domain-selection');
    const domainCards = document.querySelectorAll('.domain-card');
    const backBtns = document.querySelectorAll('.back-to-domains');

    domainCards.forEach(card => {
        card.addEventListener('click', () => {
            const domainKey = card.getAttribute('data-domain');
            selectionView.style.display = 'none';
            document.getElementById(`projects-view-${domainKey}`).style.display = 'block';

            // Re-trigger reveal observer for newly visible items
            initReveal();
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.domain-projects').forEach(el => el.style.display = 'none');
            selectionView.style.display = 'grid';
        });
    });
}

/* === RENDER SERVICES === */
function renderServices() {
    const g = document.getElementById("services-grid"); if (!g) return;
    g.innerHTML = services.map(s => `
        <div class="service-item reveal">
        <div class="service-item-bg"></div>
        <div class="service-item-body">
            <span class="service-emoji">${s.emoji}</span>
            <span class="service-text" style="font-weight: 600;">${s.text}</span>
        </div>
        <div class="thought-bubble" style="bottom: calc(100% + 5px); z-index: 100;">${s.tagline}</div>
        </div>`).join("");
}

/* === REVEAL === */
function initReveal() {
    const els = document.querySelectorAll(".reveal:not(.visible)"); if (!els.length) return;
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); } });
    }, { threshold: .1 });
    els.forEach(el => obs.observe(el));
}

/* === NAVBAR === */
function initNavbar() {
    const nav = document.getElementById("navbar");
    const ham = document.getElementById("nav-hamburger");
    const links = document.querySelector(".nav-links");
    if (nav) window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 40));
    if (ham && links) {
        ham.addEventListener("click", () => links.classList.toggle("open"));
        links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
    }
}

/* === SPLASH === */
function initSplash() {
    const s = document.getElementById("splash"); if (!s) return;
    setTimeout(() => s.classList.add("hide"), 3200);
    s.addEventListener("transitionend", () => s.remove());
}

/* === TOAST NOTIFICATIONS === */
const toastMessages = [
    "hello , thank you for really seeing my work !!",
    "wow, you're still scrolling? I'm flattered!..",
    "fun fact: this site was built with 90% caffeine lmao",
    "hire me before the AI takes over!!!",
    "did you notice the floating doodles?hmm??",
    "scrolling is a great thumb workout :D"
];

function triggerToast() {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const msg = toastMessages[Math.floor(Math.random() * toastMessages.length)];
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>👋</span> <div>${msg}</div>`;

    container.appendChild(toast);

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.add("show");
    });

    // Remove after 5s
    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 500);
    }, 5000);
}

/* === MAGNETIC CURSOR === */
function initMagneticCursor() {
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) return;
    if (typeof gsap === 'undefined') return;
    const cursorEl = document.getElementById('magnetic-cursor');
    if (!cursorEl) return;
    gsap.set(cursorEl, { xPercent: -50, yPercent: -50 });
    let pos = { current: { x: -100, y: -100 }, target: { x: -100, y: -100 }, previous: { x: -100, y: -100 } };
    let isHovered = false; let isDetaching = false;
    const config = { magneticFactor: 0.2, speedMultiplier: 0.02, maxScaleX: 1, maxScaleY: 0.3, cursorSize: 24, lerpAmount: 0.1, hoverPadding: 12 };
    const update = () => {
        if (isHovered) return;
        pos.current.x += (pos.target.x - pos.current.x) * config.lerpAmount;
        pos.current.y += (pos.target.y - pos.current.y) * config.lerpAmount;
        const deltaX = pos.current.x - pos.previous.x; const deltaY = pos.current.y - pos.previous.y;
        pos.previous.x = pos.current.x; pos.previous.y = pos.current.y;
        if (isDetaching) {
            gsap.set(cursorEl, { x: pos.current.x, y: pos.current.y, scaleX: 1, scaleY: 1, rotate: 0, overwrite: 'auto' });
        } else {
            const speed = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * config.speedMultiplier;
            gsap.set(cursorEl, {
                x: pos.current.x, y: pos.current.y,
                rotate: Math.atan2(deltaY, deltaX) * (180 / Math.PI),
                scaleX: 1 + Math.min(speed, config.maxScaleX), scaleY: 1 - Math.min(speed, config.maxScaleY),
                overwrite: 'auto'
            });
        }
    };
    gsap.ticker.add(update);
    window.addEventListener('pointermove', (e) => {
        pos.target.x = e.clientX; pos.target.y = e.clientY;
        gsap.to(cursorEl, { opacity: 1, duration: 0.2, overwrite: 'auto' });
        const target = e.target;
        const isTextContent = ['P', 'SPAN', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName) || window.getComputedStyle(target).cursor === 'text';
        if (isTextContent && !isHovered && !isDetaching) {
            gsap.to(cursorEl, { scaleX: 0.5, scaleY: 1.5, duration: 0.3, overwrite: 'auto' });
        }
    });
    document.addEventListener('mouseleave', () => gsap.to(cursorEl, { opacity: 0, duration: 0.3 }));
    document.addEventListener('mouseenter', () => gsap.to(cursorEl, { opacity: 1, duration: 0.3 }));
    document.querySelectorAll('a, button').forEach(el => el.setAttribute('data-magnetic', 'true'));
    document.querySelectorAll('[data-magnetic]').forEach(el => {
        const xTo = gsap.quickTo(el, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        const yTo = gsap.quickTo(el, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
        el.addEventListener('pointerenter', () => {
            isHovered = true; isDetaching = false;
            const bounds = el.getBoundingClientRect();
            const computedStyle = window.getComputedStyle(el);
            const dynamicPadding = config.hoverPadding * (1 + config.magneticFactor);
            const centerX = bounds.left + bounds.width / 2; const centerY = bounds.top + bounds.height / 2;
            gsap.killTweensOf(cursorEl);
            gsap.to(cursorEl, {
                x: centerX, y: centerY, width: bounds.width + dynamicPadding * 2, height: bounds.height + dynamicPadding * 2,
                borderRadius: computedStyle.borderRadius, scaleX: 1, scaleY: 1, rotate: 0,
                duration: 0.3, ease: 'power3.out', overwrite: 'all'
            });
        });
        el.addEventListener('pointerleave', () => {
            const currentX = gsap.getProperty(cursorEl, "x"); const currentY = gsap.getProperty(cursorEl, "y");
            pos.current.x = currentX; pos.current.y = currentY;
            pos.previous.x = currentX; pos.previous.y = currentY;
            isHovered = false; isDetaching = true;
            gsap.killTweensOf(cursorEl);
            gsap.to(cursorEl, {
                width: config.cursorSize, height: config.cursorSize, borderRadius: '50%', scaleX: 1, scaleY: 1,
                duration: 0.35, ease: 'power3.out', overwrite: 'all', onComplete: () => { isDetaching = false; }
            });
        });
        el.addEventListener('pointermove', (e) => {
            const { clientX, clientY } = e; const { height, width, left, top } = el.getBoundingClientRect();
            xTo((clientX - (left + width / 2)) * config.magneticFactor);
            yTo((clientY - (top + height / 2)) * config.magneticFactor);
        });
        el.addEventListener('pointerout', () => { xTo(0); yTo(0); });
    });
}

/* === TOAST NOTIFICATIONS === */
const toastMessages = [
    { msg: "Acharya is probably centering a div right now.", icon: "🎨" },
    { msg: "Full-Stack Architecture: AWS S3 + Amazon EC2.", icon: "☁️" },
    { msg: "FastAPI server with Swagger interactive docs on /docs.", icon: "⚡" },
    { msg: "S3 static website hosting is completely serverless.", icon: "💡" },
    { msg: "Feel free to say hi via the contact page!", icon: "📬" }
];

let toastIndex = 0;
function triggerToast(customMsg, customIcon) {
    const container = document.getElementById("toast-container");
    if (!container) return;

    const toastData = customMsg 
        ? { msg: customMsg, icon: customIcon || "✨" }
        : toastMessages[toastIndex++ % toastMessages.length];

    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${toastData.icon}</span><p>${toastData.msg}</p>`;
    container.appendChild(toast);

    setTimeout(() => toast.classList.add("show"), 50);

    setTimeout(() => {
        toast.classList.remove("show");
        setTimeout(() => toast.remove(), 600);
    }, 4500);
}

/* === CLOUD BACKEND INTEGRATION === */
async function initCloudStatus() {
    const pill = document.getElementById("cloud-pill");
    const dot = document.getElementById("cloud-pill-dot");
    const text = document.getElementById("cloud-pill-text");
    if (!pill) return;

    const apiBase = (typeof CONFIG !== 'undefined' && CONFIG.BASE_URL) ? CONFIG.BASE_URL : (typeof BASE_URL !== 'undefined' ? BASE_URL : "http://localhost:8000");

    let statusDetails = "Frontend on AWS S3 / Connecting to backend...";

    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);
        const res = await fetch(`${apiBase}/api/health`, { signal: controller.signal });
        clearTimeout(timeoutId);

        if (res.ok) {
            dot.style.background = "#22c55e"; // Green
            text.textContent = "EC2 API: Online";
            pill.style.borderColor = "#22c55e";
            statusDetails = "Connected to AWS EC2 FastAPI Backend on port 8000!";
            
            // Record page visit
            try {
                fetch(`${apiBase}/api/visit`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ page: "home" })
                });
            } catch (e) {}

            pill.onclick = () => triggerToast(statusDetails, "🟢");
            return;
        }
    } catch (e) {
        // Backend offline / not reachable yet
    }

    dot.style.background = "#a1a1aa"; // Gray
    text.textContent = "S3 Static Mode";
    statusDetails = "Frontend hosted serverless on AWS S3. Launch EC2 backend to connect live APIs.";
    pill.onclick = () => triggerToast(statusDetails, "☁️");
}

/* === BOOT === */
document.addEventListener("DOMContentLoaded", () => {
    initSplash();
    renderSkills();
    renderProjects();
    renderServices();
    initNavbar();
    initCloudStatus();

    setTimeout(initReveal, 2500);
    setTimeout(initMagneticCursor, 500);

    // Initial toast after loading splash completes
    setTimeout(() => triggerToast("Welcome to Acharya's Portfolio!", "👋"), 3500);

    // Start periodic toasts every 30 seconds
    setInterval(triggerToast, 30000);
});
