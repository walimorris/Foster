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

    // News article one elements
    $newsImage1 = $('#news-image1');
    $newsHeader1 = $('#news-header1');
    $newsDate1 = $('#news-date1');
    $newsSummary1 = $('#news-summary1');
    $newsLink1 = $('#news-link1');

    // News article two elements
    $newsImage2 = $('#news-image2');
    $newsHeader2 = $('#news-header2');
    $newsDate2 = $('#news-date2');
    $newsSummary2 = $('#news-summary2');
    $newsLink2 = $('#news-link2');

    /**
     * This portion of home page should run immediately each day when user lands on page.
     * The exception is if the dynamic news feature elements are cached because the articles
     * are still on the same day, page refresh should use cached data. Rather than select
     * top 2 results, should we chose random results from all article results? This should be
     * cached for quicker load!
     * @type {*[]}
     */
    const articles = [];
    fetch('/api/nyTimesArticles').then(response => response.json()).then(data => {
        const fullData = data;
        const results = fullData.data.response.docs;
        console.log(results);

        // pull first two articles
        for (let i = 0; i < 2; i++) {
            articles.push(results[i]);
        }
        disectTimesArticles(articles);
    });

    function disectTimesArticles(articleList) {
        const imageDomain = "https://www.nytimes.com/";

        const image1 = imageDomain + articleList[0].multimedia[2].url;
        const header1 = articleList[0].headline.main;
        const date1 = articleList[0].pub_date.substring(0, articleList[0].pub_date.lastIndexOf('T'));
        const summary1 = articleList[0].abstract;
        const link1 = articleList[0].web_url;

        const image2 = imageDomain + articleList[1].multimedia[2].url;
        const header2 = articleList[1].headline.main;
        const date2 = articleList[1].pub_date.substring(0, articleList[0].pub_date.lastIndexOf('T'));
        const summary2 = articleList[1].abstract;
        const link2 = articleList[1].web_url;

        $newsImage1.attr('src', image1);
        $newsHeader1.text(header1);
        $newsDate1.text(date1);
        $newsSummary1.text(summary1);
        $newsLink1.attr('href', link1);

        $newsImage2.attr('src', image2);
        $newsHeader2.text(header2);
        $newsDate2.text(date2);
        $newsSummary2.text(summary2);
        $newsLink2.attr('href', link2);

        console.log('articles updated');
    }

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