exports.home = (request, response) => response.render('home');
exports.about = (request, response) => response.render('about');
exports.notFound = (request, response) => response.render('404');

// Express handles this error by way of the four arguments. We need the next argument,
// though ESLint will complain about it. Therefore we will disable this line for ESlint.
/* eslint-disable no-unused-vars */
exports.serverError = (error, request, response, next) => response.render('500');

/* eslint-enable no-unused-vars */