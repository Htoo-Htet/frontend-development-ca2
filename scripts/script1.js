function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const feedback = document.getElementById('feedback').value;

    if (firstName.trim() === '' || lastName.trim() === '') {
      alert('Please enter your full name.');
      return false;
    }

    if (email.trim() === '') {
      alert('Please enter your email address.');
      return false;
    }

    if(feedback.trim() === ''){
      alert('Please provide your feedback.');
      return false;
    }

    alert('Thanks for the feedback!')
    return true;
}