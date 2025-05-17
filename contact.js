document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // Additional code here
    


/*const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload*/

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Check if fields are filled
    if (!name.value || !email.value || !message.value) {
        // Highlight empty fields with red border and hover
        if (!name.value) name.style.border = "2px solid red";
        if (!email.value) email.style.border = "2px solid red";
        if (!message.value) message.style.border = "2px solid red";
        
    } else {
        // Remove red border if field is filled
        name.style.border = "1px solid #ccc";
        email.style.border = "1px solid #ccc";
        message.style.border = "1px solid #ccc";
    }

    // Send email using EmailJS or any other email service
    sendEmail(name.value, email.value, message.value);
});
});

// Function to send email (you'll need to configure EmailJS)
function sendEmail(name, email, message) {
    // Use EmailJS or any other email service
    // Example with EmailJS:
    emailjs.send("service_kxedz12","template_ednqxiw", {
        from_name : name,
        email_id : email,
        message : message
    }).then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send the message. Try again.");
    });
}


  

