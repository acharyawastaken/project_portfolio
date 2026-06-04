/* === MAGNETIC CURSOR (Copied from script.js) === */
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

// Character Logic
document.addEventListener("DOMContentLoaded", () => {
    initMagneticCursor();

    const eyes = document.querySelectorAll('.eye');
    const msgInput = document.getElementById('message');
    
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let isTypingMessage = false;
    let isPeeking = false;

    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        updatePositions();
    });

    // Peeking logic
    msgInput.addEventListener('focus', () => {
        isTypingMessage = true;
        updatePositions();
        startPeeking();
    });
    msgInput.addEventListener('blur', () => {
        isTypingMessage = false;
        stopPeeking();
        updatePositions();
    });
    
    let peekInterval;
    function startPeeking() {
        if(peekInterval) clearInterval(peekInterval);
        const schedulePeek = () => {
            peekInterval = setTimeout(() => {
                isPeeking = true;
                updatePositions();
                setTimeout(() => {
                    isPeeking = false;
                    updatePositions();
                    schedulePeek();
                }, 1000); // look at the text box for 1 second
            }, Math.random() * 3000 + 2000);
        };
        schedulePeek();
    }
    function stopPeeking() {
        if(peekInterval) clearTimeout(peekInterval);
        isPeeking = false;
    }

    // Blinking logic for purple and black
    function setupBlink(containerId) {
        const eyeEls = document.querySelectorAll(`#${containerId} .eye`);
        const scheduleBlink = () => {
            setTimeout(() => {
                eyeEls.forEach(eye => eye.classList.add('blink'));
                setTimeout(() => {
                    eyeEls.forEach(eye => eye.classList.remove('blink'));
                    scheduleBlink();
                }, 150);
            }, Math.random() * 4000 + 3000);
        };
        scheduleBlink();
    }
    setupBlink('eyes-purple');
    setupBlink('eyes-black');

    const chars = {
        purple: { el: document.getElementById('c-purple') },
        black: { el: document.getElementById('c-black') },
        orange: { el: document.getElementById('c-orange') },
        yellow: { el: document.getElementById('c-yellow') },
    };

    function updatePositions() {
        // Calculate pupil position for each eye
        eyes.forEach(eye => {
            const pupil = eye.querySelector('.pupil');
            if(!pupil) return;
            
            const maxDistance = parseFloat(eye.getAttribute('data-maxdist') || '5');
            let pupilX = 0;
            let pupilY = 0;

            if (isTypingMessage) {
                if (isPeeking) {
                    // Look to the right at the text box
                    pupilX = maxDistance;
                    pupilY = 0;
                } else {
                    // Look away (left and down)
                    pupilX = -maxDistance;
                    pupilY = maxDistance;
                }
            } else {
                // Track mouse
                const rect = eye.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                
                const deltaX = mouseX - centerX;
                const deltaY = mouseY - centerY;
                const distance = Math.min(Math.sqrt(deltaX ** 2 + deltaY ** 2), maxDistance);
                const angle = Math.atan2(deltaY, deltaX);
                
                pupilX = Math.cos(angle) * distance;
                pupilY = Math.sin(angle) * distance;
            }
            
            pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
        });

        // Calculate character body lean
        Object.keys(chars).forEach(key => {
            const char = chars[key];
            if(!char.el) return;
            
            const rect = char.el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const deltaX = mouseX - centerX;
            
            let bodySkew = Math.max(-6, Math.min(6, -deltaX / 120));
            
            if (isTypingMessage) {
                if (isPeeking) {
                    bodySkew = -10; // Lean right towards form
                } else {
                    bodySkew = 8; // Lean away left
                }
            }
            
            char.el.style.transform = `skewX(${bodySkew}deg)`;
            
            // Move eyes container slightly based on face tracking
            const eyeContainer = document.getElementById(`eyes-${key}`);
            if(eyeContainer) {
                const faceX = isTypingMessage ? (isPeeking ? 12 : -12) : Math.max(-15, Math.min(15, deltaX / 20));
                eyeContainer.style.transform = `translateX(${faceX}px)`;
            }
            
            // Move yellow mouth
            if(key === 'yellow') {
                const mouth = document.getElementById('yellow-mouth');
                if(mouth) {
                    const faceX = isTypingMessage ? (isPeeking ? 12 : -12) : Math.max(-15, Math.min(15, deltaX / 20));
                    mouth.style.transform = `translateX(${faceX}px)`;
                }
            }
        });
        
        // Specific typing reaction for Purple
        if(chars.purple.el) {
            if(isTypingMessage) {
                chars.purple.el.style.height = '430px';
                chars.purple.el.style.transform = `skewX(${isPeeking ? -5 : 10}deg) translateX(${isPeeking ? 20 : 0}px)`;
            } else {
                chars.purple.el.style.height = '400px';
            }
        }
    }
    
    // Initial call
    updatePositions();

    // Textarea Character Counter & Sanitizer
    const charCountEl = document.getElementById('char-count');
    msgInput.addEventListener('input', (e) => {
        let text = e.target.value;
        // Basic sanitization: strip out < and >
        text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        
        if (text.length > 500) {
            text = text.substring(0, 500);
            e.target.value = text;
        }
        
        charCountEl.textContent = `${text.length}/500`;
        if (text.length >= 500) {
            charCountEl.style.color = "var(--red-500, red)";
        } else {
            charCountEl.style.color = "var(--zinc-500)";
        }
    });

    // EmailJS Setup
    // Initialize EmailJS with your Public Key
    emailjs.init("q8VbkeA2nt-tHaXye");

    const form = document.getElementById('message-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Rate Limiting Logic: 1 message per week
        const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;
        const lastSent = localStorage.getItem('lastMessageSent');
        if (lastSent && (Date.now() - parseInt(lastSent, 10)) < ONE_WEEK_MS) {
            alert('You have already sent a message recently. Please try again next week!');
            return;
        }

        const btn = form.querySelector('button[type="submit"]');
        const originalText = btn.textContent;
        btn.textContent = "Sending...";
        btn.style.opacity = "0.7";
        btn.style.pointerEvents = "none";

        const nameInput = document.getElementById('name').value;
        const emailInput = document.getElementById('email').value;
        const messageInput = msgInput.value;

        // Sanitize final values
        const sanitize = (str) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
        
        const templateParams = {
            from_name: sanitize(nameInput),
            reply_to: sanitize(emailInput),
            message: sanitize(messageInput)
        };

        // Note: Please configure your EmailJS account:
        // 1. Create account at https://www.emailjs.com/
        // 2. Connect your Gmail as a Service
        // 3. Create an Email Template with {{from_name}}, {{reply_to}}, and {{message}}
        // 4. Put your Template ID below, and your Public Key in emailjs.init above
        
        emailjs.send("service_3594", "template_zhxu1x1", templateParams)
            .then(function(response) {
                // Update local storage to enforce rate limit
                localStorage.setItem('lastMessageSent', Date.now().toString());
                
                alert('Message sent successfully!');
                form.reset();
                charCountEl.textContent = "0/500";
            }, function(error) {
                console.error("EmailJS error:", error);
                alert('Failed to send message. Please ensure Template ID is set in contact.js.');
            })
            .finally(function() {
                btn.textContent = originalText;
                btn.style.opacity = "1";
                btn.style.pointerEvents = "auto";
            });
    });
});

