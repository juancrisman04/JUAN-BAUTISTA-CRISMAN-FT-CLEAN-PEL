// JAVASCRIPT DE LA PÁGINA SERVICIOS - JS

// Variables para el slider de testimonios
let currentTestimonial = 1;
const totalTestimonials = 3;

// Función para mostrar detalles del servicio
function showServiceDetails(serviceType) {
    const service = serviceDetails[serviceType];
    const modal = document.getElementById('serviceModal');
    const modalBody = document.getElementById('serviceModalBody');
    
    modalBody.innerHTML = `
        <img src="${service.image}" alt="${service.title}" style="width: 100%; height: 300px; object-fit: cover; border-radius: 15px; margin-bottom: 2rem;">
        <h2 style="color: #1e3a8a; font-size: 2rem; margin-bottom: 1rem;">${service.title}</h2>
        <p style="color: #64748b; font-size: 1.1rem; line-height: 1.8; margin-bottom: 2rem;">${service.description}</p>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Características del Servicio:</h3>
            <ul style="list-style: none; padding: 0;">
                ${service.features.map(feature => `
                    <li style="padding: 0.5rem 0; color: #64748b; position: relative; padding-left: 1.5rem;">
                        <span style="position: absolute; left: 0; color: #10b981; font-weight: bold;">✓</span>
                        ${feature}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Beneficios:</h3>
            <ul style="list-style: none; padding: 0;">
                ${service.benefits.map(benefit => `
                    <li style="padding: 0.5rem 0; color: #64748b; position: relative; padding-left: 1.5rem;">
                        <span style="position: absolute; left: 0; color: #3b82f6; font-weight: bold;">→</span>
                        ${benefit}
                    </li>
                `).join('')}
            </ul>
        </div>
        
        <div style="margin-bottom: 2rem;">
            <h3 style="color: #1e3a8a; font-size: 1.5rem; margin-bottom: 1rem;">Proceso de Trabajo:</h3>
            <ol style="padding-left: 1.5rem;">
                ${service.process.map(step => `
                    <li style="padding: 0.5rem 0; color: #64748b; line-height: 1.6;">${step}</li>
                `).join('')}
            </ol>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
            <button onclick="closeServiceModal()" style="background: linear-gradient(135deg, #3b82f6, #1d4ed8); color: white; border: none; padding: 12px 24px; border-radius: 25px; font-weight: 600; cursor: pointer; margin-right: 1rem;">Solicitar Cotización</button>
            <button onclick="closeServiceModal()" style="background: transparent; color: #3b82f6; border: 2px solid #3b82f6; padding: 10px 22px; border-radius: 25px; font-weight: 600; cursor: pointer;">Más Información</button>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de servicio
function closeServiceModal() {
    const modal = document.getElementById('serviceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Función para cambiar testimonios
function currentSlide(n) {
    showTestimonial(currentTestimonial = n);
}

function showTestimonial(n) {
    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    
    if (n > totalTestimonials) currentTestimonial = 1;
    if (n < 1) currentTestimonial = totalTestimonials;
    
    testimonials.forEach(testimonial => {
        testimonial.classList.remove('active');
    });
    
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    
    testimonials[currentTestimonial - 1].classList.add('active');
    dots[currentTestimonial - 1].classList.add('active');
}

// Auto-slider para testimonios
function autoSlideTestimonials() {
    currentTestimonial++;
    if (currentTestimonial > totalTestimonials) {
        currentTestimonial = 1;
    }
    showTestimonial(currentTestimonial);
}

// Función para alternar chatbot
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Función para mostrar respuestas FAQ
function showAnswer(questionNumber) {
    const answer = document.getElementById('answer' + questionNumber);
    const allAnswers = document.querySelectorAll('.answer');
    
    allAnswers.forEach(ans => {
        if (ans !== answer) {
            ans.style.display = 'none';
        }
    });
    
    if (answer.style.display === 'none' || answer.style.display === '') {
        answer.style.display = 'block';
    } else {
        answer.style.display = 'none';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('serviceModal');
        if (event.target === modal) {
            closeServiceModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeServiceModal();
        }
    });
    
    // Cerrar chatbot al hacer clic fuera
    document.addEventListener('click', (e) => {
        const chatbot = document.querySelector('.chatbot');
        const popup = document.getElementById('chatPopup');
        
        if (!chatbot.contains(e.target) && popup.style.display === 'block') {
            popup.style.display = 'none';
        }
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
});

// Animación al hacer scroll para servicios y ventajas
const observerOptions = {
  threshold: 0.2
};

// Animación común para cards
function animateCards(selector) {
  const cards = document.querySelectorAll(selector);
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index *200);
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  cards.forEach(card => observer.observe(card));
}

// Aplicar a ambas secciones
animateCards('.service-card');
animateCards('.advantage-card');

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
