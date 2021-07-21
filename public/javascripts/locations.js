const locationsPage = $(function () {

    $stateSelected = $('#states');
    $cityList = $('#city');

    // example map for visual, refactor this into a helper class
    let cityMap = new Map();
    cityMap.set('Washington', ['Seattle', 'Spokane', 'Olympia']);
    cityMap.set('Ohio', ['Cincinnati', 'Columbus', 'Dayton']);


    $stateSelected.click( function (e) {
        removeCurrentCities();

        const cities = cityMap.get($stateSelected.val().toString());
        appendCurrentCities(cities);
    });

    // removes all city options of form
    function removeCurrentCities() {
        $cityList.empty();
    }

    /**
     * Appends a list of cities based on State selection.
     * @param cities
     */
    function appendCurrentCities(cities) {
        cities.forEach( function (city) {
            $cityList.append('<option>' + city + '</option>');
        });
    }
});