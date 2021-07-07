const emailSubscriptions = $(function () {
    "use strict"

    function loadEmailSubscriptions() {
        $('#email-subscriptions-form').submit( function(e) {
            e.preventDefault();
            const form = e.target;

            const body = JSON.stringify({
                emailSubscriber: form.elements.emailSubscriber.value,
                page: form.elements.page.value
            });
            const headers = { 'Content-Type': 'application/json' };

            fetch('/api/emailSubscriptions', { method: 'post', headers, body })
              .then( response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(`Request failed with status ${response.status}`);
                    $('#email-subscription-form-label').text(`Error ${response.status}`);
                }
            })
            .then(json => {
                $('#email-subscription-form-label').text('Thank you for subscribing!');
            })
            .catch(err => {
                $('#email-subscription-form-label').text('Error: ' + err);
            });
        });
    }
    
    loadEmailSubscriptions(); 
});