const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const clothesRoutes = require('./routes/clothes-routes')
const userRoutes = require('./routes/users-routes')

const app = express();

app.use(bodyParser.json());

app.use('/api/clothes', clothesRoutes)
app.use('/api/users', userRoutes)

app.use((error, req, res, next) => { 
    if(res.headerSent) { 
        return next(error);
    }
    res.status(error.code || 500); 
    res.json( { message: error.message || 'Unknown error occured'});
})



const url = 'mongodb+srv://bendezutti:iamtheGoat100!@cluster0.lbxrfn2.mongodb.net/FitCheck?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(() => { 
    app.listen(3001);
}).catch(err=> { 
    console.log(err)
})