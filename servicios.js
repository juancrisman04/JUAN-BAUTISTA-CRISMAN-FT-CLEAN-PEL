// ========================================
// TESTIMONIOS
// ========================================
let currentTestimonial = 1;
const totalTestimonials = 3;

function currentSlide(n) {
    showTestimonial(currentTestimonial = n);
}

function showTestimonial(n) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');

    if (n > totalTestimonials) currentTestimonial = 1;
    if (n < 1) currentTestimonial = totalTestimonials;

    testimonials.forEach(t => t.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    testimonials[currentTestimonial - 1].classList.add('active');
    dots[currentTestimonial - 1].classList.add('active');
}

function autoSlideTestimonials() {
    currentTestimonial++;
    if (currentTestimonial > totalTestimonials) currentTestimonial = 1;
    showTestimonial(currentTestimonial);
}



// ========================================
// MODAL SERVICIOS
// ========================================
function showServiceDetails(serviceType) {
    const service = serviceDetails[serviceType];
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');

    modalBody.innerHTML = `
        <img src="${service.image}" alt="${service.title}" 
             style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 2rem;">

        <h2 style="color: #1e3a8a; font-size: 2rem; margin-bottom: 1rem;">${service.title}</h2>
        <p style="color: #64748b; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">
            ${service.description}
        </p>

        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Características del Servicio:</h3>
            <ul style="list-style: none; padding: 0;">
                ${service.features.map(f => `
                <li style="padding: 0.5rem 0; color: #64748b; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0; color: #10b981; font-weight: bold;">✓</span>${f}
                </li>`).join('')}
            </ul>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Beneficios:</h3>
            <ul style="list-style: none; padding: 0;">
                ${service.benefits.map(b => `
                <li style="padding: 0.5rem 0; color: #64748b; padding-left: 1.5rem; position: relative;">
                    <span style="position: absolute; left: 0; color: #3b82f6; font-weight: bold;">→</span>${b}
                </li>`).join('')}
            </ul>
        </div>

        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Proceso de Trabajo:</h3>
            <ol style="padding-left: 1.5rem;">
                ${service.process.map(step => `
                    <li style="padding: 0.5rem 0; color: #64748b;">${step}</li>
                `).join('')}
            </ol>
        </div>

        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="closeServiceModal()"
                style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; padding: 12px 24px; border-radius: 25px; margin-right: 1rem;">
                Solicitar Cotización
            </button>

            <button onclick="closeServiceModal()"
                style="background: transparent; color: #3b82f6; border: 2px solid #3b82f6; padding: 10px 22px; border-radius: 25px;">
                Más Información
            </button>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    document.getElementById('serviceModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}



// ========================================
// FAQ
// ========================================
function showAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    const all = document.querySelectorAll('.answer');

    all.forEach(a => a.style.display = (a === answer ? a.style.display : 'none'));

    answer.style.display =
        (answer.style.display === 'none' || answer.style.display === '') ? 'block' : 'none';
}



// ========================================
// CHATBOT
// ========================================
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    popup.style.display =
        (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';
}



// ========================================
// ANIMACIONES SCROLL
// ========================================
const observerOptions = { threshold: 0.2 };

function animateCards(selector) {
    const cards = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 200);

                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => observer.observe(card));
}

animateCards('.service-card');
animateCards('.advantage-card');



// ========================================
// MENÚ LATERAL + SUBMENÚ
// ========================================
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle?.addEventListener('click', () => sideMenu.classList.add('active'));
menuClose?.addEventListener('click', () => sideMenu.classList.remove('active'));

const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.getElementById('submenu');
const submenuBack = document.querySelector('.submenu-back');

if (submenuToggle && submenu && submenuBack) {
    submenuToggle.addEventListener('click', () => submenu.classList.add('active'));
    submenuBack.addEventListener('click', () => submenu.classList.remove('active'));
}



// ========================================
// CHATBOT POSICIÓN RESPONSIVE
// ========================================
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



// ========================================
// VIDEO HERO — CONTROLES
// ========================================
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
    video?.addEventListener("click", togglePlay);

    muteBtn?.addEventListener("click", () => {
        const icon = muteBtn.querySelector("i");
        video.muted = !video.muted;

        icon.classList.toggle("fa-volume-high", !video.muted);
        icon.classList.toggle("fa-volume-xmark", video.muted);
    });

    video?.addEventListener("timeupdate", () => {
        if (!video.duration) return;

        progressBar.value = (video.currentTime / video.duration) * 100;

        const format = sec => {
            const m = Math.floor(sec / 60);
            const s = Math.floor(sec % 60).toString().padStart(2, "0");
            return `${m}:${s}`;
        };

        timeLabel.textContent = `${format(video.currentTime)} / ${format(video.duration)}`;
    });

    progressBar?.addEventListener("input", () => {
        if (video.duration) {
            video.currentTime = (progressBar.value / 100) * video.duration;
        }
    });

    fullscreenBtn?.addEventListener("click", () => {
        if (!document.fullscreenElement) video.requestFullscreen();
        else document.exitFullscreen();
    });
});



// ========================================
// EVENTOS GLOBALES (ESC + CLIC FUERA)
// ========================================
document.addEventListener('click', (e) => {
    const chatbot = document.querySelector('.chatbot');
    const popup = document.getElementById('chatPopup');

    if (!chatbot.contains(e.target) && popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeServiceModal();
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('serviceModal');
    if (event.target === modal) closeServiceModal();
});


// ========================================
// SMOOTH SCROLL
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

