function sendMail(contactForm) { // Passing in the form as a parameter 
    emailjs.send("service_j50w5oq","template_m3k8pfq",{// x3 keys below match the email parameters
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "Project_Request": contactForm.projectsummary.value
    })
    .then( // Continuing with the 'Promise Approach > When & Then'
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}