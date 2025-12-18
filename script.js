document.addEventListener('DOMContentLoaded', function() {
    if (typeof anime === 'undefined') {
        console.log('Anime.js не загружена, используются базовые анимации');
        initBasicAnimations();
    } else {
        console.log('Anime.js загружена, инициализируем продвинутые анимации');
        initAnimeAnimations();
    }
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
        const documentCards = document.querySelectorAll('.document-card');
        documentCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -10,
                        scale: 1.02,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1.05,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1.05)';
                        img.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    }
                }
            });
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1)';
                        img.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }
                }
            });
        });
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1.05,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }
            });
            img.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }
            });
        });
        const navLinks = document.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getHoverColor(this),
                        color: getTextColor(this),
                        scale: 1.05,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getHoverColor(this);
                    this.style.color = getTextColor(this);
                    this.style.transform = 'scale(1.05)';
                }
            });
            link.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getOriginalColor(this),
                        color: getOriginalTextColor(this),
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getOriginalColor(this);
                    this.style.color = getOriginalTextColor(this);
                    this.style.transform = 'scale(1)';
                }
            });
        });
        const timelineItems = document.querySelectorAll('.timeline-content, .timeline-item.detailed');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateX: 10,
                        backgroundColor: '#FFF5F5',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateX(5px)';
                    this.style.backgroundColor = '#FFF5F5';
                }
            });
            item.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateX: 0,
                        backgroundColor: '#FFFFFF',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateX(0)';
                    this.style.backgroundColor = '#FFFFFF';
                }
            });
        });
        const mediaCards = document.querySelectorAll('.audio-card, .video-card');
        mediaCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -5,
                        scale: 1.02,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                }
            });
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
        if (typeof anime !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 800,
                            easing: 'easeOutCubic'
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            const scrollElements = document.querySelectorAll(
                '.document-card, .audio-card, .video-card, .gallery-item, .timeline-item, .document-image'
            );
            scrollElements.forEach(el => {
                observer.observe(el);
            });
        }
    }
    function getHoverColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#791A1A';
        if (element.classList.contains('block-2-1')) return '#710909';
        if (element.classList.contains('block-2-2')) return '#D6CDCD';
        if (element.parentElement.classList.contains('footer-links')) return '#FBF1F1';
        return '#D6CDCD';
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
document.addEventListener('DOMContentLoaded', function() {
    if (typeof anime === 'undefined') {
        console.log('Anime.js не загружена, используются базовые анимации');
        initBasicAnimations();
    } else {
        console.log('Anime.js загружена, инициализируем продвинутые анимации');
        initAnimeAnimations();
    }
    initSubscriptionModal();
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
        const documentCards = document.querySelectorAll('.document-card');
        documentCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -10,
                        scale: 1.02,
                        boxShadow: '0 15px 30px rgba(0,0,0,0.15)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1.05,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1.05)';
                        img.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                    }
                }
            });
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                    const img = this.querySelector('img');
                    if (img) {
                        anime({
                            targets: img,
                            scale: 1,
                            duration: 400,
                            easing: 'easeOutCubic'
                        });
                    }
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    const img = this.querySelector('img');
                    if (img) {
                        img.style.transform = 'scale(1)';
                        img.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                    }
                }
            });
        });
        // 2. Эффекты для изображений в галерее (главная страница)
        const galleryImages = document.querySelectorAll('.gallery-item img');
        galleryImages.forEach(img => {
            img.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1.05,
                        boxShadow: '0 8px 25px rgba(0,0,0,0.3)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1.05)';
                    this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.3)';
                }
            });
            img.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        scale: 1,
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        duration: 400,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'scale(1)';
                    this.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
                }
            });
        });
        const navLinks = document.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getHoverColor(this),
                        color: getTextColor(this),
                        scale: 1.05,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getHoverColor(this);
                    this.style.color = getTextColor(this);
                    this.style.transform = 'scale(1.05)';
                }
            });
            link.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        backgroundColor: getOriginalColor(this),
                        color: getOriginalTextColor(this),
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.backgroundColor = getOriginalColor(this);
                    this.style.color = getOriginalTextColor(this);
                    this.style.transform = 'scale(1)';
                }
            });
        });
        const timelineItems = document.querySelectorAll('.timeline-content, .timeline-item.detailed');
        timelineItems.forEach(item => {
            item.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateX: 10,
                        backgroundColor: '#FFF5F5',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateX(5px)';
                    this.style.backgroundColor = '#FFF5F5';
                }
            });
            item.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateX: 0,
                        backgroundColor: '#FFFFFF',
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateX(0)';
                    this.style.backgroundColor = '#FFFFFF';
                }
            });
        });
        const mediaCards = document.querySelectorAll('.audio-card, .video-card');
        mediaCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: -5,
                        scale: 1.02,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(-5px) scale(1.02)';
                }
            });
            card.addEventListener('mouseleave', function() {
                if (typeof anime !== 'undefined') {
                    anime({
                        targets: this,
                        translateY: 0,
                        scale: 1,
                        duration: 300,
                        easing: 'easeOutCubic'
                    });
                } else {
                    this.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
        if (typeof anime !== 'undefined') {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        anime({
                            targets: entry.target,
                            translateY: [50, 0],
                            opacity: [0, 1],
                            duration: 800,
                            easing: 'easeOutCubic'
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });
            const scrollElements = document.querySelectorAll(
                '.document-card, .audio-card, .video-card, .gallery-item, .timeline-item, .document-image'
            );
            scrollElements.forEach(el => {
                observer.observe(el);
            });
        }
    }
    function getHoverColor(element) {
        if (element.classList.contains('burger-menu_mobile-button')) return '#791A1A';
        if (element.classList.contains('block-2-1')) return '#710909';
        if (element.classList.contains('block-2-2')) return '#D6CDCD';
        if (element.parentElement.classList.contains('footer-links')) return '#FBF1F1';
        return '#D6CDCD';
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
    function initSubscriptionModal() {
        console.log('Инициализация всплывающего окна подписки');
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
                let message = `Уважаемый(ая) <strong>${nameInput.value}</strong>, благодарим вас за подписку на обновления проекта "История конституции России"!<br><br>`;
                message += `На ваш email <strong>${emailInput.value}</strong> будут приходить уведомления о новых материалах, документах и событиях.`;
                if (genderInput) {
                    const genderText = genderInput.value === 'male' ? 'мужской' : 'женский';
                    message += `<br><br>Пол: <strong>${genderText}</strong>`;
                }
                message += `<br><br>Мы ценим ваш интерес к конституционной истории России!`;
                showModal(message);
                this.reset();
                console.log('Данные подписки:', {
                    name: nameInput.value,
                    email: emailInput.value,
                    gender: genderInput ? genderInput.value : 'не указан'
                });
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