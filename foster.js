require('dotenv').config(); 
const handlers = require('./libs/handlers');
const express = require('express');
const path = require('path');
const expressHandlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// Disable s-powered-by deader
app.disable('x-powered-by');
app.set('view cache', true);

app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname, '/public/stylesheets')));

app.get('/', handlers.home);

app.get('/about', handlers.about);

app.post('/api/emailSubscriptions', handlers.api.emailSubscriptions);

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
