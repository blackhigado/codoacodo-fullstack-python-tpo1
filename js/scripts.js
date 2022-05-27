console.log('CODO A CODO - TPO1');

const submitBtn = document.getElementById('submit-button');

const validate = (e) => {
        e.preventDefault();

        const emailAddress = document.getElementById('email');
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (emailAddress.value.trim() === '') {
                alert('ERROR: Email cannot be blank');
                emailAddress.focus();
                return false;
        }

        if (!emailAddress.value.match(validRegex)) {
                alert('ERROR: Invalid email address.');
                emailAddress.focus();
                return false;
        }

        return true;
};

submitBtn.addEventListener('click', validate);
