// Libraries Imports
const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const dotenv = require('dotenv').config();

// My Modules Imports
const router = require(path.join(__dirname,'src/routes/router'))
const { connectionWithDatabase } = require(path.join(__dirname + '/src/database/databaseConfig.js'));

// Express Config
const app = express();
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

// Setting Routers
app.use(router)


// Setting Database Connection
connectionWithDatabase()
    .then(()=>{
        console.log('Connection With Databsae Established!');
    })
    .catch((err)=>{
        console.log('ERROR: Failed Attempting to Connect With Database!');
    })

// Setting Server on Port
const serverHost = process.env.SERVER_HOST_DEV;
const serverPort = process.env.SERVER_PORT_DEV;

app.listen(serverPort, serverHost,()=>{
    console.log('Server On Port: http://'+ serverHost + ':' + serverPort);
})