// ===== GET URL PARAMETER FOR NAME =====
function getNameFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('name') || 'ATHARVA';
}

// ===== SET NAME =====
const babyNameElement = document.getElementById('babyName');
if (babyNameElement) {
    babyNameElement.textContent = getNameFromURL().toUpperCase();
}

// ===== TYPED.JS ANIMATION =====
if (document.getElementById('typed')) {
    const typed = new Typed('#typed', {
        strings: [
            `Happy Birthday ${getNameFromURL()}! 🎉`,
            `You are 1 year old today! 🎂`,
            `Born on 2nd January 2025 ❤️`,
            `May your life be filled with joy, laughter and lots of love! 💖`,
            `Have a wonderful day with family! 👨‍👩‍👦`,
            `God bless you always! 🙏✨`,
            `May all your dreams come true! 🌟`,
            `You bring so much happiness to everyone! 😊`,
            `Stay healthy and blessed forever! 🎈`
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: '|'
    });
}

// ===== FLOATING BALLOONS ANIMATION =====
function createBalloons() {
    const container = document.getElementById('balloonsContainer');
    if (!container) return;
    
    const balloonEmojis = ['🎈', '🎈', '🎈', '🎈', '🎈'];
    const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange'];
    
    setInterval(() => {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        balloon.style.left = Math.random() * 100 + '%';
        balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        balloon.style.animationDelay = Math.random() * 2 + 's';
        
        container.appendChild(balloon);
        
        // Remove balloon after animation
        setTimeout(() => {
            balloon.remove();
        }, 17000);
    }, 2000);
}

createBalloons();

// ===== CONFETTI ANIMATION =====
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const confettiPieces = [];
    const colors = ['#ff6b9d', '#c44569', '#ffa726', '#42a5f5', '#66bb6a', '#ab47bc'];
    
    class ConfettiPiece {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height - canvas.height;
            this.width = Math.random() * 10 + 5;
            this.height = Math.random() * 10 + 5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
            this.rotation = Math.random() * 360;
            this.rotationSpeed = Math.random() * 10 - 5;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 + 2;
        }
        
        update() {
            this.y += this.speedY;
            this.x += this.speedX;
            this.rotation += this.rotationSpeed;
            
            if (this.y > canvas.height) {
                this.y = -20;
                this.x = Math.random() * canvas.width;
            }
        }
        
        draw() {
            ctx.save();
            ctx.translate(this.x, this.y);
            ctx.rotate(this.rotation * Math.PI / 180);
            ctx.fillStyle = this.color;
            ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
            ctx.restore();
        }
    }
    
    // Create 50 confetti pieces
    for (let i = 0; i < 50; i++) {
        confettiPieces.push(new ConfettiPiece());
    }
    
    function animateConfetti() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        confettiPieces.forEach(piece => {
            piece.update();
            piece.draw();
        });
        
        requestAnimationFrame(animateConfetti);
    }
    
    animateConfetti();
    
    // Resize canvas on window resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

createConfetti();

// ===== BACKGROUND MUSIC CONTROL =====
const musicBtn = document.getElementById('musicBtn');
const bgMusic = document.getElementById('bgMusic');
const musicIcon = document.getElementById('musicIcon');
let isPlaying = false;

if (musicBtn && bgMusic) {
    musicBtn.addEventListener('click', () => {
        if (isPlaying) {
            bgMusic.pause();
            musicIcon.textContent = '🎵';
            isPlaying = false;
        } else {
            bgMusic.play().catch(err => {
                console.log('Auto-play prevented. User interaction required.');
            });
            musicIcon.textContent = '🔇';
            isPlaying = true;
        }
    });
    
    // Try to autoplay (may be blocked by browser)
    setTimeout(() => {
        bgMusic.play().then(() => {
            musicIcon.textContent = '🔇';
            isPlaying = true;
        }).catch(err => {
            console.log('Auto-play prevented. Click music button to play.');
        });
    }, 1000);
}

// ===== LIGHTBOX FOR GALLERY =====
const photoWrappers = document.querySelectorAll('.photo-wrapper');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxCaption = document.getElementById('lightboxCaption');

if (photoWrappers.length > 0 && lightbox) {
    photoWrappers.forEach((wrapper, index) => {
        wrapper.addEventListener('click', () => {
            const img = wrapper.querySelector('.gallery-img');
            const label = wrapper.nextElementSibling;
            
            lightboxImg.src = img.src;
            lightboxCaption.textContent = label.textContent;
            lightbox.classList.add('active');
        });
    });
    
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
        }
    });
}

// ===== FEEDBACK FORM SUBMISSION =====
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');
const wishesList = document.getElementById('wishesList');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const email = document.getElementById('userEmail').value;
        const relationship = document.getElementById('relationship').value;
        const message = document.getElementById('wishMessage').value;
        
        // Create wish card
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        wishCard.style.animationDelay = '0s';
        
        const relationshipText = relationship || 'Friend';
        const today = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        wishCard.innerHTML = `
            <div class="wish-header">
                <div class="wish-avatar">👤</div>
                <div class="wish-info">
                    <h4 class="wish-author">${name}</h4>
                    <span class="wish-relation">${relationshipText}</span>
                </div>
            </div>
            <p class="wish-text">${message}</p>
            <div class="wish-footer">
                <span class="wish-date">${today}</span>
            </div>
        `;
        
        // Add to top of wishes list
        if (wishesList) {
            wishesList.insertBefore(wishCard, wishesList.firstChild);
        }
        
        // Show success message
        feedbackForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Save to localStorage (optional)
        const wishes = JSON.parse(localStorage.getItem('birthdayWishes') || '[]');
        wishes.unshift({
            name,
            email,
            relationship: relationshipText,
            message,
            date: today
        });
        localStorage.setItem('birthdayWishes', JSON.stringify(wishes));
        
        // Reset after 3 seconds
        setTimeout(() => {
            feedbackForm.style.display = 'flex';
            successMessage.style.display = 'none';
            feedbackForm.reset();
        }, 3000);
    });
}

// ===== LOAD SAVED WISHES FROM LOCALSTORAGE =====
function loadSavedWishes() {
    if (!wishesList) return;
    
    const wishes = JSON.parse(localStorage.getItem('birthdayWishes') || '[]');
    
    wishes.forEach((wish, index) => {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        wishCard.style.animationDelay = `${index * 0.1 + 0.4}s`;
        
        wishCard.innerHTML = `
            <div class="wish-header">
                <div class="wish-avatar">👤</div>
                <div class="wish-info">
                    <h4 class="wish-author">${wish.name}</h4>
                    <span class="wish-relation">${wish.relationship}</span>
                </div>
            </div>
            <p class="wish-text">${wish.message}</p>
            <div class="wish-footer">
                <span class="wish-date">${wish.date}</span>
            </div>
        `;
        
        wishesList.appendChild(wishCard);
    });
}

loadSavedWishes();

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===== MOBILE MENU TOGGLE (if needed) =====
const navMenu = document.querySelector('.nav-menu');
if (navMenu && window.innerWidth < 768) {
    const menuToggle = document.createElement('button');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    menuToggle.style.cssText = `
        display: block;
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #ff6b9d;
    `;
    
    const navContainer = document.querySelector('.nav-container');
    navContainer.appendChild(menuToggle);
    
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 1s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== CONSOLE MESSAGE =====
console.log(`
    🎉🎂🎈 Happy Birthday ${getNameFromURL()}! 🎈🎂🎉
    
    This website was made with ❤️ to celebrate your special day!
    May your life be filled with joy, love, and endless blessings! 🌟
`);
