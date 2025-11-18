// JAVASCRIPT DE LA PÁGINA CONTACTANOS - JS

// Función para alternar chatbot
function toggleChat() {
    const popup = document.getElementById('chatPopup');
    if (popup.style.display === 'none' || popup.style.display === '') {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

// Función para mostrar respuestas FAQ del chatbot
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

// Función para alternar FAQ de la página
function toggleFAQ(faqNumber) {
    const faqItem = document.querySelector(`.faq-item:nth-child(${faqNumber})`);
    const faqAnswer = document.getElementById(`faq${faqNumber}`);
    
    // Cerrar todas las otras FAQ
    document.querySelectorAll('.faq-item').forEach((item, index) => {
        if (index + 1 !== faqNumber) {
            item.classList.remove('active');
            const answer = item.querySelector('.faq-answer');
            if (answer) {
                answer.classList.remove('active');
            }
        }
    });
    
    // Alternar la FAQ seleccionada
    faqItem.classList.toggle('active');
    faqAnswer.classList.toggle('active');
}

// Función para mostrar modal de confirmación
function showConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Función para cerrar modal de confirmación
function closeConfirmationModal() {
    const modal = document.getElementById('confirmationModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Validación del formulario
function validateForm(formData) {
    const errors = [];
    
    // Validar campos requeridos
    if (!formData.get('firstName').trim()) {
        errors.push('El nombre es requerido');
    }
    
    if (!formData.get('lastName').trim()) {
        errors.push('El apellido es requerido');
    }
    
    if (!formData.get('email').trim()) {
        errors.push('El email es requerido');
    } else if (!isValidEmail(formData.get('email'))) {
        errors.push('El email no tiene un formato válido');
    }
    
    if (!formData.get('message').trim()) {
        errors.push('El mensaje es requerido');
    }
    
    return errors;
}

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Función para mostrar errores
function showErrors(errors) {
    // Remover errores anteriores
    document.querySelectorAll('.error-message').forEach(error => {
        error.remove();
    });
    
    errors.forEach(error => {
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.style.cssText = `
            background: #fee2e2;
            color: #dc2626;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            margin-bottom: 1rem;
            border: 1px solid #fecaca;
            font-size: 0.9rem;
        `;
        errorDiv.textContent = error;
        
        const form = document.getElementById('contactForm');
        form.insertBefore(errorDiv, form.firstChild);
    });
    
    // Scroll al primer error
    const firstError = document.querySelector('.error-message');
    if (firstError) {
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}


// Función para obtener transformación final
function getTransformValue(aosType) {
    return 'translateY(0) translateX(0)';
}

// Event listeners
document.addEventListener('DOMContentLoaded', function() {
    
    // Manejar envío del formulario
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const errors = validateForm(formData);
        
        if (errors.length > 0) {
            showErrors(errors);
            return;
        }
        
        // Simular envío del formulario
        const submitBtn = this.querySelector('.btn-submit');
        const originalText = submitBtn.innerHTML;
        
        // Mostrar estado de carga
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
        submitBtn.disabled = true;
        
        // Simular delay de envío
        setTimeout(() => {
            // Resetear formulario
            contactForm.reset();
            
            // Restaurar botón
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Mostrar modal de confirmación
            showConfirmationModal();
            
            // Remover mensajes de error
            document.querySelectorAll('.error-message').forEach(error => {
                error.remove();
            });
        }, 2000);
    });

    
    // Animación de FAQ items
    const faqItems = document.querySelectorAll('.faq-item');
    const faqObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 100);
            }
        });
    });
    
    faqItems.forEach(item => {
        faqObserver.observe(item);
    });
    
    // Cerrar modal al hacer clic fuera
    window.addEventListener('click', function(event) {
        const modal = document.getElementById('confirmationModal');
        if (event.target === modal) {
            closeConfirmationModal();
        }
    });
    
    // Cerrar modal con tecla Escape
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape') {
            closeConfirmationModal();
        }
    });

    // Validación en tiempo real
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
        
        input.addEventListener('input', function() {
            clearFieldError(this);
        });
    });
});

// Función para validar campo individual
function validateField(field) {
    const value = field.value.trim();
    const fieldName = field.name;
    let isValid = true;
    let errorMessage = '';
    
    // Remover error anterior
    clearFieldError(field);
    
    switch(fieldName) {
        case 'firstName':
        case 'lastName':
            if (!value) {
                isValid = false;
                errorMessage = 'Este campo es requerido';
            }
            break;
        case 'email':
            if (!value) {
                isValid = false;
                errorMessage = 'El email es requerido';
            } else if (!isValidEmail(value)) {
                isValid = false;
                errorMessage = 'Formato de email inválido';
            }
            break;
        case 'message':
            if (!value) {
                isValid = false;
                errorMessage = 'El mensaje es requerido';
            } else if (value.length < 10) {
                isValid = false;
                errorMessage = 'El mensaje debe tener al menos 10 caracteres';
            }
            break;
    }
    
    if (!isValid) {
        showFieldError(field, errorMessage);
    }
    
    return isValid;
}

// Función para mostrar error en campo específico
function showFieldError(field, message) {
    field.style.borderColor = '#dc2626';
    
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.style.cssText = `
        color: #dc2626;
        font-size: 0.8rem;
        margin-top: 0.25rem;
    `;
    errorDiv.textContent = message;
    
    field.parentNode.appendChild(errorDiv);
}

// Función para limpiar error de campo
function clearFieldError(field) {
    field.style.borderColor = '#e5e7eb';
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

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
