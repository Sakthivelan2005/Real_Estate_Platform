document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
      const phone = document.getElementById("phone").value;
  
      // Display confirmation message
      alert(`Thank you, ${name}! Your message "${message}" has been submitted. We'll get back to you at ${email} shortly. or We will contact you at ${phone}. Thank you for your message.`);
      
      // Reset form fields
      form.reset();
    });
  });
  