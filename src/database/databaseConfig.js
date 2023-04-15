  const mongoose = require('mongoose');

  require('dotenv').config();

  const { NODE_ENV } = process.env;

  const dbHost = NODE_ENV=="dev"? process.env.DB_HOST_DEV : process.env.DB_HOST_DEP;
  const dbName = NODE_ENV=="dev"? process.env.DB_NAME_DEV : process.env.DB_NAME_DEP;
  const dbUser = NODE_ENV=="dev"? process.env.DB_USER_DEV : process.env.DB_USER_DEP;
  const dbPass = NODE_ENV=="dev"? process.env.DB_PASS_DEV : process.env.DB_PASS_DEP;


  mongoose.connect(`mongodb://${dbHost}/${dbName}`)
    .then(() => {
      console.log('Conexión exitosa a la base de datos'); 
    })
    .catch((error) => {
      console.error('Error de conexión a la base de datos');
    });

  module.exports = mongoose;