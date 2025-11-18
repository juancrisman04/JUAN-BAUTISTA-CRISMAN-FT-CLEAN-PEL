// ===============================
// CHATBOT
// ===============================
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') 
        ? 'block' 
        : 'none';
}

// Cerrar chatbot al hacer clic fuera
document.addEventListener('click', (e) => {
    const chatbot = document.querySelector('.chatbot');
    const popup = document.getElementById('chatPopup');

    if (!chatbot.contains(e.target) && popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

// Mover chatbot según tamaño de pantalla
function moveChatbot() {
    const chatbot = document.querySelector('.chatbot');
    const mobileContainer = document.getElementById('mobileChatContainer');

    if (window.innerWidth <= 768) {
        mobileContainer.appendChild(chatbot);
        chatbot.style.display = 'flex';
    } else {
        document.body.appendChild(chatbot);
        chatbot.style.position = 'fixed';
        chatbot.style.bottom = '30px';
        chatbot.style.right = '40px';
    }
}
window.addEventListener('resize', moveChatbot);
moveChatbot();


// ===============================
// FAQ — MOSTRAR RESPUESTAS
// ===============================
function showAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    const allAnswers = document.querySelectorAll('.answer');

    allAnswers.forEach(ans => ans.style.display = 'none');
    answer.style.display = (answer.style.display === 'none' || answer.style.display === '') 
        ? 'block' 
        : 'none';
}


// ===============================
// ANIMACIONES DE ENTRADA
// ===============================
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.solution-card, .team-member, .stat, .value-card');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 1s ease';
    });
});

// Animación al hacer scroll
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.solution-card, .alt-hero-text, .alt-hero-image, .stat, .value-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});


// ===============================
// SMOOTH SCROLL
// ===============================
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


// ===============================
// CONTADORES (IntersectionObserver)
// ===============================
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || "";
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    function updateCounter() {
        current += increment;

        if (current < target) {
            counter.textContent = Math.ceil(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target + suffix;
        }
    }

    updateCounter();
}

const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
        } else {
            entry.target.textContent = "0";
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));


// ===============================
// CAROUSEL INFINITO MARCAS Y CLIENTES
// ===============================
window.addEventListener('load', () => {
    function initCarousel(selector, speed = 50, reverse = false) {
        const slider = document.querySelector(selector);
        if (!slider) return;

        const original = slider.innerHTML;
        slider.innerHTML += original;

        const totalWidth = slider.scrollWidth / 2;
        let pos = reverse ? -totalWidth : 0;
        let last = performance.now();

        function step(now) {
            const dt = (now - last) / 1000;
            last = now;
            pos += (reverse ? speed : -speed) * dt;

            if (!reverse && pos <= -totalWidth) pos += totalWidth;
            if (reverse && pos >= 0) pos -= totalWidth;

            slider.style.transform = `translateX(${pos}px)`;
            requestAnimationFrame(step);
        }

        requestAnimationFrame(step);
    }

    initCarousel('.brands-slider', 60, true);
    initCarousel('.clients-slider', 60, false);
});


// ===============================
// MENÚ LATERAL
// ===============================
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle?.addEventListener('click', () => sideMenu.classList.add('active'));
menuClose?.addEventListener('click', () => sideMenu.classList.remove('active'));


// ===============================
// SUBMENÚ DEL MODAL
// ===============================
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.getElementById('submenu');
const submenuBack = document.querySelector('.submenu-back');

if (submenuToggle && submenu && submenuBack) {
    submenuToggle.addEventListener('click', () => submenu.classList.add('active'));
    submenuBack.addEventListener('click', () => submenu.classList.remove('active'));
}


// ===============================
// CONTROLES DEL VIDEO HERO
// ===============================
document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".hero-video");
    const playBtn = document.querySelector(".play-btn");
    const muteBtn = document.querySelector(".mute-btn");
    const fullscreenBtn = document.querySelector(".fullscreen-btn");
    const progressBar = document.querySelector(".progress-bar");
    const timeLabel = document.querySelector(".time");

    function togglePlay() {
        const icon = playBtn.querySelector("i");

        if (video.paused) {
            video.play();
            icon.classList.replace("fa-play", "fa-pause");
        } else {
            video.pause();
            icon.classList.replace("fa-pause", "fa-play");
        }
    }

    playBtn?.addEventListener("click", togglePlay);
    video.addEventListener("click", togglePlay);

    muteBtn?.addEventListener("click", () => {
        const icon = muteBtn.querySelector("i");
        video.muted = !video.muted;

        icon.classList.toggle("fa-volume-high", !video.muted);
        icon.classList.toggle("fa-volume-xmark", video.muted);
    });

    video.addEventListener("timeupdate", () => {
        if (video.duration) {
            progressBar.value = (video.currentTime / video.duration) * 100;

            const format = sec => {
                const m = Math.floor(sec / 60);
                const s = Math.floor(sec % 60).toString().padStart(2, "0");
                return `${m}:${s}`;
            };

            timeLabel.textContent = `${format(video.currentTime)} / ${format(video.duration)}`;
        }
    });

    progressBar.addEventListener("input", () => {
        if (video.duration) {
            video.currentTime = (progressBar.value / 100) * video.duration;
        }
    });

    fullscreenBtn?.addEventListener("click", () => {
        if (!document.fullscreenElement) {
            video.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    });
});
