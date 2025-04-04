document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('main-nav').classList.toggle('active');
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Sistem Pencarian yang Diperbarui
document.getElementById('search-bar').addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.lyric-card');
    
    cards.forEach(card => {
        const titleElement = card.querySelector('h3');
        const title = titleElement.textContent.toLowerCase().trim();
        
        if (title.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// Fungsi-fungsi lainnya tetap sama
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.querySelector('#main-nav ul');

menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMenu.classList.remove('active');
    }
});

function updateScrollProgress() {
    const scrollProgress = document.querySelector('.scroll-progress');
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}

const scrollTop = document.getElementById('scroll-top');

function toggleScrollTop() {
    if (window.scrollY > 300) {
        scrollTop.style.opacity = '1';
    } else {
        scrollTop.style.opacity = '0';
    }
}

scrollTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        updateScrollProgress();
        toggleScrollTop();
    });
});