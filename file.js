// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Validate the form fields (add your own validation logic)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }

    // Additional validation logic can be added here

    // Assuming a successful submission
    alert('Form submitted successfully!'); // Replace this with your actual submission logic

    // Reset the form after submission (optional)
    form.reset();
});
