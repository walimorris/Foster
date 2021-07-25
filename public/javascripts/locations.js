const locationsPage = $(function () {

    initMap();

    $stateDropDown = $('#states');
    $cityDropDown = $('#city');
    $geoLocateMeButton = $('#geolocate-me-button');
    $googleLocateMeButton = $('#googlelocate-me-button');

    // error elements
    $googleLocateMeErrorElement = $('#googlelocate-me-error').hide();
    $geoLocateMeErrorElement = $('#geolocate-me-error').hide();

    // error messages
    const stateDropDownErrorMsg = 'Please select state before submitting location';
    const cityDropDownErrorMsg = 'Please select city before submitting location';
    const cityStateDropDownErrorMsg = 'Please select city and state before submitting location';
    const geoLocateErrorMsg = 'Geolocation functionality unavailable, please select city and state';

    // Instantiate new CityMap Object and build city/state dropdown
    let selectMap = new CityMap();
    const states = selectMap.getStates();
    buildStateDropDown(states);

    /**
     * Removes current cities appened to cities dropdown, and appends new
     * cities to cities dropdown based on selected state from state
     * dropdown.
     */
    $stateDropDown.click( function (e) {
        removeCitiesFromDropDown();

        selectMap.setState($stateDropDown.val());
        const cities = selectMap.getCities();
        appendCitiesToDropDown(cities);
    });

    /**
     * When GeoLocate me button is clicked on locations pages, HTML's
     * internal Geolocation API is used to locate the user.
     */
    $geoLocateMeButton.click( function (e) {
        geoLocateMe();
    });

    /**
     * When city and state are selected from respective dropdown and the locate
     * button is clicked on locations page, the city/state is collected, and
     * passed to {@link locateByCityState} and utilizing google maps API to
     * mark user location.
     *
     */
    $googleLocateMeButton.click( function (e) {
        e.preventDefault();
        if ($stateDropDown.val() !== null && $cityDropDown.val() !== null) {
            locateByCityState($cityDropDown.val(), $stateDropDown.val());
            if ($googleLocateMeErrorElement.show()) {
                $($googleLocateMeErrorElement).hide();
            }
        } else {
            if ($stateDropDown.val() === null) {
                showLocateMeError($googleLocateMeErrorElement, stateDropDownErrorMsg);
            } else if($cityDropDown.val() === null) {
                showLocateMeError($googleLocateMeErrorElement, cityDropDownErrorMsg);
            } else {
                showLocateMeError($googleLocateMeErrorElement, cityStateDropDownErrorMsg);
            }
        }
    });

    /**
     * Handles error message when either geo locate or google locate elements can not
     * handle location request.
     * @param locateMeErrorElement
     * @param errorMsg
     */
    function showLocateMeError(locateMeErrorElement, errorMsg) {
        locateMeErrorElement.text(errorMsg);
        locateMeErrorElement.css('color', 'red');
        if (locateMeErrorElement.hide()) {
            locateMeErrorElement.show();
        }
    }

    /**
     * Utilizing HTML's Geolocation API, if it's supported, {@link getCurrentPosition}
     * and passes {@link writePosition} to locate latitude and longitude of user's
     * position.
     */
    function geoLocateMe() {
        if (navigator.geolocation) {
            if ($geoLocateMeErrorElement.show()) {
                $geoLocateMeErrorElement.hide();
            }
            navigator.geolocation.getCurrentPosition(writePosition);
        } else {
            showLocateMeError($geoLocateMeErrorElement, geoLocateErrorMsg);
        }
    }

    /**
     * Utilizing HTML's Geolocation API and {@link getCurrentPosition} to pass user's
     * current latitiude and longitude to {@link locateByLatLong}.
     * @param pos
     */
    function writePosition(pos) {
        locateByLatLong(pos.coords.latitude, pos.coords.longitude);
    }

    /**
     * Uses latitude and longitude of user's current position to mark google maps.
     * @param latitude
     * @param longitude
     */
    function locateByLatLong(latitude, longitude) {
        try {
            googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                center: { lat: latitude, lng: longitude },
                zoom: 8,
            });
            markUserOnMap(latitude, longitude);
        } catch(error) {
            console.log('Error: ' + error)
        }
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
     * Receives user's city/state from respective dropdowns, queries google maps
     * geocoder API to find location by city/state, and mark user on map.
     * @param city
     * @param state
     */
    function locateByCityState(city, state) {
        try {
            let geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address' : city + ', ' + state }, function (results, status) {
                if (status === google.maps.GeocoderStatus.OK && results) {
                    let latitude = results[0].geometry.location.lat();
                    let longitude = results[0].geometry.location.lng();

                    googleMap = new google.maps.Map(document.getElementById('locations-map'), {
                        center: { lat: latitude, lng: longitude },
                        zoom: 8
                    });
                    markUserOnMap(latitude, longitude);
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
     * Marks user on google map by supplied latitude and longitude. Passes lat/long
     * to {@link markFosterAgenciesInRadius} to mark foster agencies in user's
     * radius.
     * @param latitude
     * @param longitude
     */
    function markUserOnMap(latitude, longitude) {
        let userPosition = {
            position: {lat: latitude, lng: longitude},
            map: googleMap
        };
        let userMarker = new google.maps.Marker(userPosition);
        markFosterAgenciesInRadius(latitude, longitude);
    }

    /**
     * Marks results of Adoption and Foster agencies in radius of user's
     * current latitude and longitude.
     * @param latitude
     * @param longitude
     */
    function markFosterAgenciesInRadius(latitude, longitude) {
        let request = {
            location: { lat: latitude, lng: longitude},
            radius: '500',
            query: "Adoption",
            fields: ["name", "geometry"],
        };
        var service = new google.maps.places.PlacesService(googleMap);
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesService.OK && results) {
                for (let i = 0; i < results.length; i++) {
                    let agencyPosition = {
                        position: {
                            lat: results[i].geometry.location.lat(),
                            lng: results[i].geometry.location.lng(),
                        }
                    };
                    let agencyMarker = new google.maps.Marker({
                        googleMap,
                        position: agencyPosition.position,
                    });
                }
            } else if(!status === google.maps.places.PlacesService.OK) {
                // error handling
                console.log('Bad Google Places Query');
            } else {
                // no results handling
                console.log('Empty results');
            }
        });
    }

    /**
     * Build's the state's dropdown options.
     * @param states
     */
    function buildStateDropDown(states) {
        states.forEach( function (state) {
            $stateDropDown.append('<option>' + state + '</option>');
        });
    }

    /**
     * Appends a list of cities based on State selection.
     * @param cities
     */
    function appendCitiesToDropDown(cities) {
        cities.forEach( function (city) {
            $cityDropDown.append('<option>' + city + '</option>');
        });
    }

    /**
     * Removes the current list of cities from cities dropdown.
     */
    function removeCitiesFromDropDown() {
        $cityDropDown.empty();
    }
});