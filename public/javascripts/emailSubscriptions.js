const emailSubscriptions = $(function () {
    "use strict"

    const _id = 'id';
    const _nocolor = 'rgba(0, 0, 0, 0)';
    const _white = 'rgba(255, 255, 255)';
    const _bg = 'background-color';
    const _none = 'none';
    const css_color = 'color';
    const transparent = 'transparent';
    const t_decoration = 'text-decoration';
    const tourCtaButtonColor = '#6495ed';
    const footerHoverColor = '#d3d3d3';
    const footerLinks = 'footer_links';
    const footerLinksClass = 'text-white';

    /**
     * Listens for mouseover interaction on footer's bottom links.
     */
    $('a').mouseover(function (e) {
        const element = e.target;
        if (element.hasAttribute(_id)) {
            const elementId = element.attributes.id.value;
            if (elementId.startsWith(footerLinks)) {
                hoverFooterLink(elementId, footerHoverColor);
            }
        }
    });

    /**
     * Listens for mouseover interaction on tour cta button.
     */
    $('#tour-cta-button').mouseover(function (e) {
        $(this).css(_bg, tourCtaButtonColor);
        $(this).mouseout(function (e) {
            $(this).css(_bg, transparent);
        });
    });

    /**
     * Changes text color for given footer link element that's hovered. Removes color 
     * on mouseout to original color.
     * @param elementId element's id attribute
     * @param color background color
     */
    function hoverFooterLink(elementId, color) {
        const $element = $(`#${elementId}`); 
        const originalColor = $element.css(css_color);
        
        // remove original bootstrap class and decoration
        $element.removeClass(footerLinksClass)
            .css(t_decoration, _none).css(css_color, color);

        // listen for element mouse out and append original bootstrap class
        $element.mouseout(function () {
            $(this).css(css_color, originalColor).addClass(footerLinksClass);
        });
    }

    /**
     * Listens for email subscriptions and on new submission sends a post request
     * to add email to subscription list.
     */
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
                    $('#email-subscription-form-label')
                        .text('Sorry, we had a problem submitting your email. Please try again.');
                    throw new Error('Error processing email submission form.');
                }
            })
            .then(json => $('#email-subscription-form-label').text('Thank you for subscribing!'))
            .catch(err => $('#email-subscription-form-label')
                    .text('Sorry, we had a problem submitting your email. Please try again.'));
        });
    }
    loadEmailSubscriptions(); 
});