// Importing Libraries 
const { connect , connection} = require('mongoose');

const connectionWithDatabase = async function (){
  
  // Setting Enviroment Variables
  require('dotenv').config();
  const { NODE_ENV } = process.env;
  const dbHost = NODE_ENV=="dev"? process.env.DB_HOST_DEV : process.env.DB_HOST_DEP;
  const dbName = NODE_ENV=="dev"? process.env.DB_NAME_DEV : process.env.DB_NAME_DEP;
  const dbUser = NODE_ENV=="dev"? process.env.DB_USER_DEV : process.env.DB_USER_DEP;
  const dbPass = NODE_ENV=="dev"? process.env.DB_PASS_DEV : process.env.DB_PASS_DEP;
  
  console.log('Attempting to Connect With Database');
  const db = await connect(`mongodb://${dbHost}/${dbName}`, { user: dbUser, pass: dbPass, connectTimeoutMS: 5000});
  console.log("Successfully Connected to the Database:", db.connection.name);
}
const connectionState = ()=>{
    //console.log(connection.readyState);
    if (connection.readyState!= 1) {
      //console.log('The DB Is Not Connected!')
      if (connection.readyState != 2) {
        connectionWithDatabase();
      }
      return false
    }
    return true
    //console.log('The DB is Connected!');
}

module.exports = {
  connectionWithDatabase,
  connectionState
}