document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal');
    const navLinks = document.querySelectorAll('.nav-links a');
    const tabs = document.querySelectorAll('.tab');
    const panels = document.querySelectorAll('.tab-panel');
    const modal = document.getElementById('leadModal');
    const openModalButtons = document.querySelectorAll('[data-open-modal]');
    const closeModalButton = document.querySelector('.modal-close');
    const toTopButton = document.querySelector('.to-top');

    const revealOnScroll = () => {
        const triggerLine = window.innerHeight * 0.85;
        revealElements.forEach((element) => {
            if (element.getBoundingClientRect().top < triggerLine) {
                element.classList.add('visible');
            }
        });
    };

    const setActiveNav = () => {
        let currentId = '';
        navLinks.forEach((link) => {
            const section = document.querySelector(link.getAttribute('href'));
            if (section && section.getBoundingClientRect().top <= 140) {
                currentId = `#${section.id}`;
            }
        });

        navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === currentId);
        });
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.tab;
            tabs.forEach((item) => item.classList.remove('active'));
            panels.forEach((panel) => panel.classList.remove('active'));
            tab.classList.add('active');
            const activePanel = document.getElementById(target);
            if (activePanel) {
                activePanel.classList.add('active');
            }
        });
    });

    const openModal = () => {
        modal.classList.add('open');
        modal.setAttribute('aria-hidden', 'false');
    };

    const closeModal = () => {
        modal.classList.remove('open');
        modal.setAttribute('aria-hidden', 'true');
    };

    openModalButtons.forEach((button) => button.addEventListener('click', openModal));
    closeModalButton.addEventListener('click', closeModal);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    toTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    window.addEventListener('scroll', () => {
        revealOnScroll();
        setActiveNav();
        toTopButton.classList.toggle('show', window.scrollY > 420);
    });

    revealOnScroll();
    setActiveNav();
});
