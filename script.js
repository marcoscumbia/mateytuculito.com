document.addEventListener('DOMContentLoaded', function() {
    const learnMoreLink = document.getElementById('learn-more');
    const portfolioSection = document.getElementById('portfolio');
    const aboutMeSection = document.getElementById('about-me');
    const extendedAboutMeSection = document.getElementById('extended-about-me');
    const portfolioNavLink = document.querySelector('nav ul li a[href="#portfolio"]');
    const titleLink = document.querySelector('.title h1');
    const contactLink = document.querySelector('nav ul li a[href="#contact"]');
    const contactMeLink = document.querySelector('#extended-about-me a[href="#contact"]');
    const closeButton = document.querySelector('.popup-close');

    learnMoreLink.addEventListener('click', function(event) {
        event.preventDefault();
        portfolioSection.style.display = 'none';
        aboutMeSection.style.display = 'none';
        extendedAboutMeSection.style.display = 'block';
    });

    function showMainSections() {
        portfolioSection.style.display = 'block';
        aboutMeSection.style.display = 'block';
        extendedAboutMeSection.style.display = 'none';
    }

    portfolioNavLink.addEventListener('click', function(event) {
        event.preventDefault();
        showMainSections();
    });

    titleLink.addEventListener('click', function(event) {
        event.preventDefault();
        showMainSections();
    });

    contactLink.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup();
    });

    contactMeLink.addEventListener('click', function(event) {
        event.preventDefault();
        openPopup();
    });

    closeButton.addEventListener('click', function() {
        closePopup();
    });

    function openPopup() {
        const popup = document.getElementById('contact-popup');
        popup.style.display = 'block';
    }

    function closePopup() {
        const popup = document.getElementById('contact-popup');
        popup.style.display = 'none';
    }
});
