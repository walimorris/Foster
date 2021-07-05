require('dotenv').config(); 
const handlers = require('./libs/handlers');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');
var MongoClient = require('mongodb').MongoClient;

const db = process.env.DB; 
const user = process.env.USER;
const key = process.env.KEY;
const cluster = process.env.CLUSTER;

const uri = db + user + ":" + key + cluster;
const client = new MongoClient(uri, {useUnifiedTopology: true});


app.use(bodyParser.urlencoded({ extended: false }));

// Disable s-powered-by deader
app.disable('x-powered-by');
app.set('view cache', true);

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.post('/name', (request, response) => {
    const name = request.body.name;
    console.log(name);
    response.render('home', { name: name });
});

app.post('/emailSubscriptions', [
    check('emailSubscriber').isEmail().normalizeEmail()
        .withMessage('Email address must match format similar to: example@gmail.com')
], async function (request, response) {
    const errors = validationResult(request);

    // invalid email address should be caught on subscription form, above is extra validation
    if (!errors.isEmpty()) {
        response.status(400);
        response.render('home', {subscribeMessage: 'Error reading submitted email address'});
    }
    const email = request.body.emailSubscriber;
    try {
        await client.connect();
        const database = client.db('foster');
        const collection = database.collection('email_subscriptions');

        const doc = {email: email};
        const result = await collection.insertOne(doc);

        console.log(`${result.insertedCount} document inserted with _id: ${result.insertedId}`);
        
        response.status(200); 
        response.render('home', {subscribeMessage: 'Thank you for subscribing to Foster Awareness!'});
    } catch (err) {
        console.log(err);
        response.status(400);
        response.render('home', {subscribeMessage: err.toString()});
    }
});

app.get('/headers', (request, response) => {
    const headers = Object.entries(request.headers)
        .map(([key, value]) => `${key} : ${value}`)
    response.send(headers.join("\n"));
});

// custom 404 page
app.use(handlers.notFound);

// custom 500 page
app.use(handlers.serverError);

if (require.main === module) {
    app.listen(port, () => {
        console.log(`Express started on http://localhost:${port}; press Ctrl-C to terminate.`);
    })
} else {
    module.exports = app;
}
