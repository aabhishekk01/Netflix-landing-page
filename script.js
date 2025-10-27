document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const getStartedBtn = document.getElementById('getStartedBtn');

    getStartedBtn.addEventListener('click', function() {
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === '') {
            alert('Please enter your email address.');
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
        } else {
            alert('Thank you! We will send you more information soon.');
            emailInput.value = '';
        }
    });
     });
