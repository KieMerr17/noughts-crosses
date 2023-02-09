const formOuter = document.getElementById("form-outer");
const feedbackButton = document.getElementById("feedback-button");

formOuter.style.display = "none";

(function() {
    //https://dashboard.emailjs.com/admin/account
    emailjs.init('XWk8_NsujiDSac5Nk');
})();

//click event listener for feedback button
feedbackButton.addEventListener("click", function () {
    formOuter.style.display = "block";
    formOuter.scrollIntoView({ behavior: 'smooth' });
});

// Send form data to email service after user submits the form
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000;
    /**Uses the values from the emailJS form template to send the email through emailJS
     * Following sending of the form, alerts displayed dependant on outcome. 
     **/
    /* global emailjs */
    emailjs.sendForm('contact_service', 'contact_form', this).then(function() {
        console.log('SUCCESS!');
        formOuter.style.display = "none";
        alert("Thank you for your feedback!");
    }, function(error) {
        console.log('FAILED...', error);
    });
});