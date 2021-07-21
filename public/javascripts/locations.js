const locationsPage = $(function () {

    $stateSelected = $('#states');
    $cityList = $('#city');

    let map = new CityMap('Alabama');
    const states = map.getStates();
    createStateOptions(states);

    /**
     * updates city options on new state selection.
     */
    $stateSelected.click( function (e) {
        removeCurrentCities();

        map.setState($stateSelected.val());
        const cities = map.getCities(); 
        appendCurrentCities(cities);
    });

    /**
     * Build states in form's option list.
     * @param states
     */
    function createStateOptions(states) {
        states.forEach( function (state) {
            $stateSelected.append('<option>' + state + '</option>');
        });
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

    /**
     * Removes current list of cities from form.
     */
    function removeCurrentCities() {
        $cityList.empty();
    }
});