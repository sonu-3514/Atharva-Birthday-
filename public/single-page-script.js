// ===== GET NAME FROM URL =====
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
    new Typed('#typed', {
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

// ===== FLOATING BALLOONS =====
function createBalloons() {
    const container = document.getElementById('balloonsContainer');
    if (!container) return;
    
    // MOBILE OPTIMIZATION: Reduce balloon count on mobile devices
    const isMobile = window.innerWidth <= 768;
    const balloonInterval = isMobile ? 3000 : 1500; // Slower on mobile
    const maxBalloons = isMobile ? 8 : 15; // Less balloons on mobile
    let currentBalloons = 0;
    
    const balloonEmojis = ['🎈', '🎉', '🎊', '🎁', '🎀'];
    
    setInterval(() => {
        // Don't create more balloons if we've hit the limit
        if (currentBalloons >= maxBalloons) return;
        
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.textContent = balloonEmojis[Math.floor(Math.random() * balloonEmojis.length)];
        
        // Random starting position
        balloon.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (10-20 seconds)
        balloon.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random delay
        balloon.style.animationDelay = Math.random() * 2 + 's';
        
        // Random horizontal drift
        const drift = (Math.random() - 0.5) * 200; // -100px to +100px
        balloon.style.setProperty('--drift', drift + 'px');
        
        // PERFORMANCE: Force GPU layer
        balloon.style.transform = 'translateZ(0)';
        balloon.style.willChange = 'transform, opacity';
        
        container.appendChild(balloon);
        currentBalloons++;
        
        setTimeout(() => {
            balloon.remove();
            currentBalloons--;
        }, 22000);
    }, balloonInterval);
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
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

createConfetti();

// ===== BACKGROUND MUSIC =====
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
                console.log('Auto-play prevented.');
            });
            musicIcon.textContent = '🔇';
            isPlaying = true;
        }
    });
    
    setTimeout(() => {
        bgMusic.play().then(() => {
            musicIcon.textContent = '🔇';
            isPlaying = true;
        }).catch(err => {
            console.log('Auto-play prevented. Click music button to play.');
        });
    }, 1000);
}

// ===== LOAD VIDEOS FROM FOLDER =====
const videosContainer = document.getElementById('videosContainer');
const videosList = document.getElementById('videosList');

// List of video files in /public/videos/ folder
// Add your video filenames here (update this array when you add new videos)
const videoFiles = [
    'https://res.cloudinary.com/dapiempj3/video/upload/v1767129658/video_20250102_134252_h3vjar.mp4'
];

// Load videos from folder
function loadVideosFromFolder() {
    if (videoFiles.length === 0) {
        videosContainer.style.display = 'none';
        return;
    }
    
    videosContainer.style.display = 'block';
    videosList.innerHTML = '';
    
    videoFiles.forEach((videoFile, index) => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        
        // Check if videoFile is a full URL (starts with http) or local file
        const videoSrc = videoFile.startsWith('http') ? videoFile : `videos/${videoFile}`;
        
        videoItem.innerHTML = `
            <video 
                controls 
                preload="auto" 
                playsinline 
                webkit-playsinline 
                muted
                poster=""
                controlsList="nodownload nofullscreen"
                disablePictureInPicture
                style="width: 100%; max-width: 100%; height: auto; display: block;"
            >
                <source src="${videoSrc}" type="video/mp4" />
                <source src="${videoSrc}" type="video/webm" />
                Your browser does not support the video tag. Please try a different browser.
            </video>
            <div class="video-label">
                <span>Video #${index + 1}</span>
            </div>
        `;
        
        videosList.appendChild(videoItem);
    });
}

// Load videos on page load
loadVideosFromFolder();

// ===== LIGHTBOX FOR PHOTOS =====
const photoWrappers = document.querySelectorAll('.photo-wrapper');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');

let currentImageIndex = 0;
const allImages = [];

if (photoWrappers.length > 0 && lightbox) {
    // Collect all images into an array
    photoWrappers.forEach((wrapper) => {
        const img = wrapper.querySelector('.photo-img');
        allImages.push({
            src: img.src,
            alt: img.alt
        });
    });

    // Function to update arrow visibility based on current index
    function updateArrows() {
        if (lightboxPrev) {
            // Hide previous arrow if at first image
            if (currentImageIndex === 0) {
                lightboxPrev.style.display = 'none';
            } else {
                lightboxPrev.style.display = 'flex';
            }
        }
        
        if (lightboxNext) {
            // Hide next arrow if at last image
            if (currentImageIndex === allImages.length - 1) {
                lightboxNext.style.display = 'none';
            } else {
                lightboxNext.style.display = 'flex';
            }
        }
    }

    // Function to show image at specific index
    function showImage(index) {
        // Don't allow going below 0 or above last image
        if (index < 0) {
            index = 0;
        }
        if (index >= allImages.length) {
            index = allImages.length - 1;
        }
        
        currentImageIndex = index;
        lightboxImg.src = allImages[index].src;
        lightboxImg.alt = allImages[index].alt;
        lightboxCaption.textContent = '';
        
        // Update arrow visibility
        updateArrows();
    }

    // Open lightbox when clicking on any photo
    photoWrappers.forEach((wrapper, index) => {
        wrapper.addEventListener('click', () => {
            currentImageIndex = index;
            showImage(currentImageIndex);
            lightbox.classList.add('active');
        });
    });
    
    // Previous button
    if (lightboxPrev) {
        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentImageIndex - 1);
        });
    }

    // Next button
    if (lightboxNext) {
        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            showImage(currentImageIndex + 1);
        });
    }

    // Close button
    if (lightboxClose) {
        lightboxClose.addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
    }
    
    // Close when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (lightbox.classList.contains('active')) {
            if (e.key === 'Escape') {
                lightbox.classList.remove('active');
            } else if (e.key === 'ArrowLeft') {
                showImage(currentImageIndex - 1);
            } else if (e.key === 'ArrowRight') {
                showImage(currentImageIndex + 1);
            }
        }
    });
}

// ===== FEEDBACK FORM =====
const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');
const wishesList = document.getElementById('wishesList');

if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('userName').value;
        const relationship = document.getElementById('relationship').value || 'Friend';
        const message = document.getElementById('wishMessage').value;
        
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        
        const today = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        wishCard.innerHTML = `
            <div class="wish-header">
                <div class="wish-avatar">👤</div>
                <div class="wish-info">
                    <h4>${name}</h4>
                    <span class="wish-tag">${relationship}</span>
                </div>
            </div>
            <p class="wish-text">${message}</p>
        `;
        
        wishesList.insertBefore(wishCard, wishesList.firstChild);
        
        // Show success message
        feedbackForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Save to localStorage
        const wishes = JSON.parse(localStorage.getItem('birthdayWishes') || '[]');
        wishes.unshift({ name, relationship, message, date: today });
        localStorage.setItem('birthdayWishes', JSON.stringify(wishes));
        
        // Reset after 3 seconds
        setTimeout(() => {
            feedbackForm.style.display = 'flex';
            successMessage.style.display = 'none';
            feedbackForm.reset();
        }, 3000);
    });
}

// Load saved wishes
function loadSavedWishes() {
    if (!wishesList) return;
    
    const wishes = JSON.parse(localStorage.getItem('birthdayWishes') || '[]');
    
    wishes.forEach((wish) => {
        const wishCard = document.createElement('div');
        wishCard.className = 'wish-card';
        
        wishCard.innerHTML = `
            <div class="wish-header">
                <div class="wish-avatar">👤</div>
                <div class="wish-info">
                    <h4>${wish.name}</h4>
                    <span class="wish-tag">${wish.relationship}</span>
                </div>
            </div>
            <p class="wish-text">${wish.message}</p>
        `;
        
        wishesList.appendChild(wishCard);
    });
}

loadSavedWishes();

// ===== CONSOLE MESSAGE =====
console.log(`
    🎉🎂🎈 Happy Birthday ${getNameFromURL()}! 🎈🎂🎉
    
    Single-page website with video upload functionality!
    Made with ❤️ for your special day! 🌟
`);
