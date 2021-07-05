const handlers = require('./libs/handlers');
const express = require('express');
const expressHandlebars = require('express-handlebars');
const app = express();
const bodyParser = require('body-parser');


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
