// JavaScript for Netflix Landing Page

document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('emailInput');
    const getStartedBtn = document.getElementById('getStartedBtn');

    // Email validation and alert
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

    // Optional: Smooth scrolling for anchor links (if added later)
    // const links = document.querySelectorAll('a[href^="#"]');
    // links.forEach(link => {
    //     link.addEventListener('click', function(e) {
    //         e.preventDefault();
    //         const target = document.querySelector(this.getAttribute('href'));
    //         target.scrollIntoView({ behavior: 'smooth' });
    //     });
    // });
});
