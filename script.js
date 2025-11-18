// Classic GeoCities-style View Counter
function initViewCounter() {
    const counter = document.getElementById('view-counter');
    if (!counter) return;
    
    // Get current count from localStorage or start at a random 90s-era number
    let visitCount = parseInt(localStorage.getItem('emilyHenryVisitCount') || Math.floor(Math.random() * 50000 + 10000));
    visitCount++;
    localStorage.setItem('emilyHenryVisitCount', visitCount);
    
    // Display count with leading zeros for that classic look
    const paddedCount = visitCount.toString().padStart(6, '0');
    counter.textContent = paddedCount;
    
    // Animate the digits on load
    animateCounter(paddedCount);
}

function animateCounter(finalValue) {
    const counter = document.getElementById('view-counter');
    const digits = finalValue.split('');
    let currentDigits = ['0', '0', '0', '0', '0', '0'];
    
    digits.forEach((digit, index) => {
        setTimeout(() => {
            currentDigits[index] = digit;
            counter.textContent = currentDigits.join('');
        }, index * 100);
    });
}

// Mouse Trail Effect (Hearts)
let mouseTrailEnabled = true;
const hearts = ['💕', '💖', '💗', '💝', '💘', '💞'];

function createHeart(x, y) {
    if (!mouseTrailEnabled) return;
    
    const heart = document.createElement('div');
    heart.className = 'mouse-trail';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.style.opacity = '0';
        setTimeout(() => heart.remove(), 1000);
    }, 100);
}

// Konami Code Easter Egg
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiPosition = 0;

function checkKonamiCode(key) {
    if (key === konamiCode[konamiPosition]) {
        konamiPosition++;
        if (konamiPosition === konamiCode.length) {
            activateKonamiEasterEgg();
            konamiPosition = 0;
        }
    } else {
        konamiPosition = 0;
    }
}

function activateKonamiEasterEgg() {
    document.body.classList.add('party-mode');
    
    // Create confetti
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
    
    // Show secret message
    const message = document.createElement('div');
    message.className = 'konami-message';
    message.innerHTML = `
        <h1>🎊 PARTY MODE ACTIVATED! 🎊</h1>
        <p>You found the secret code!</p>
        <img src="https://web.archive.org/web/20090829170036/http://geocities.com/SoHo/Museum/1904/baby.gif" alt="Dancing Baby" style="width: 100px;">
    `;
    document.body.appendChild(message);
    
    setTimeout(() => {
        message.remove();
        document.body.classList.remove('party-mode');
    }, 5000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confetti.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(confetti);
    
    setTimeout(() => confetti.remove(), 3000);
}

// Under Construction GIF Random Appearance
function showUnderConstruction() {
    const underConstruction = document.getElementById('under-construction');
    if (!underConstruction || Math.random() > 0.1) return; // 10% chance
    
    underConstruction.style.display = 'block';
    setTimeout(() => {
        underConstruction.style.display = 'none';
    }, 3000);
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Initialize view counter
    initViewCounter();
    
    // Mouse trail effect
    let throttleTimer;
    document.addEventListener('mousemove', (e) => {
        if (throttleTimer) return;
        throttleTimer = setTimeout(() => {
            createHeart(e.clientX, e.clientY);
            throttleTimer = null;
        }, 50);
    });
    
    // Touch trail effect for mobile
    let touchThrottleTimer;
    let lastTouchTime = 0;
    
    document.addEventListener('touchmove', (e) => {
        if (touchThrottleTimer) return;
        
        const touch = e.touches[0];
        const currentTime = Date.now();
        
        // Slightly faster trail for touch to make it more visible
        touchThrottleTimer = setTimeout(() => {
            createHeart(touch.clientX, touch.clientY);
            touchThrottleTimer = null;
        }, 30);
        
        lastTouchTime = currentTime;
    });
    
    // Create hearts on touch start too
    document.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        createHeart(touch.clientX, touch.clientY);
    });
    
    // Konami code listener
    document.addEventListener('keydown', (e) => {
        checkKonamiCode(e.key);
    });
    
    // Random under construction appearance
    setInterval(showUnderConstruction, 30000); // Check every 30 seconds
});

