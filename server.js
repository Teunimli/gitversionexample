const express = require('express');

const application = express();
const port = 8080;

application.all('*', (request, response, next) =>{
    console.log(request.url);
    next();
});

application.listen(port, () => {
    console.log('The magic happens at port ' + port);
});

module.exports = application;

