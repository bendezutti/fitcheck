const express = require('express');
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());


app.use((error, req, res, next) => { 
    if(res.headerSent) { 
        return next(error);
    }
    res.status(error.code || 500); 
    res.json( { message: error.message || 'Unknown error occured'});
})



const url = ''
mongoose.connect(url).then(() => { 
    app.listen(3001);
}).catch(err=> { 
    console.log(err)
})