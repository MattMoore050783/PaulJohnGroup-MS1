
//Send information to EMail.JS
function sendMail(contactForm) {
    emailjs.send("gmail", "pauljohn", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "from_phoneno": contactForm.phoneno.value,
        "from_reason": contactForm.reason.value,
        "from_info": contactForm.info.value
    })
  
    .then(
// Change button textto green and display message Sign up Complete
        function () {
            let sentButton = document.getElementById('contact-button');
            sentButton.style.backgroundColor = "Red";
            sentButton.innerHTML = "Message Sent";

        },
// On error, browser alert
        function (error) {
            alert("Whoops! An error occurred, please try again.", error);
        });
// Clear form after submitting
        document.getElementById('contactForm').reset();
return false;
}
