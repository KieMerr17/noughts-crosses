//Feedback form is hidden until the 'feedback button' is clicked
const formOuter = document.getElementById("form-outer");
const feedbackButton = document.getElementById("feedback-button");

formOuter.style.display = "none";
//click event listener for feedback button
feedbackButton.addEventListener("click", function () {
  formOuter.style.display = "block";
  formOuter.scrollIntoView({ behavior: 'smooth' });
});


/**
 * When clicking submit on the feedback form, this function gets the inputed information
 * and sends the form to emailjs.
 */
window.onload = function() {
    document.getElementById('feedback-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // generate a five digit number for the contact_number variable
        this.contact_number.value = Math.random() * 100000 | 0;
        // these IDs are referenced in the emailjs template
        emailjs.sendForm('contact_service', 'contact_form', this).then(function() {
            console.log('SUCCESS!');
        }, function(error) {
            console.log('FAILED...', error);
        });
    });
}

