document.addEventListener('DOMContentLoaded', function() {
    if (typeof anime === 'undefined') {
        console.log('Anime.js не загружена, используются базовые анимации');
        initBasicAnimations();
    } else {
        console.log('Anime.js загружена, инициализируем продвинутые анимации');
        initAnimeAnimations();
    }
    initSubscriptionModal();
    initDocumentButtons();
    loadSavedSubscriptionData(); // Загружаем сохраненные данные при загрузке страницы

    function initBasicAnimations() {
        initHoverEffects();
    }
    
    function initAnimeAnimations() {
        animateCommonElements();
        if (document.querySelector('.home-page')) {
            animateHomePage();
        }
        if (document.querySelector('.chronology-page')) {
            animateChronologyPage();
        }
        if (document.querySelector('.documents-page')) {
            animateDocumentsPage();
        }
        initHoverEffects();
    }
    
    function animateCommonElements() {
        if (document.querySelector('.hr')) {
            anime({
                targets: '.hr',
                translateY: [-20, 0],
                opacity: [0, 1],
                duration: 700,
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.cl')) {
            anime({
                targets: '.cl',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 700,
                delay: 200,
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.tri')) {
            anime({
                targets: '.tri, .odin, .dva, .chetire',
                translateY: [30, 0],
                opacity: [0, 1],
                duration: 800,
                delay: anime.stagger(100),
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.block-2-1')) {
            anime({
                targets: '.block-2-1, .block-2-2',
                translateY: [20, 0],
                opacity: [0, 1],
                duration: 600,
                delay: 500,
                easing: 'easeOutBack'
            });
        }
    }
    
    function animateHomePage() {
        console.log('Инициализация анимаций для главной страницы');
        const documentCards = document.querySelectorAll('.document-card');
        if (documentCards.length > 0) {
            documentCards.forEach((card, index) => {
                anime({
                    targets: card,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    delay: index * 150,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        const galleryImages = document.querySelectorAll('.gallery-item img');
        if (galleryImages.length > 0) {
            anime({
                targets: '.gallery-item img',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutCubic'
            });
        }
        
        if (document.querySelector('.audio-card')) {
            anime({
                targets: '.audio-card, .video-card',
                scale: [0.9, 1],
                opacity: [0, 1],
                duration: 800,
                delay: 300,
                easing: 'easeOutElastic(1, .8)'
            });
        }
    }
    
    function animateChronologyPage() {
        console.log('Инициализация анимаций для страницы хронологии');
        const timelineItems = document.querySelectorAll('.timeline-content, .timeline-item.detailed');
        if (timelineItems.length > 0) {
            timelineItems.forEach((item, index) => {
                anime({
                    targets: item,
                    translateX: [-30, 0],
                    opacity: [0, 1],
                    duration: 600,
                    delay: index * 100,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        const timelineYears = document.querySelectorAll('.timeline-year');
        if (timelineYears.length > 0) {
            timelineYears.forEach(year => {
                anime({
                    targets: year,
                    scale: [1, 1.1, 1],
                    duration: 2000,
                    loop: true,
                    easing: 'easeInOutSine',
                    delay: anime.stagger(500)
                });
            });
        }
    }
    
    function animateDocumentsPage() {
        console.log('Инициализация анимаций для страницы документов');
        const documentCards = document.querySelectorAll('.document-card');
        if (documentCards.length > 0) {
            documentCards.forEach((card, index) => {
                anime({
                    targets: card,
                    translateY: [50, 0],
                    opacity: [0, 1],
                    duration: 800,
                    delay: index * 150,
                    easing: 'easeOutCubic'
                });
            });
        }
        
        const documentImages = document.querySelectorAll('.document-image img');
        if (documentImages.length > 0) {
            anime({
                targets: '.document-image img',
                scale: [0.8, 1],
                opacity: [0, 1],
                duration: 600,
                delay: anime.stagger(100),
                easing: 'easeOutCubic'
            });
        }
    }
    
    function initHoverEffects() {
        console.log('Инициализация hover эффектов');
        
        // ... (остальной код hover эффектов остается без изменений)
        // Опускаю для краткости, но он должен остаться таким же
    }
    
    function initDocumentButtons() {
        console.log('Инициализация кнопок документов');
        const documentButtons = document.querySelectorAll('.document-actions .block-2-1');
        documentButtons.forEach(button => {
            if (button.closest('.documents-page')) {
                button.setAttribute('href', 'javascript:void(0)');
                button.addEventListener('click', handleDocumentButtonClick);
            }
        });
    }
    
    function handleDocumentButtonClick(e) {
        e.preventDefault();
        const documentCard = this.closest('.document-card');
        const documentTitle = documentCard.querySelector('h4').textContent;
        const documentYear = documentCard.querySelector('.document-date').textContent;
        const documentId = documentCard.id;
        redirectToDevelopmentPage(documentTitle, documentYear, documentId);
    }
    
    function redirectToDevelopmentPage(title, year, id) {
        const encodedTitle = encodeURIComponent(title);
        const encodedYear = encodeURIComponent(year);
        const encodedId = encodeURIComponent(id);
        const developmentUrl = `development.html?title=${encodedTitle}&year=${encodedYear}&id=${encodedId}`;
        window.location.href = developmentUrl;
    }
    
    function getHoverColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#791A1A';
        if (element.classList.contains('block-2-1')) return '#710909';
        if (element.classList.contains('block-2-2')) return '#D6CDCD';
        if (element.parentElement.classList.contains('footer-links')) return '#FBF1F1';
        return 'transparent';
    }
    
    function getTextColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return 'white';
        if (element.classList.contains('block-2-1')) return 'white';
        if (element.parentElement.classList.contains('footer-links')) return '#710909';
        return '#791A1A';
    }
    
    function getOriginalColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#C07878';
        if (element.classList.contains('block-2-1')) return '#791A1A';
        if (element.classList.contains('block-2-2')) return 'transparent';
        if (element.parentElement.classList.contains('footer-links')) return 'transparent';
        return 'transparent';
    }
    
    function getOriginalTextColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return 'white';
        if (element.classList.contains('block-2-1')) return 'white';
        if (element.parentElement.classList.contains('footer-links')) return '#791A1A';
        return '#791A1A';
    }
    
    // Функция для загрузки сохраненных данных подписки
    function loadSavedSubscriptionData() {
        try {
            const savedData = localStorage.getItem('userSubscription');
            if (savedData) {
                const userData = JSON.parse(savedData);
                console.log('Загружены сохраненные данные подписки:', userData);
                
                // Заполняем формы сохраненными данными
                const subscriptionForms = document.querySelectorAll('.subscription-form');
                subscriptionForms.forEach(form => {
                    const nameInput = form.querySelector('input[type="text"]');
                    const emailInput = form.querySelector('input[type="email"]');
                    const genderInputs = form.querySelectorAll('input[name="gender"]');
                    
                    if (nameInput) nameInput.value = userData.name || '';
                    if (emailInput) emailInput.value = userData.email || '';
                    
                    // Устанавливаем выбранный пол
                    if (userData.gender && genderInputs.length > 0) {
                        genderInputs.forEach(input => {
                            if (input.value === userData.gender) {
                                input.checked = true;
                            }
                        });
                    }
                });
                
                return userData;
            }
        } catch (error) {
            console.error('Ошибка при загрузке данных из localStorage:', error);
        }
        return null;
    }
    
    // Функция для сохранения данных подписки
    function saveSubscriptionData(name, email, gender = '') {
        try {
            const userData = {
                name: name,
                email: email,
                gender: gender,
                subscriptionDate: new Date().toISOString(),
                lastUpdated: new Date().toISOString()
            };
            
            localStorage.setItem('userSubscription', JSON.stringify(userData));
            console.log('Данные подписки сохранены в localStorage:', userData);
            
            // Сохраняем также в массив подписчиков (для истории)
            saveToSubscribersList(userData);
            
            return userData;
        } catch (error) {
            console.error('Ошибка при сохранении в localStorage:', error);
            return null;
        }
    }
    
    // Функция для сохранения в список подписчиков
    function saveToSubscribersList(userData) {
        try {
            let subscribers = JSON.parse(localStorage.getItem('subscribersList')) || [];
            
            // Проверяем, есть ли уже такой email в списке
            const existingIndex = subscribers.findIndex(sub => sub.email === userData.email);
            
            if (existingIndex !== -1) {
                // Обновляем существующую запись
                subscribers[existingIndex] = {
                    ...subscribers[existingIndex],
                    ...userData,
                    lastUpdated: new Date().toISOString()
                };
            } else {
                // Добавляем новую запись
                subscribers.push({
                    ...userData,
                    id: Date.now().toString(),
                    subscriptionDate: new Date().toISOString()
                });
            }
            
            localStorage.setItem('subscribersList', JSON.stringify(subscribers));
            console.log('Список подписчиков обновлен. Всего подписчиков:', subscribers.length);
        } catch (error) {
            console.error('Ошибка при сохранении в список подписчиков:', error);
        }
    }
    
    function initSubscriptionModal() {
        console.log('Инициализация всплывающего окна подписки');
        
        // Проверяем, есть ли уже сохраненная подписка
        const savedData = loadSavedSubscriptionData();
        if (savedData) {
            console.log('У пользователя уже есть сохраненная подписка');
        }
        
        const modalStyles = document.createElement('style');
        modalStyles.textContent = `
            .subscription-modal {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, 0.7);
                z-index: 1000;
                align-items: center;
                justify-content: center;
                opacity: 0;
                transition: opacity 0.3s ease;
            }            
            .subscription-modal.active {
                display: flex;
                opacity: 1;
            }            
            .modal-content {
                background-color: #FBF1F1;
                border-radius: 12px;
                padding: 40px;
                max-width: 500px;
                width: 90%;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                border: 2px solid #C07878;
                position: relative;
                transform: translateY(-50px);
                transition: transform 0.3s ease;
            }            
            .subscription-modal.active .modal-content {
                transform: translateY(0);
            }            
            .modal-header {
                text-align: center;
                margin-bottom: 25px;
            }            
            .modal-header h3 {
                color: #791A1A;
                margin-bottom: 10px;
                font-size: 24px;
            }            
            .modal-header p {
                color: #C07878;
                font-size: 16px;
            }            
            .modal-body {
                color: #333;
                margin-bottom: 25px;
                line-height: 1.6;
            }            
            .modal-footer {
                display: flex;
                justify-content: center;
                gap: 15px;
                flex-wrap: wrap;
            }           
            .modal-button {
                padding: 12px 30px;
                border-radius: 4px;
                border: none;
                font-size: 16px;
                font-weight: 500;
                cursor: pointer;
                transition: all 0.3s ease;
                min-width: 140px;
            }           
            .modal-button.confirm {
                background-color: #791A1A;
                color: white;
                border: 2px solid #791A1A;
            }
            .modal-button.confirm:hover {
                background-color: #710909;
                transform: translateY(-2px);
            }
            .modal-button.close {
                background-color: transparent;
                color: #791A1A;
                border: 2px solid #C07878;
            }
            .modal-button.close:hover {
                background-color: #F5E6E6;
                transform: translateY(-2px);
            }
            .close-icon {
                position: absolute;
                top: 15px;
                right: 15px;
                background: none;
                border: none;
                font-size: 24px;
                color: #C07878;
                cursor: pointer;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            .close-icon:hover {
                background-color: #F5E6E6;
                color: #791A1A;
                transform: rotate(90deg);
            }
            @media screen and (max-width: 768px) {
                .modal-content {
                    padding: 30px 20px;
                    width: 95%;
                }
                .modal-footer {
                    flex-direction: column;
                }
                .modal-button {
                    width: 100%;
                }
            }
            @media screen and (max-width: 480px) {
                .modal-content {
                    padding: 20px 15px;
                }
                .modal-header h3 {
                    font-size: 20px;
                }
                .modal-button {
                    padding: 10px 20px;
                    font-size: 15px;
                }
            }
        `;
        
        document.head.appendChild(modalStyles);
        
        const modalHTML = `
            <div class="subscription-modal" id="subscriptionModal">
                <div class="modal-content">
                    <button class="close-icon" id="modalCloseBtn">&times;</button>
                    <div class="modal-header">
                        <h3>Спасибо за подписку!</h3>
                        <p>История конституции России</p>
                    </div>
                    <div class="modal-body" id="modalBody">
                        <!-- Содержимое будет заполняться динамически -->
                    </div>
                    <div class="modal-footer">
                        <button class="modal-button confirm" id="modalConfirmBtn">Отлично!</button>
                        <button class="modal-button close" id="modalCloseButton">Закрыть</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', modalHTML);
        
        const subscriptionForms = document.querySelectorAll('.subscription-form');
        subscriptionForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const nameInput = this.querySelector('input[type="text"]');
                const emailInput = this.querySelector('input[type="email"]');
                const genderInput = this.querySelector('input[name="gender"]:checked');
                
                if (!nameInput.value.trim() || !emailInput.value.trim()) {
                    showModal('Пожалуйста, заполните все обязательные поля.');
                    return;
                }
                
                if (!emailInput.value.includes('@')) {
                    showModal('Пожалуйста, введите корректный email адрес.');
                    return;
                }
                
                // Сохраняем данные в localStorage
                const savedData = saveSubscriptionData(
                    nameInput.value.trim(),
                    emailInput.value.trim(),
                    genderInput ? genderInput.value : ''
                );
                
                let message = '';
                if (savedData) {
                    message = `Уважаемый(ая) <strong>${savedData.name}</strong>, благодарим вас за подписку на обновления проекта "История конституции России"!<br><br>`;
                    message += `На ваш email <strong>${savedData.email}</strong> будут приходить уведомления о новых материалах, документах и событиях.`;
                    
                    if (savedData.gender) {
                        const genderText = savedData.gender === 'male' ? 'мужской' : 'женский';
                        message += `<br><br>Пол: <strong>${genderText}</strong>`;
                    }
                    
                    message += `<br><br>Ваши данные сохранены. Вы всегда можете обновить их, заполнив форму заново.`;
                    message += `<br><br>Дата подписки: <strong>${new Date(savedData.subscriptionDate).toLocaleDateString('ru-RU')}</strong>`;
                } else {
                    message = `Уважаемый(ая) <strong>${nameInput.value}</strong>, к сожалению, произошла ошибка при сохранении ваших данных. Пожалуйста, попробуйте еще раз.`;
                }
                
                message += `<br><br>Мы ценим ваш интерес к конституционной истории России!`;
                showModal(message);
                
                this.reset();
            });
        });
        
        function showModal(message) {
            const modal = document.getElementById('subscriptionModal');
            const modalBody = document.getElementById('modalBody');
            modalBody.innerHTML = message;
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            if (typeof anime !== 'undefined') {
                anime({
                    targets: modal,
                    opacity: [0, 1],
                    duration: 300,
                    easing: 'easeOutCubic'
                });
                anime({
                    targets: '.modal-content',
                    translateY: [-50, 0],
                    opacity: [0, 1],
                    duration: 400,
                    delay: 100,
                    easing: 'easeOutBack'
                });
            }
        }
        
        function hideModal() {
            const modal = document.getElementById('subscriptionModal');
            if (typeof anime !== 'undefined') {
                anime({
                    targets: modal,
                    opacity: [1, 0],
                    duration: 300,
                    easing: 'easeOutCubic',
                    complete: function() {
                        modal.classList.remove('active');
                        document.body.style.overflow = ''; 
                    }
                });
            } else {
                modal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }
        
        document.getElementById('modalCloseBtn').addEventListener('click', hideModal);
        document.getElementById('modalCloseButton').addEventListener('click', hideModal);
        document.getElementById('modalConfirmBtn').addEventListener('click', hideModal);
        
        document.getElementById('subscriptionModal').addEventListener('click', function(e) {
            if (e.target === this) {
                hideModal();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && document.getElementById('subscriptionModal').classList.contains('active')) {
                hideModal();
            }
        });
        
        console.log('Всплывающее окно подписки инициализировано');
    }
    
    initAudioPlayer();
    initSmoothScroll();
});

function initAudioPlayer() {
    const audio = document.getElementById('gimnAudio');
    if (audio) {
        audio.addEventListener('play', function() {
            console.log('Аудио воспроизводится');
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}