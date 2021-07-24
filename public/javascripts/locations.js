const locationsPage = $(function () {

    initMap();

    $stateSelected = $('#states');
    $cityList = $('#city');
    $geoLocateMeButton = $('#geolocate-me-button');
    $googleLocateMeButton = $('#googlelocate-me-button');
    $locateMeErrorMsg = $('#locate-me-error-msg');

    let selectMap = new CityMap('Alabama');
    const states = selectMap.getStates();
    createStateOptions(states);

    /**
     * updates city options on new state selection.
     */
    $stateSelected.click( function (e) {
        console.log($cityList.val());
        removeCurrentCities();

        selectMap.setState($stateSelected.val());
        const cities = selectMap.getCities();
        appendCurrentCities(cities);
    });

    /**
     * Uses internal HTML Geolocation on locate me button click.
     */
    $geoLocateMeButton.click( function (e) {
        geoLocateMe();
    });

    /**
     * Uses google maps api to locate user by city/state.
     */
    $googleLocateMeButton.click( function (e) {
        e.preventDefault();
        if ($stateSelected.val() !== null && $cityList.val() !== null) {
            locateByCityState($cityList.val(), $stateSelected.val());
        } else {
            // handle with some info text
            if ($stateSelected.val() === null) {
                console.log('Please select state before submitting.');
            } else if($cityList.val() === null) {
                console.log('Please select city before submitting.');
            } else {
                console.log('Please select both city and state before submitting.');
            }
        }
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
        locateByLatLong(pos.coords.latitude, pos.coords.longitude);
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
    function locateByLatLong(latitude, longitude) {
        try {
            googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 8,
            });

            // position user on map
            let position1 = {
                position: { lat: latitude, lng: longitude },
                map: googleMap
            };
            let marker1 = new google.maps.Marker(position1);
        } catch(error) {
            console.log('Error: ' + error)
        }
    }

    /**
     * Locates user with google maps api by supplying city/state.
     * @param city
     * @param state
     */
    function locateByCityState(city, state) {
        try {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address' : city + ', ' + state }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                        center: { lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() },
                        zoom: 8
                    });
                } else {
                    // handle error
                    console.log('Error handling locate me with google map');
                }
            });
        } catch (error) {
            console.log('Error fetching location using google geocoder!');
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