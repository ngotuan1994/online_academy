const {auth} = require('express-openid-connect');
const dotenv = require('dotenv')
dotenv.config();
function authenreq(){
 
        const config = {
            authRequired: false,
            auth0Logout: true,
            baseURL: process.env.baseURL,
            clientID: process.env.clientID,
            issuerBaseURL: process.env.issuerBaseURL,
            secret: process.env.secret,
          };
 
    
}

module.exports = {authenreq};