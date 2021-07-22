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
        this.#connecticut = ['BridgePort', 'New Haven', 'Stamford', 'Hartford', 'Waterbury', 'Norwalk', 'Danbury', 'New Britain', 'West Hartford', 'Greenwich'];
        this.#delaware = ['Wilmington', 'Dover', 'Newark', 'Middletown', 'Bear'];
        this.#florida = ['Jacksonville', 'Miami', 'Tampa', 'Orlando', 'St.Petersburg', 'Hialeah', 'Tallahassee', 'Port St.Lucie', 'Cape Coral', 'Fort Lauderdale'];
        this.#georgia = ['Atlanta', 'Augusta-Richmond County', 'Columbus', 'Macon-Bibb County', 'Savannah', 'Athens-Clarke County', 'Sandy Springs', 'South Fulton', 'Roswell', 'Johns Creek', 'Warner Creek', 'Warner Robins', 'Albany', 'Alpharetta', 'Marletta', 'Smyrna'];
        this.#hawaii = ['Urban Honolulu', 'East Honolulu', 'Pearl City', 'Hilo', 'Waipahu', 'Kailua CDP', 'Kahului'];
        this.#idaho = ['Boise City', 'Meridian', 'Nampa', 'Idaho Falls', 'Pocatello', 'Caldwell', 'Coeur d\'Alene', 'Twin Falls', 'Post Falls'];
        this.#illinois = ['Chicago', 'Aurora', 'Joliet', 'Naperville', 'Rockford', 'Springfield', 'Peoria', 'Elgin', 'Champaign', 'Waukegan', 'Cicero', 'Bloomington', 'Arlington Heights', 'Evanston', 'Bolingbrook', 'Schaumburg', 'Decatur'];
        this.#indiana = ['Indianapolis', 'Fort Wayne', 'Evansville', 'South Bend', 'Carmel', 'Fishers', 'Bloomington', 'Hammond', 'Gary', 'Lafayette', 'Muncie', 'Noblesville', 'Terre Haute', 'Kokomo', 'Greenwood'];
        this.#iowa = ['Des Moines', 'Cedar Rapids', 'Davenport', 'Sioux City', 'Iowa City', 'Waterloo', 'Ames', 'West Des Moines', 'Council Bluffs', 'Ankeny', 'Dubuque', 'Urbandale', 'Cedar Falls', 'Marion', 'Bettendorf'];

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
        this.#cityMap.set('Connecticut', this.#connecticut);
        this.#cityMap.set('Delaware', this.#delaware);
        this.#cityMap.set("Florida", this.#florida);
        this.#cityMap.set('Georgia', this.#georgia);
        this.#cityMap.set('Hawaii', this.#hawaii);
        this.#cityMap.set('Idaho', this.#idaho);
        this.#cityMap.set('Illinois', this.#illinois);
        this.#cityMap.set('Indiana', this.#indiana);
        this.#cityMap.set('Iowa', this.#iowa);
    }
}