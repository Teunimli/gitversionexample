const express = require('express');

const application = express();
const port = process.env.PORT;

application.all('*', (request, response, next) =>{
    console.log(request.url);
    next();
});

application.get('/hello', (request, response, next) =>{
    response.status(200).json({
       'msg': 'Hello JEDIS'
    });
});

application.listen(port, () => {
    console.log('The magic happens at port ' + port);
});

module.exports = application;

