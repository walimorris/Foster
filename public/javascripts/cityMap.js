class CityMap {
    #state;
    #cityMap;

    #alabama;
    #alaska;
    #arizona;
    #arkansas;
    #california;
    #colorado;
    #connecticut;
    #delaware;
    #florida;
    #georgia;
    #hawaii;
    #idaho;
    #illinois;
    #indiana;
    #iowa;
    #kansas;
    #kentucky;
    #louisiana;
    #maine;
    #maryland;
    #massachusetts;
    #michigan;
    #minnesota;
    #mississippi;
    #missouri;
    #montana;
    #nebraska;
    #nevada;
    #newHampshire;
    #newJersey;
    #newMexico;
    #newYork;
    #northcarolina;
    #northdakota;
    #ohio;
    #oklahoma;
    #oregon;
    #pennsylvania;
    #rhodeisland;
    #southcarolina;
    #southdakota;
    #tennessee;
    #texas;
    #utah;
    #vermont;
    #virginia;
    #washington;
    #westvirginia;
    #wisconsin;
    #wyoming;

    constructor(state) {
        this.#state = state;
        this.#alabama = ['Birmingham', 'Montgomery', 'Huntsville', 'Mobile', 'Tucaloosa'];
        this.#alaska = ['Anchorage', 'Juneau', 'Fairbanks', 'Badger', 'Knik-Fairview'];
        this.#arizona = ['Phoenix', 'Tucson', 'Mesa', 'Chandler', 'Scottsdale'];
        this.#arkansas = ['Little Rock', 'Fort Smith', 'Fayetteville', 'Springdale', 'Jonesboro'];
        this.#california = ['Los Angeles', 'San Diego', 'San Jose', 'San Francisco', 'Fresno', 'Sacramento', 'Long Beach', 'Oakland', 'Bakersfield', 'Anaheim', 'Santa Ana', 'Riverside', 'Stockton', 'Irvine'];
        this.#colorado = ['Denver', 'Colorado Springs', 'Aurora', 'Fort Collins', 'Lakewood', 'Thornton', 'Arvada', 'Westminster', 'Pueblo', 'Centennial', 'Boulder', 'Greeley', 'Highlands Ranch', 'Longmont', 'Loveland'];

        this.#cityMap = new Map();
    }

    getCities() {
        if (this.#cityMapIsEmpty()) {
            this.#buildCityMap();
        }
        return this.#cityMap.get(this.#state);
    }

    getStates() {
        if (this.#cityMapIsEmpty()) {
            this.#buildCityMap();
        }
        return [...this.#cityMap.keys()];
    }
    
    setState(updatedState) {
        this.#state = updatedState;
    }
    
    #cityMapIsEmpty() {
        return this.#cityMap.size <= 0; 
    }
    
    #buildCityMap() {
        this.#cityMap.set('Alabama', this.#alabama);
        this.#cityMap.set('Alaska', this.#alaska);
        this.#cityMap.set('Arizona', this.#arizona);
        this.#cityMap.set('Arkansas', this.#arkansas);
        this.#cityMap.set('California', this.#california);
        this.#cityMap.set('Colorado', this.#colorado);
    }
}