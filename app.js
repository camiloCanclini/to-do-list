// Libraries Imports
const express = require('express');
const ejs = require('ejs');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();

// Express Config
app.set('views', path.join(__dirname, 'src/views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')))

const serverHost = process.env.SERVER_HOST_DEV
const serverPort = process.env.SERVER_PORT_DEV

app.use(require(path.join(__dirname,'src/routes/router')))

app.listen(serverPort, serverHost,()=>{
    console.log('Server On Port: http://'+ serverHost + ':' + serverPort);
})