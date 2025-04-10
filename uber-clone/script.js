document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Date picker functionality
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }

    // Form validation
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Add your form submission logic here
            console.log('Form submitted');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Cookie consent
    const cookieConsent = document.getElementById('cookie-notice');
    const acceptCookies = document.querySelector('button[onclick="acceptCookies()"]');
    const rejectCookies = document.querySelector('button[onclick="rejectCookies()"]');

    if (cookieConsent && acceptCookies && rejectCookies) {
        if (!localStorage.getItem('cookieConsent')) {
            cookieConsent.classList.remove('hidden');
        }

        acceptCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'accepted');
            cookieConsent.classList.add('hidden');
        });

        rejectCookies.addEventListener('click', () => {
            localStorage.setItem('cookieConsent', 'rejected');
            cookieConsent.classList.add('hidden');
        });
    }

    // Language selector
    const languageSelect = document.querySelector('.language-select');
    if (languageSelect) {
        languageSelect.addEventListener('change', (e) => {
            const language = e.target.value;
            // Add your language change logic here
            console.log(`Language changed to: ${language}`);
        });
    }

    // Location search autocomplete simulation
    const locationInputs = document.querySelectorAll('input[placeholder*="location"]');
    locationInputs.forEach(input => {
        input.addEventListener('focus', () => {
            console.log('Location search focused');
        });

        input.addEventListener('input', (e) => {
            // Add your location search logic here
            console.log(`Searching for: ${e.target.value}`);
        });
    });
});
