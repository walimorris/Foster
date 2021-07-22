# Foster Awareness Website
> Our future looks bright. Progress continues to happen on the technology front, 
> education front, and social front. Foster aware is built to deliver more attention
> to those who wish to support the Foster Care System front. We strive to bring the
> most recent, well researched and reported data about the state of our country's 
> foster care system. We provide resources for future foster care parents and for 
> those who would like to support our cause.  

# Getting Started
To get the node server running locally:
* Ensure you have node installed on your system [NodeJs](https://nodejs.org/en/download/)
* Clone this repo
* `npm install` to install all required dependencies
* `npm run start` to start local server running on port 3000 - supported by [forever](https://github.com/foreversd/forever) to keep our server up and running.
* Optionally, you can run `nodemon foster.js` - to update development changes you make on the fly. 

# Code Overview
## Dependencies
* [express](https://expressjs.com/) Handles routing and HTTP requests
* [jquery](https://jquery.com/) Write Less, Do More - front end 
* [express-validator](https://express-validator.github.io/docs/) Express middleware that wraps validator js for validation and sanitation
* [handlebars](https://handlebarsjs.com/guide/#what-is-handlebars) Templating engine used to work with dynamic data
* [nodemon](https://nodemon.io/) Monitors and implements development changes, no server restart required
* [Travis CI](https://travis-ci.org/) Handles CI/CD pipeline
* [mongodb](https://www.mongodb.com/) Database
* [morgan](https://github.com/expressjs/morgan) Lightweight middleware logger for node.js
* [jest](https://jestjs.io/) A delightful JavaScript testing framework with a focus on simplicity
* Special thanks to [Bootstrap](https://getbootstrap.com/) and [Font Awesome](https://fontawesome.com/start/confirm) for sharing features that make web apps pop.