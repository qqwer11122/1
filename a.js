document.addEventListener("DOMContentLoaded", function() {
    // Пример: анимация при загрузке страницы
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    });

    // Функция для появления секций при прокрутке
    const appearOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.8;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Инициализация анимации при загрузке
    appearOnScroll();
    
    // Добавляем обработчик прокрутки
    window.addEventListener("scroll", appearOnScroll);

    // Пример: анимация при наведении на ссылки
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease";
        });

        link.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
        });
    });

    // Пример: alert при переходе по ссылке
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            alert("Переход к разделу: " + this.textContent);
        });
    });
});