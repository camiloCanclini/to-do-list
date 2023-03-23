exports.module = async () => {
    const mongoose = require('mongoose');
    
    const username = 'myuser';
    const password = 'mypassword';
    const host = 'localhost';
    const port = 27017;
    const database = 'mydatabase';
    
    const url = `mongodb://${username}:${password}@${host}:${port}/${database}`;
    
    const connection = await mongoose.createConnection('mongodb://127.0.0.1:27017/test').asPromise()
    connection.then(() => {
      console.log('Connected to database');
    })
    connection.catch((err) => {
      console.error(`Error connecting to database: ${err.message}`);
    });
}
