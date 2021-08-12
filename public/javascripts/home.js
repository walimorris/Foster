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

    buildArticleSection();

    function buildArticleSection() {
        const articles = [];
        fetch('/api/nyTimesArticles').then(response => response.json()).then(data => {
            const fullData = data;
            const results = fullData.data.response.docs;

            const randomIndex1 = getRandomNumberInRange(10, 11);
            const randomIndex2 = getRandomNumberInRange(10, randomIndex1);

            articles.push(results[randomIndex1]);
            articles.push(results[randomIndex2]);
            disectTimesArticles(articles);
        });
    }

    /**
     * Get random number between 0 and chosen param x
     * @param x max number, not inclusive
     * @param y number which shouldn't be returned
     * @returns {number}
     */
    function getRandomNumberInRange(x, y) {
        let num = y;
        while (num === y) {
            num = Math.floor(Math.random() * x);
        }
        return num;
    }

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