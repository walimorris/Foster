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
        this.#kansas = ['Wichita', 'Overland Park', 'Kansas City', 'Olathe', 'Topeka', 'Lawrence', 'Shawnee', 'Manhattan', 'Lenexa', 'Salina'];
        this.#kentucky = ['Lousiville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence', 'Hopkinsville'];
        this.#louisiana = ['New Orleans', 'Baton Rouge', 'Shreveport', 'Metairie', 'Lafatette', 'Lake Charles', 'Bossier City', 'Kenner', 'Monroe', 'Alexandria', 'Houma'];
        this.#maine = ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Sanford', 'Brunswick', 'Scarborough', 'Saco'];
        this.#maryland = ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Ellicott City', 'Fredrick', 'Glen Burnie', 'Gaithersburg', 'Rockville', 'Bethesda', 'Dundalk', 'Bowie'];
        this.#mississippi = ['Jackson', 'Gulfport', 'Southaven', 'Hattiesburg', 'Biloxi', 'Tupelo', 'Meridian', 'Olive Branch', 'Greenville', 'Horn Lake'];
        this.#missouri = ['Kansas City', 'St.Louis', 'Springfield', 'Columbia', 'Independence', 'Lee\'s Summit', 'O\'Fallon', 'St.Joseph', 'St.Charles', 'St.Peters', 'Blue Springs', 'Florissant', 'Joplin', 'Chesterfield', 'Jefferson City'];
        this.#montana = ['Billings', 'Missoula', 'Great Falls', 'Bozeman', 'Butte-Silver Bow', 'Helena', 'Kalispell', 'Havre', 'Anaconda-Deer Lodge County', 'Belgrade'];
        this.#nebraska = ['Omaha', 'Lincoln', 'Bellevue', 'Grand Island', 'Kearney', 'Fremont', 'Hastings', 'Norfolk', 'North Platte', 'Columbus', 'Papillion', 'La Vista'];
        this.#nevada = ['Las Vegas', 'Henderson', 'Reno', 'North Las Vegas', 'Paradise', 'Sunrise Manor', 'Enterprise', 'Sparks', 'Carson City', 'Whitney', 'Pahrump', 'Winchester'];
        this.#newHampshire = ['Manchester', 'Nashua', 'Concord', 'Derry', 'Dover', 'Rochester', 'Salem', 'Merrimack', 'Londonderry', 'Hudson', 'Keene'];
        this.#newJersey = ['Newark', 'Jersey City', 'Paterson', 'Elizabeth', 'Lakewood', 'Edison', 'Woodbridge', 'Toms River', 'Hamilton Township', 'Clifton', 'Trenton', 'Brick', 'Camden', 'Cherry Hill', 'Passaic', 'Union City', 'Old Bridge', 'Franklin Township', 'Middletown', 'Bayonne', 'East Orange', 'Gloucester', 'Irvington'];
        this.#newMexico = ['Albuquerque', 'Las Cruces', 'Rio Grande', 'Santa Fe', 'Roswell', 'Farmington', 'South Valley', 'Clovis', 'Hobbs', 'Alamogordo', 'Carlsbad', 'Gallup', 'Sunland Park', 'Los Lunas', 'Chaparral'];
        this.#newYork = ['New York', 'Hempstead', 'Brookhaven', 'Islip', 'Oyster Bay', 'Buffalo', 'North Hempstead', 'Babylon', 'Rochester', 'Huntington', 'Yonkers', 'Syracuse', 'Ramapo', 'Amherst', 'Smithtown', 'Albany', 'Greece', 'Greenburgh', 'Clarkstown', 'Cheektowaga', 'Colonie', 'New Rochelle', 'Tonawanda Town', 'Mount Vernon', 'Schenectady', 'Utica', 'Clay'];
        this.#northcarolina = ['Charlotte', 'Raleigh', 'Greensboro', 'Durham', 'Winston-Salem', 'Fayetteville', 'Cary', 'Wilmington', 'High Point', 'Concord', 'Greenville', 'Asheville', 'Gastonia', 'Jacksonville', 'Chapel Hill', 'Huntersville', 'Rocky Mount', 'Burlington', 'Apex', 'Wilson', 'Kannapolis', 'Wake Forest', 'Hickory', 'Indian Trail', 'Mooresville'];

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
        this.#cityMap.set('Kansas', this.#kansas);
        this.#cityMap.set('Kentucky', this.#kentucky);
        this.#cityMap.set('Louisiana', this.#louisiana);
        this.#cityMap.set('Maine', this.#maine);
        this.#cityMap.set('Maryland', this.#maryland);
        this.#cityMap.set('Massachusetts', this.#massachusetts);
        this.#cityMap.set('Michigan', this.#michigan);
        this.#cityMap.set('Minnesota', this.#minnesota);
        this.#cityMap.set('Mississippi', this.#mississippi);
        this.#cityMap.set('Missouri', this.#missouri);
        this.#cityMap.set('Montana', this.#montana);
        this.#cityMap.set('Nebraska', this.#nebraska);
        this.#cityMap.set('Nevada', this.#nevada);
        this.#cityMap.set('New Hampshire', this.#newHampshire);
        this.#cityMap.set('New Jersey', this.#newJersey);
        this.#cityMap.set('New Mexico', this.#newMexico);
        this.#cityMap.set('New York', this.#newYork);
        this.#cityMap.set('North Carolina', this.#northcarolina);
    }
}