const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

/* Middlewares */

//Body Parser
app.use(bodyParser.json());
//Cors
app.use(cors());

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

/* End of Middlewares */

//Routes
app.get('/', (req, res) => {
    res.send('We are on home');
});

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log('Connected to DB');
    });

//Listen to a port
app.listen(3000);