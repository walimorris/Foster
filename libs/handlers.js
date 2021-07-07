require('dotenv').config();
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
var MongoClient = require('mongodb').MongoClient;
const express = require('express');
const app = express();

const db = process.env.DB;
const user = process.env.USER;
const key = process.env.KEY;
const cluster = process.env.CLUSTER;

const uri = db + user + ":" + key + cluster;
const client = new MongoClient(uri, {useUnifiedTopology: true});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

exports.home = (request, response) => response.render('home', {whichPage: 'home', 
    subscribeMessage: 'Enter Email', 
    title: 'Foster Awareness'});

exports.about = (request, response) => response.render('about', {whichPage: 'about', 
    subscribeMessage: 'Enter Email', 
    title: 'About Foster'});

exports.notFound = (request, response) => response.render('404');

exports.api = {
    emailSubscriptions: [
        check('emailSubscriber').isEmail().normalizeEmail()
            .withMessage('Email should follow a format similar to: example@yahoo.com')
    ], async function (request, response) {
        console.log(request.body);
        const email = request.body.emailSubscriber;

        try {
            await client.connect();
            const database = client.db('foster');
            const collection = database.collection('email_subscriptions');

            const doc = {email: email};
            const result = await collection.insertOne(doc);

            console.log(`${result.insertedCount} document inserted with _id: ${result.insertedId}`);

            response.status(200);
            response.send({ result: 'sucess' });
        } catch (err) {
            console.log(err);
            response.status(400);
            response.render(page, {subscribeMessage: err.toString()});
        }
    }
}


// Express handles this error by way of the four arguments. We need the next argument,
// though ESLint will complain about it. Therefore we will disable this line for ESlint.
/* eslint-disable no-unused-vars */
exports.serverError = (error, request, response, next) => response.render('500');

/* eslint-enable no-unused-vars */