// JAVASCRIPT PRINCIPAL - LA EMPRESA - JS

// Función para alternar el chatbot
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Función para mostrar respuestas del FAQ
function showAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    const allAnswers = document.querySelectorAll('.answer');
    
    // Ocultar todas las respuestas
    allAnswers.forEach(ans => {
        if (ans !== answer) {
            ans.style.display = 'none';
        }
    });
    
    // Mostrar/ocultar la respuesta seleccionada
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// EFECTO INICIALIZACION PRODUCTOS Y SERVICIOS
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.solution-card, .team-member, .stat, .value-card');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 1s ease';
    });
});


// ANIMACION SCROLL SECCION SOBRE CLEAN PEL
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

// Smooth scrolling para enlaces internos
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

// Cerrar chatbot al hacer clic fuera
document.addEventListener('click', (e) => {
    const chatbot = document.querySelector('.chatbot');
    const popup = document.getElementById('chatPopup');
    
    if (!chatbot.contains(e.target) && popup.style.display === 'block') {
        popup.style.display = 'none';
    }
});

// Función para animar cada contador
function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || "";
    const duration = 2000; // 2 segundos
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

// Detectar cuando los contadores entran en pantalla
const counters = document.querySelectorAll('.counter');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
        } else {
            // Reiniciar a 0 cuando sale de la vista
            entry.target.textContent = "0";
        }
    });
}, { threshold: 0.5 });

counters.forEach(counter => {
    observer.observe(counter);
});

// Carrusel infinito para logos de marcas y clientes (versión final sin cortes, direcciones opuestas)
window.addEventListener('load', () => {
  function initCarousel(selector, speed = 50, reverse = false) {
    const slider = document.querySelector(selector);
    if (!slider) return;

    // 🔹 Duplicamos el contenido una vez para crear efecto infinito
    const original = slider.innerHTML;
    slider.innerHTML += original;

    const totalWidth = slider.scrollWidth / 2;
    let pos = reverse ? -totalWidth : 0; 
    let last = performance.now();

    function step(now) {
      const dt = (now - last) / 1000;
      last = now;
      pos += (reverse ? speed : -speed) * dt;

      // 🔹 Reinicio exacto sin dejar huecos
      if (!reverse && pos <= -totalWidth) pos += totalWidth;
      if (reverse && pos >= 0) pos -= totalWidth;

      slider.style.transform = `translateX(${pos}px)`;
      requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // Marcas → derecha (reverse = true)
  initCarousel('.brands-slider', 60, true);

  // Clientes → izquierda (reverse = false)
  initCarousel('.clients-slider', 60, false);
});


// Mostrar y ocultar menú lateral
const menuToggle = document.getElementById('menuToggle');
const sideMenu = document.getElementById('side-menu');
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

menuClose.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// ===== SUBMENÚ DENTRO DEL MODAL =====
const submenuToggle = document.querySelector('.submenu-toggle');
const submenu = document.getElementById('submenu');
const submenuBack = document.querySelector('.submenu-back');

if (submenuToggle && submenu && submenuBack) {
  submenuToggle.addEventListener('click', () => {
    submenu.classList.add('active');
  });

  submenuBack.addEventListener('click', () => {
    submenu.classList.remove('active');
  });
}

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

// CONTROLES PERSONALIZADOS DEL VIDEO HERO
document.addEventListener("DOMContentLoaded", () => {

    const video = document.querySelector(".hero-video");
    const playBtn = document.querySelector(".play-btn");
    const muteBtn = document.querySelector(".mute-btn");
    const fullscreenBtn = document.querySelector(".fullscreen-btn");
    const progressBar = document.querySelector(".progress-bar");
    const timeLabel = document.querySelector(".time");

    // PLAY / PAUSE + reproducir tocando cualquier parte del video
    function togglePlay() {
        if (video.paused) {
            video.play();
            if (playBtn) playBtn.textContent = "⏸";
        } else {
            video.pause();
            if (playBtn) playBtn.textContent = "▶";
        }
    }

    // Botón de play
    if (playBtn) {
        playBtn.addEventListener("click", togglePlay);
    }

    // Tocar cualquier parte del video
    video.addEventListener("click", togglePlay);


    // VOLUMEN
    if (muteBtn) {
        muteBtn.addEventListener("click", () => {
            video.muted = !video.muted;
            muteBtn.textContent = video.muted ? "🔇" : "🔊";
        });
    }

    // ACTUALIZAR BARRA DE PROGRESO
    video.addEventListener("timeupdate", () => {
        if (video.duration) {
            progressBar.value = (video.currentTime / video.duration) * 100;

            const current = Math.floor(video.currentTime);
            const total = Math.floor(video.duration);

            const format = (sec) => {
                const m = Math.floor(sec / 60);
                const s = Math.floor(sec % 60).toString().padStart(2, "0");
                return `${m}:${s}`;
            };

            timeLabel.textContent = `${format(current)} / ${format(total)}`;
        }
    });

    // CAMBIAR PROGRESO AL ARRASTRAR
    progressBar.addEventListener("input", () => {
        if (video.duration) {
            video.currentTime = (progressBar.value / 100) * video.duration;
        }
    });

    // PANTALLA COMPLETA
    if (fullscreenBtn) {
        fullscreenBtn.addEventListener("click", () => {
            if (!document.fullscreenElement) {
                video.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
        });
    }
});


