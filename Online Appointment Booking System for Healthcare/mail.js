// mail.js

// Initialize EmailJS with your user ID
emailjs.init("YOUR_PUBLIC_KEY"); // Replace "YOUR_EMAILJS_USER_ID" with your actual user ID

// Function to send the appointment form data as an email
function sendEmail(formData) {
    // Prepare the template parameters for the email
    const templateParams = {
        from_name: "Pro Healthcare", // Replace with the hospital's name or identifier
        to_email: formData.email, // Use the email address provided in the form data as the recipient
        subject: "Normal Checkup Appointment Request",
        message: `
            Name: ${formData.name}
            Age: ${formData.age}
            Appointment Date: ${formData.appointmentDate}
            Checkup Type: ${formData.checkupType}
            Appoined Time: ${formData.time}
            Payment Mode: ${formData.paymentMode}
        `
    };

    // Send the email using EmailJS
    return emailjs.send("service_id", "template_id", templateParams);
}
