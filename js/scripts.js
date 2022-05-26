console.log('CODO A CODO - TPO1');

const submitBtn = document.getElementById('submit');

const validate = (e) => {
        e.preventDefault();
        alert('Probando');
        return true; // Can submit the form data to the server
};

submitBtn.addEventListener('click', validate);
