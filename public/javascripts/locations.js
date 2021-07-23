const locationsPage = $(function () {

    initMap();

    $stateSelected = $('#states');
    $cityList = $('#city');
    $locateMeButton = $('#locate-me-button');
    $locateMeErrorMsg = $('#locate-me-error-msg');

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

    /**
     * Uses internal HTML Geolocation on locate me button click.
     */
    $locateMeButton.click( function (e) {
        geoLocateMe();
    });

    /**
     * Uses internal HTML Geolocation API if it's supported.
     */
    function geoLocateMe() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(writePosition);
        } else {
            $locateMeErrorMsg.text('Geolocating not supported');
        }
    }

    /**
     * Updates ininitial Google Map to user location after clicking Locate Me button
     * and uses internal HTML Geolocation API.
     * @param pos
     */
    function writePosition(pos) {
        locateMeOnMap(pos.coords.latitude, pos.coords.longitude);
    }

    /**
     * Initial loaded Google Map.
     */
    function initMap() {
        try {
            var googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                center: { lat: -34.397, lng: 150.644 },
                zoom: 8,
            });
        } catch(error) {
            // add some mark up, in the case, google maps does not load - how to handle?
            console.log("Error: " + error);
        }
    }

    /**
     * Uses internal HTML Geolocation API to locate user on google maps. Also
     * finds the nearest foster/adoption agencies in the area.
     * @param latitude
     * @param longitude
     */
    function locateMeOnMap(latitude, longitude) {
        try {
            googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 8,
            });

            // position user on map
            var flag = 'http://maps.google.com/mapfiles/ms/icons/purple-dot.png';
            let position1 = {
                position: { lat: latitude, lng: longitude },
                map: googleMap, icon: flag, title: 'You'
            };
        } catch(error) {
            console.log('Error: ' + error)
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