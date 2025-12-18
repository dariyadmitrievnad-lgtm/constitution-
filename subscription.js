// subscription.js - чистая ванильная JavaScript для формы подписки
document.addEventListener('DOMContentLoaded', function() {
    initSubscriptionSystem();
});

function initSubscriptionSystem() {
    const subscriptionForm = document.querySelector('.subscription-form');
    
    if (!subscriptionForm) {
        console.warn('Форма подписки не найдена');
        return;
    }

    // Отправка формы
    subscriptionForm.addEventListener('submit', handleSubscriptionSubmit);
    
    // Валидация в реальном времени
    initRealTimeValidation();
    
    // Загрузка сохраненных данных
    loadSavedData();
}

function handleSubscriptionSubmit(event) {
    event.preventDefault();
    
    const form = event.target;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());
    
    // Валидация
    const validationResult = validateFormData(formObject);
    if (!validationResult.valid) {
        showModal(validationResult.message, 'error');
        return;
    }
    
    // Показываем состояние загрузки
    setLoadingState(form, true);
    
    // Имитация отправки на сервер
    setTimeout(() => {
        setLoadingState(form, false);
        
        // Сохраняем данные
        saveSubscriptionData(formObject);
        
        // Показываем сообщение об успехе
        showSuccessModal(formObject);
        
        // Очищаем форму
        form.reset();
        
    }, 1500);
}

function validateFormData(data) {
    const { name, email, gender } = data;
    
    // Проверка имени
    if (!name || name.trim() === '') {
        return { valid: false, message: 'Пожалуйста, введите ваше имя' };
    }
    
    if (name.trim().length < 2) {
        return { valid: false, message: 'Имя должно содержать минимум 2 символа' };
    }
    
    if (name.trim().length > 50) {
        return { valid: false, message: 'Имя не должно превышать 50 символов' };
    }
    
    // Проверка email
    if (!email || email.trim() === '') {
        return { valid: false, message: 'Пожалуйста, введите ваш email' };
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        return { valid: false, message: 'Пожалуйста, введите корректный email адрес' };
    }
    
    // Проверка пола
    if (!gender) {
        return { valid: false, message: 'Пожалуйста, укажите ваш пол' };
    }
    
    return { valid: true, message: 'Валидация пройдена' };
}

function showModal(message, type) {
    // Удаляем существующие модальные окна
    removeExistingModals();
    
    // Создаем overlay
    const overlay = document.createElement('div');
    overlay.className = 'subscription-modal-overlay';
    
    // Создаем модальное окно
    const modal = document.createElement('div');
    modal.className = `subscription-modal subscription-modal-${type}`;
    
    // Создаем контент
    const content = document.createElement('div');
    content.className = 'subscription-modal-content';
    
    const title = document.createElement('h3');
    title.className = 'subscription-modal-title';
    title.textContent = type === 'success' ? '🎉 Успешно!' : '⚠️ Ошибка';
    
    const text = document.createElement('p');
    text.className = 'subscription-modal-text';
    text.innerHTML = message;
    
    content.appendChild(title);
    content.appendChild(text);
    
    // Создаем кнопку закрытия
    const closeButton = document.createElement('button');
    closeButton.className = 'subscription-modal-close';
    closeButton.innerHTML = '×';
    closeButton.setAttribute('aria-label', 'Закрыть');
    
    // Создаем основную кнопку
    const actionButton = document.createElement('button');
    actionButton.className = `subscription-modal-button subscription-modal-button-${type}`;
    actionButton.textContent = 'Закрыть';
    
    // Собираем модальное окно
    modal.appendChild(closeButton);
    modal.appendChild(content);
    modal.appendChild(actionButton);
    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    
    // Активируем анимацию
    setTimeout(() => {
        overlay.classList.add('active');
    }, 10);
    
    // Обработчики закрытия
    function closeModal() {
        overlay.classList.remove('active');
        setTimeout(() => {
            if (overlay.parentNode) {
                overlay.parentNode.removeChild(overlay);
            }
        }, 300);
    }
    
    closeButton.addEventListener('click', closeModal);
    actionButton.addEventListener('click', closeModal);
    overlay.addEventListener('click', function(event) {
        if (event.target === overlay) {
            closeModal();
        }
    });
    
    // Автоматическое закрытие через 5 секунд для ошибок
    if (type === 'error') {
        setTimeout(closeModal, 5000);
    }
}

function showSuccessModal(formData) {
    const genderText = formData.gender === 'male' ? 'Мужской' : 'Женский';
    
    const message = `
        Спасибо за подписку, <strong>${formData.name}</strong>!<br><br>
        Вы успешно подписались на обновления нашего сайта.
        
        <div class="subscription-modal-details">
            <p class="subscription-modal-details-title">Ваши данные:</p>
            <ul class="subscription-modal-details-list">
                <li><strong>Имя:</strong> ${formData.name}</li>
                <li><strong>Email:</strong> ${formData.email}</li>
                <li><strong>Пол:</strong> ${genderText}</li>
                <li><strong>Дата подписки:</strong> ${new Date().toLocaleDateString('ru-RU')}</li>
            </ul>
        </div>
        
        <p class="subscription-modal-note">
            Теперь вы будете первым получать новые материалы о конституции России!
        </p>
    `;
    
    showModal(message, 'success');
}

function setLoadingState(form, isLoading) {
    const submitButton = form.querySelector('button[type="submit"]');
    
    if (!submitButton) return;
    
    if (isLoading) {
        submitButton.disabled = true;
        submitButton.dataset.originalText = submitButton.textContent;
        submitButton.innerHTML = `
            <span class="subscription-loading">
                <span class="subscription-loading-spinner"></span>
                <span>Отправка...</span>
            </span>
        `;
    } else {
        submitButton.disabled = false;
        if (submitButton.dataset.originalText) {
            submitButton.textContent = submitButton.dataset.originalText;
            delete submitButton.dataset.originalText;
        }
    }
}

function saveSubscriptionData(formData) {
    try {
        const subscriptionData = {
            name: formData.name.trim(),
            email: formData.email.trim(),
            gender: formData.gender,
            subscriptionDate: new Date().toISOString(),
            timestamp: Date.now()
        };
        
        localStorage.setItem('subscriptionData', JSON.stringify(subscriptionData));
        console.log('Данные сохранены в localStorage');
    } catch (error) {
        console.error('Ошибка сохранения данных:', error);
    }
}

function loadSavedData() {
    try {
        const savedData = localStorage.getItem('subscriptionData');
        
        if (savedData) {
            const { name, email, gender } = JSON.parse(savedData);
            
            const nameInput = document.querySelector('.subscription-form input[name="name"]');
            const emailInput = document.querySelector('.subscription-form input[name="email"]');
            const genderInputs = document.querySelectorAll('.subscription-form input[name="gender"]');
            
            if (nameInput && name) nameInput.value = name;
            if (emailInput && email) emailInput.value = email;
            
            if (gender && genderInputs.length > 0) {
                genderInputs.forEach(input => {
                    if (input.value === gender) {
                        input.checked = true;
                    }
                });
            }
        }
    } catch (error) {
        console.warn('Не удалось загрузить сохраненные данные');
    }
}

function initRealTimeValidation() {
    const nameInput = document.querySelector('.subscription-form input[name="name"]');
    const emailInput = document.querySelector('.subscription-form input[name="email"]');
    
    if (nameInput) {
        nameInput.addEventListener('input', function() {
            // Очистка ввода - только буквы, пробелы и дефисы
            this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s-]/g, '');
            
            // Валидация в реальном времени
            if (this.value.trim().length < 2 && this.value.trim() !== '') {
                this.classList.add('subscription-input-error');
                this.classList.remove('subscription-input-success');
            } else if (this.value.trim().length >= 2) {
                this.classList.remove('subscription-input-error');
                this.classList.add('subscription-input-success');
            } else {
                this.classList.remove('subscription-input-error', 'subscription-input-success');
            }
        });
    }
    
    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (this.value && !emailRegex.test(this.value)) {
                this.classList.add('subscription-input-error');
                this.classList.remove('subscription-input-success');
            } else if (this.value && emailRegex.test(this.value)) {
                this.classList.remove('subscription-input-error');
                this.classList.add('subscription-input-success');
            } else {
                this.classList.remove('subscription-input-error', 'subscription-input-success');
            }
        });
    }
}

function removeExistingModals() {
    const existingModals = document.querySelectorAll('.subscription-modal-overlay');
    existingModals.forEach(modal => {
        if (modal.parentNode) {
            modal.parentNode.removeChild(modal);
        }
    });
}

// Добавляем поддержку клавиши Escape для закрытия модальных окон
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        removeExistingModals();
    }
});