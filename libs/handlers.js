require('dotenv').config();
const bodyParser = require('body-parser');
const session = require('express-session');
const csrf = require('csurf');
const {check, validationResult} = require('express-validator');
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const db = process.env.DB;
const user = process.env.USER;
const key = process.env.KEY;
const fr = process.env.FR;
const subs = process.env.SUBS;
const cluster = process.env.CLUSTER;

const uri = db + user + ":" + key + cluster;
const client = new MongoClient(uri, {useUnifiedTopology: true});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(csrf());

app.use(session({
    secret: 'sabertooth',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
}));

app.use(bodyParser.json());
app.use(express.json());

exports.home = (request, response) => {
    response.render('home', {
        stylesheet: './stylesheets/home.css',
        whichPage: 'home',
        subscribeMessage: 'Enter Email',
        title: 'Foster Awareness', 
        pageScript: '/javascripts/home.js',
        csrfToken: request.csrfToken,
    });
}

exports.about = (request, response) => response.render('about', {
    stylesheet: './stylesheets/about.css',
    whichPage: 'about', 
    subscribeMessage: 'Enter Email', 
    title: 'About Foster',
    pageScript: '/javascripts/about.js',
    csrfToken: request.csrfToken,
});

exports.notFound = (request, response) => response.render('404', { layout: false });

// Express handles this error by way of the four arguments. We need the next argument,
// though ESLint will complain about it. Therefore we will disable this line for ESlint.
/* eslint-disable no-unused-vars */
exports.serverError = (error, request, response, next) => {
    response.render('500', { layout:false });
}
/* eslint-enable no-unused-vars */

exports.api = {
    emailSubscriptions:  async function (request, response) {
        const email = request.body.emailSubscriber;
        const activatingPage = request.body.page;
        
        try {
            await client.connect();
            const database = client.db(fr);
            const collection = database.collection(subs);

            const doc = {email: email};
            const result = await collection.insertOne(doc);

            console.info(`${result.insertedCount} document inserted with _id: ${result.insertedId}`);

            response.status(200);
            response.send({ result: 'success', page: activatingPage });
        } catch (err) {
            console.log(err);
            response.status(400);
            response.render(activatingPage, {subscribeMessage: err.toString()});
        }
    }
}
