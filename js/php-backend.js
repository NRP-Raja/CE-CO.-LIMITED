// Alternative contact form functionality using PHP backend
// Use this instead of EmailJS if you prefer server-side email handling

// Contact form functionality with PHP backend
function initContactFormPHP() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Show loading state
            const submitBtn = contactForm.querySelector('.btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Get form data
            const formData = new FormData(contactForm);
            const contactData = {
                name: formData.get('name'),
                phone: formData.get('phone'),
                email: formData.get('email'),
                serviceNeeded: formData.get('serviceNeeded'),
                message: formData.get('message')
            };

            // Send to PHP handler
            fetch('contact-handler.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Reset form and button
                    contactForm.reset();
                    showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
                } else {
                    showNotification(data.message || 'Failed to send message. Please try again.', 'error');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showNotification('Failed to send message. Please try again or call us directly.', 'error');
            })
            .finally(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            });
        });
    }
}

// Quote calculator functionality with PHP backend
function sendQuoteEmailPHP(email, quoteData) {
    const requestData = {
        ...quoteData,
        email: email
    };

    fetch('quote-handler.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            showNotification('Quote request sent! We\'ll contact you soon with a detailed quote.', 'success');
        } else {
            showNotification(data.message || 'Failed to send quote request.', 'error');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Failed to send quote request. Please try contacting us directly.', 'error');
    });
}

// Instructions for using PHP backend:
// 1. Upload contact-handler.php and quote-handler.php to your web server
// 2. Replace initContactForm() with initContactFormPHP() in main.js
// 3. Replace the sendQuoteEmail() call with sendQuoteEmailPHP() in main.js
// 4. Make sure your web server supports PHP and mail() function
