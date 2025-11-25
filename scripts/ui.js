// Shared UI script for modals and language switching
document.addEventListener('DOMContentLoaded', function () {
    function openModal(type) {
        const modalId = type === 'privacy' ? 'privacyModal' : 'termsModal';
        const el = document.getElementById(modalId);
        if (el) el.style.display = 'block';
    }

    function closeModal(type) {
        const modalId = type === 'privacy' ? 'privacyModal' : 'termsModal';
        const el = document.getElementById(modalId);
        if (el) el.style.display = 'none';
    }

    // Expose to global for inline onclick handlers in HTML
    window.openModal = openModal;
    window.closeModal = closeModal;

    // Close modals when clicking outside
    window.addEventListener('click', function (event) {
        const privacyModal = document.getElementById('privacyModal');
        const termsModal = document.getElementById('termsModal');
        if (privacyModal && event.target === privacyModal) {
            privacyModal.style.display = 'none';
        }
        if (termsModal && event.target === termsModal) {
            termsModal.style.display = 'none';
        }
    });

    // Language select navigation
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.addEventListener('change', function () {
            const selectedLanguage = this.value;
            if (selectedLanguage === 'de') {
                window.location.href = 'De.html';
            } else if (selectedLanguage === 'no') {
                window.location.href = 'index.html';
            } else if (selectedLanguage === 'en') {
                window.location.href = 'En.html';
            }
        });
    }
});
