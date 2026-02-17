// Main JavaScript file for MAAKWERK website

document.addEventListener('DOMContentLoaded', function() {
    console.log('MAAKWERK website loaded');
    
    // Add event listeners for navigation
    setupNavigation();
    
    // Setup form handler
    setupFormHandler();
});

function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Highlight current page
            navLinks.forEach(l => l.style.color = 'white');
            this.style.color = '#3498db';
        });
    });
}

function setupFormHandler() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Log form data (in production, this would be sent to a server)
            console.log('Form submitted:', {
                name: name,
                email: email,
                message: message
            });
            
            // Show success message
            alert('Dank je wel! Je bericht is ontvangen. We nemen zo snel mogelijk contact op.');
            
            // Reset form
            contactForm.reset();
        });
    }
}
