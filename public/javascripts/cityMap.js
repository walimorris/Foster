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

    constructor() {
        this.#state = 'Alabama';
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
        this.#kentucky = ['Louisville', 'Lexington', 'Bowling Green', 'Owensboro', 'Covington', 'Richmond', 'Georgetown', 'Florence', 'Hopkinsville'];
        this.#louisiana = ['New Orleans', 'Baton Rouge', 'Shreveport', 'Metairie', 'Lafatette', 'Lake Charles', 'Bossier City', 'Kenner', 'Monroe', 'Alexandria', 'Houma'];
        this.#maine = ['Portland', 'Lewiston', 'Bangor', 'South Portland', 'Auburn', 'Biddeford', 'Sanford', 'Brunswick', 'Scarborough', 'Saco'];
        this.#maryland = ['Baltimore', 'Columbia', 'Germantown', 'Silver Spring', 'Waldorf', 'Ellicott City', 'Fredrick', 'Glen Burnie', 'Gaithersburg', 'Rockville', 'Bethesda', 'Dundalk', 'Bowie'];
        this.#massachusetts = ['Boston', 'Worcester', 'Springfield', 'Cambridge', 'Lowell', 'Brockton', 'New Bedford', 'Quincy', 'Lynn', 'Fall River', 'Newton', 'Somerville', 'Lawrence', 'Framingham', 'Haverhill', 'Waltham', 'Malden', 'Plymouth', 'Brookline', 'Medford', 'Taunton', 'Weymouth Town', 'Chicopee', 'Revere', 'Peabody', 'Methuen Town', 'Everett', 'Arlington', 'Attleboro', 'Barnstable Town', 'Salem', 'Billerica', 'Pittsfield', 'Beverly', 'Leominster'];
        this.#michigan = ['Detroit', 'Grands Rapids City', 'Warren City', 'Sterling Heights', 'Ann Arbor City', 'Lansing City', 'Clinton Charter Township', 'Flint City', 'Bearborn', 'Livonia', 'Canton', 'Macomb', 'Troy City', 'Westland', 'Farmington Hills', 'Shelby', 'Kalamazoo City', 'Wyoming', 'Rochester Hills', 'Southfield City', 'Waterford', 'West Bloomfield', 'Taylor', 'Novi City', 'Pontiac', 'St.Clair Shores', 'Royal Oak City'];
        this.#minnesota = ['Minneapolis', 'St.Paul', 'Rochester', 'Duluth', 'Bloomington', 'Brooklyn Park', 'Plymouth', 'Maple Grove', 'Woodbury', 'St.Cloud', 'Eagan', 'Eden Prairie', 'Blaine', 'Lakeville', 'Coon Rapids', 'Burnsville', 'Minnetonka', 'Apple Valley', 'Edina', 'St.Louis Park', 'Moorhead', 'Mankato', 'Shakopee', 'Maplewood', 'Cottage Grove'];
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
        this.#northdakota = ['Fargo', 'Bismarck', 'Grand Forks', 'Minot', 'West Fargo', 'Williston', 'Dickinson', 'Mandan', 'Jamestown'];
        this.#ohio = ['Columbus', 'Cleveland', 'Cincinnati', 'Toledo', 'Akron', 'Dayton', 'Parma', 'Canton', 'Youngstown', 'Lorain', 'Hamilton', 'Springfield', 'Kettering', 'Elyria', 'Lakewood', 'Newark', 'Cuyahoga Falls', 'Middletown', 'Euclid', 'Mentor', 'Beavercreek', 'Mansfield', 'Dublin', 'Strongville'];
        this.#oklahoma = ['Oklahoma City', 'Tulsa', 'Norman', 'Broken Arrow', 'Lawton', 'Edmond', 'Moore', 'Midwest City', 'Enid', 'Stillwater', 'Muskogee', 'Bartlesville', 'Owasso', 'Shawnee', 'Yukon'];
        this.#oregon = ['Portland', 'Salem', 'Eugene', 'Gresham', 'Hillsboro', 'Beaverton', 'Bend', 'Medford', 'Springfield', 'Corvallis', 'Aloha', 'Albany', 'Tigard', 'Lake Oswego', 'Keizer', 'Grants Pass', 'Oregon City'];
        this.#pennsylvania = ['Philadelphia', 'Pittsburgh', 'Allentown', 'Erie', 'Reading City', 'Upper Darby', 'Scranton', 'Bensalem', 'Lancaster City', 'Lower Merion', 'Bethlehem City', 'Abington', 'Bristol township', 'Millcreek township', 'Haverford', 'Harrisburg'];
        this.#rhodeisland = ['Providence', 'Cranston', 'Warwick', 'Pawtucket', 'East Providence', 'Woonsocket', 'Newport', 'Central Falls'];
        this.#southcarolina = ['Charleston', 'Columbia', 'North Charleston', 'Mount Pleasant', 'Rock Hill', 'Greenville', 'Summerville', 'Goose Creek', 'Hilton Head Island', 'Sumter', 'Florence', 'Spartanburg', 'Myrtle Beach', 'Greer', 'Aiken', 'Anderson'];
        this.#southdakota = ['Sioux Falls', 'Rapid City', 'Aberdeen', 'Brookings', 'Watertown', 'Mitchell', 'Yankton', 'Pierre', 'Huron', 'Spearfish'];
        this.#tennessee = ['Nashville', 'Memphis', 'Knoxville', 'Chattanooga', 'Clarksville', 'Murfreesboro', 'Franklin', 'Jackson', 'Johnson City', 'Bartlett', 'Hendersonville', 'Kingsport', 'Collierville', 'Smyrna', 'Cleveland', 'Brentwood', 'Spring Hill', 'Germantown', 'Columbia', 'Gallatin'];
        this.#texas = ['Houston', 'San Antonio', 'Dallas', 'Austin', 'Fort Worth', 'El Paso', 'Arlington', 'Corpus Christi', 'Plano', 'Laredo', 'Lubbock', 'Irving', 'Garland', 'Amarillo', 'Grand Prairie', 'Brownsville', 'McKinney', 'Frisco', 'Pasadena', 'Killeen', 'Mesquite', 'McAllen', 'Midland', 'Denton', 'Waco', 'Carrollton', 'Round Rock', 'Abilene', 'Pearland', 'Odessa', 'Sugar Land', 'Beaumont', 'Richardson', 'The Woodlands', 'College Station', 'Lewisville', 'Tyler', 'Wichita Falls', 'League City', 'Allen'];
        this.#utah = ['Salt Lake City', 'West Valley City', 'Provo', 'West Jordan', 'Orem', 'Sandy', 'Ogden', 'St.George', 'Layton', 'South Jordan', 'Lehi', 'Millcreek', 'Taylorsville', 'Logan', 'Murray', 'Draper', 'Bountiful', 'Riverton', 'Herriman', 'Spanish Fork'];
        this.#vermont = ['Burlington', 'Essex', 'South Burlington', 'Colchester', 'Rutland City', 'Bennington', 'Brattleboro', 'Milton', 'Essex Junction', 'Williston', 'Hartford', 'Springfield'];
        this.#virginia = ['Virginia Beach', 'Norfolk', 'Chesapeake', 'Arlington', 'Richmond', 'Newport News', 'Alexandria', 'Hampton', 'Roanoke', 'Portsmouth', 'Suffolk', 'Lynchburg', 'Centreville', 'Dale City', 'Reston', 'Harrisonburg', 'Leesburg', 'Ashburn', 'Tuckahoe', 'McLean', 'Charlottesville', 'Lake Ridge', 'Blacksburg', 'Annandale', 'Burke'];
        this.#washington = ['Seattle', 'Spokane', 'Tacoma', 'Vancouver', 'Bellevue', 'Kent', 'Everett', 'Renton', 'Spokane Valley', 'Federal Way', 'Yakima', 'Kirkland', 'Bellingham', 'Kennewick', 'Auburn', 'Pasco', 'Marysville', 'Redmond', 'Sammamish', 'South Hill', 'Lakewood', 'Richland', 'Shoreline', 'Olympia', 'Burien', 'Lacey', 'Bothell', 'Edmonds', 'Puyallup', 'Bremerton', 'Lynnwood', 'Issaquah', 'Longview', 'Parkland', 'Parkland', 'Mount Vernon'];
        this.#westvirginia = ['Charleston', 'Huntington', 'Morgantown', 'Parkersburg', 'Wheeling', 'Weirton', 'Fairmont', 'Martinsburg', 'Beckley', 'Clarksburg', 'Teays Valley'];
        this.#wisconsin = ['Milwaukee', 'Madison', 'Green Bay', 'Kenosha', 'Racine', 'Appleton', 'Waukesha', 'Eau Claire', 'Oshkosh', 'Janesville', 'West Allis', 'La Crosse', 'Sheboygan', 'Wauwatosa', 'Fond du Lac', 'New Berlin', 'Wausau', 'Brookfield'];
        this.#wyoming = ['Cheyenne', 'Casper', 'Gillette', 'Laramie', 'Rock Springs', 'Sheridan', 'Green River'];

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
        this.#cityMap.set('North Dakota', this.#northdakota);
        this.#cityMap.set('Ohio', this.#ohio);
        this.#cityMap.set('Oklahoma', this.#oklahoma);
        this.#cityMap.set('Oregon', this.#oregon);
        this.#cityMap.set('Pennsylvania', this.#pennsylvania);
        this.#cityMap.set('RhodeIsland', this.#rhodeisland);
        this.#cityMap.set('South Carolina', this.#southcarolina);
        this.#cityMap.set('South Dakota', this.#southdakota);
        this.#cityMap.set('Tennessee', this.#tennessee);
        this.#cityMap.set('Texas', this.#texas);
        this.#cityMap.set('Utah', this.#utah);
        this.#cityMap.set('Vermont', this.#vermont);
        this.#cityMap.set('Virginia', this.#virginia);
        this.#cityMap.set('Washington', this.#washington);
        this.#cityMap.set('West Virginia', this.#westvirginia);
        this.#cityMap.set('Wisconsin', this.#wisconsin);
        this.#cityMap.set('Wyoming', this.#wyoming);
    }
}