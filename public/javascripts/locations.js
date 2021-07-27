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

    // icons
    const you = "https://img.icons8.com/doodle/48/000000/street-view.png";
    const agency = "https://img.icons8.com/office/16/000000/department.png";

    // search terms for family agencies
    const agencySearchTerms = [/family/i, /care/i, /foster/i, /adoption/i, /daycare/i, /childcare/i,/child services/i, /children/i];

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
                zoom: 15,
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
                        zoom: 15
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
        let userMarker = new google.maps.Marker({
            position: { lat: latitude, lng: longitude },
            icon: you
        });
        userMarker.setMap(googleMap);
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
            query: 'Adoption Agency'
        };
        var service = new google.maps.places.PlacesService(googleMap);
        service.nearbySearch(request, (results, status) => {
            if (status === 'OK') {
                for (let i = 0; i < results.length; i++) {
                    if (isAgencyMatch(results[i].name)) {
                        let agencyMarker = new google.maps.Marker({
                            position: results[i].geometry.location,
                            icon: agency,
                        });
                        agencyMarker.setMap(googleMap);
                        createMarkerInfoWindow(results[i], agencyMarker);
                    }
                }
            } else if(!status === 'OK') {
                // error handling
                console.log('Bad Google Places Query');
            } else {
                // no results handling
                console.log('Empty results');
            }
        });
    }

    /**
     * Creates an InfoWindow for places result.
     * @param result
     * @param marker
     */
    function createMarkerInfoWindow(result, marker) {
        // build content from result
        console.log(result);

        const request = {
            placeId: result.place_id,
        }
        const service = new google.maps.places.PlacesService(googleMap);
        service.getDetails(request, (place, status) => {
            if (status === 'OK') {
                const phone = place.formatted_phone_number === undefined ? 'N/A' : place.formatted_phone_number;
                const website = place.website === undefined ? 'N/A' : place.website;
                const windowContent =
                    '<h6>' + result.name + '</h6><br/>' +
                    '<h6>' + result.vicinity + '</h6><br/>' +
                    '<h6>' + phone + '</h6><br/>' +
                    '<h6>' + website + '</h6>';
                    // '<a href="' + place.website + '">Website</a><br/>';

                const infoWindow = new google.maps.InfoWindow({
                    content: windowContent
                });

                marker.addListener('click', () => {
                    infoWindow.open({
                        anchor: marker,
                        googleMap,
                        shouldFocus: false,
                    });
                });
            }
        });
    };

    /**
     * Finds family centered agencies within radius of user's chosen location based
     * on global agencySearchTerms array.
     * @param result
     * @returns {boolean}
     */
    function isAgencyMatch(result) {
        for(let i = 0; i < agencySearchTerms.length; i++) {
            if (result.match(agencySearchTerms[i]) !== null) {
                return true;
            }
        }
        return false;
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