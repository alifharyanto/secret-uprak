// ISI DARI FILE script.js ANDA

// --- 1. TYPEWRITER EFFECT (TIDAK ADA PERUBAHAN) ---
const textElement = document.querySelector('.typing-text');
const words = ["Web Developer", "Game Developer", "AI Engineer", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeSpeed = 100; 
const deleteSpeed = 50; 
const delayBetweenWords = 2000; 

function typeEffect() {
    if (!textElement) return; 

    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        textElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeDelay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIndex === currentWord.length) {
        typeDelay = delayBetweenWords;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, typeDelay);
}

document.addEventListener('DOMContentLoaded', () => {
    if (textElement) {
        typeEffect();
    }
});


// --- 2. MOBILE NAVBAR & HAMBURGER (TIDAK ADA PERUBAHAN) ---
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu'); 

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });
}


// --- 3. STICKY HEADER EFFECT (TIDAK ADA PERUBAHAN) ---
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.5)";
        } else {
            header.style.boxShadow = "none";
        }
    }
});


// ----------------------------------------------------------------------
// ✅ FIX FINAL: SKILL BAR ANIMATION DENGAN TARGET & LOGIKA TERBAIK
// ----------------------------------------------------------------------
// 🚨 PERBAIKAN 1: Target section diubah dari #about menjadi #skills
const skillSection = document.querySelector('#skills'); 
const progressBars = document.querySelectorAll('.progress-bar-fill');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.getAttribute('data-percent');
        
        // 1. Pastikan width di-reset ke 0 (kunci agar transisi terjadi)
        progressBar.style.width = '0%';
        
        // 2. Gunakan jeda mikro (10ms) untuk memastikan browser melihat width=0 
        // sebelum menjalankan transisi. Ini lebih konsisten daripada trik offsetHeight.
        setTimeout(() => {
             // 3. Set width ke nilai target (animasi terjadi di sini)
             progressBar.style.width = value;
        }, 10); 
    });
}

if (skillSection) {
    const observerOptions = {
        threshold: 0.2 // Trigger saat 20% elemen terlihat
    };
    
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                showProgress();
                // Agar animasi hanya berjalan sekali
                observer.unobserve(entry.target); 
            } 
        });
    }, observerOptions);

    skillObserver.observe(skillSection);
}