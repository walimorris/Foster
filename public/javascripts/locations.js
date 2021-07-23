const locationsPage = $(function () {

    initMap();

    $stateSelected = $('#states');
    $cityList = $('#city');

    let selectMap = new CityMap('Alabama');
    const states = selectMap.getStates();
    createStateOptions(states);

    /**
     * updates city options on new state selection.
     */
    $stateSelected.click( function (e) {
        removeCurrentCities();

        selectMap.setState($stateSelected.val());
        const cities = selectMap.getCities();
        appendCurrentCities(cities);
    });

    function initMap() {
        try {
            var googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                center: {lat: -34.397, lng: 150.644},
                zoom: 8,
            });
        } catch(error) {
            // add some mark up, in the case, google maps does not load - how to handle?
            console.log("Error: " + error);
        }
    }

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