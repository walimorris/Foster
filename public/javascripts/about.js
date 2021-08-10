const aboutpage = $(function () {
    console.log('On about page');

    $contactForm = $('#contact-form');


    $contactForm.submit( (e) => {
        e.preventDefault();

        const form = e.target;

        const body = JSON.stringify({
            firstname: form.elements.firstname.value,
            lastname: form.elements.lastname.value,
            email: form.elements.email.value,
            phonenumber: form.elements.phonenumber.value,
            message: form.elements.message.value
        });
        const headers = {'Content-Type': 'application/json'};

        fetch('/api/aboutContactForm', { method: 'post', headers, body })
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    console.log('Bad request');
                } else {
                    console.log('good request');
                    console.log(response);
                }
            })
            .catch(err => {
                console.log('some error occurred!');
            });
    });
});