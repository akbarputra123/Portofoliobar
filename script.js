// Animasi mengetik teks profesi
const typingText = document.querySelector('.typing-text');
const text = "Frontend Developer & Backend Developer";
let index = 0;
let direction = 1; // 1 untuk mengetik, -1 untuk menghapus

function type() {
    if (index <= text.length && direction === 1) {
        typingText.textContent = text.substring(0, index);
        index++;
        setTimeout(type, 100);
    } else if (index >= 0 && direction === -1) {
        typingText.textContent = text.substring(0, index);
        index--;
        if (index === 0) {
            direction = 1;
        }
        setTimeout(type, 50);
    } else {
        // Setelah selesai mengetik, tunggu sebentar lalu mulai menghapus
        direction = -1;
        setTimeout(type, 2000);
    }
}

// Toggle menu mobile
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animasi scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Update kelas aktif pada navigasi
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.classList.remove('active');
        });
        this.classList.add('active');
        
        // Tutup menu mobile setelah mengklik tautan
        if (navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
        }
    });
});

// Animasi saat elemen masuk ke viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
});

// Efek parallax sederhana untuk header
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const header = document.querySelector('.header');
    
    if (header) {
        header.style.backgroundPositionY = -scrollPosition * 0.5 + 'px';
    }
});

// Validasi form kontak
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Pesan Anda telah terkirim! Saya akan segera menghubungi Anda.');
        contactForm.reset();
    });
}

// Mulai animasi setelah halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    type();
});