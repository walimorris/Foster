const homepage = $(function () {

    const _bg = 'background-color';
    const css_color = 'color';
    const _black = '#000000';
    const _border = 'border';
    const transparent = 'transparent';
    const _white = 'rgba(255, 255, 255)';
    const tourCtaButtonColor = '#eeee9b';
    const tourCtaButtonBorder = '3px solid #ffffff';
    const tourCtaButtonBorderHover = '3px solid #000000';

    // dynamically load new ny times articles
    window.addEventListener('load', () => {
        const articles = [];
        fetch('/api/nyTimesArticles')
            .then(response => response.json())
            .then(data => {
                const fullData = data;
                const results = fullData.data.response.docs;
                console.log(results);
                for (let i = 0; i < results.length; i++) {
                    articles.push(results[i]);
                }
            });

        console.log(articles);
    });

    /**
     * Listens for mouseover interaction on tour cta button.
     */
    $('#tour-cta-button').mouseover(function (e) {
        $(this).css(_bg, tourCtaButtonColor).css(css_color, _black)
            .css(_border, tourCtaButtonBorderHover);
        $(this).mouseout(function (e) {
            $(this).css(_bg, transparent).css(css_color, _white)
                .css(_border, tourCtaButtonBorder);
        });
    });

    $('#tour-cta-button').click(function () {
        window.location.href = 'http://localhost:3000/locations';
    });
});