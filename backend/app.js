const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors')
const clothesRoutes = require('./routes/clothes-routes')
const userRoutes = require('./routes/users-routes')
const path = require('path');

const app = express();

app.use(bodyParser.json());


app.use(cors());

app.use('/api/clothes', clothesRoutes)
app.use('/api/users', userRoutes)


app.use('/uploads/images', express.static(path.join('uploads','images')));      

app.use((req, res, next) => {

    //This allows us to controls with domains have access to these resources
    res.setHeader("Access-Control-Allow-Origin","*");
    
    //This controls within headers are allowed
    res.setHeader(
        "Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    //This basically controls which HTTP methods can be used on the frontend    
    res.setHeader('Access-Control-Allow-Methods','GET, POST, PATCH, DELETE');
    //move to next middleware
    next();
});


app.use((error, req, res, next) => { 
    if(res.headerSent) { 
        return next(error);
    }
    res.status(error.code || 500); 
    res.json( { message: error.message || 'Unknown error occured'});
})



const url = 'mongodb+srv://bendezutti:password@cluster0.lbxrfn2.mongodb.net/FitCheck?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(url).then(() => { 
    app.listen(3001);
}).catch(err=> { 
    console.log(err)
})