const {auth} = require('express-openid-connect');
const dotenv = require('dotenv')
dotenv.config();
const Role = require('../../app/model/Role');

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
 
function authenRoleAdmin(req,res,next){
  const role = Role.findOne({email: req.oidc.user.email});

  role.then(roles => {
      if(roles.role !== "admin"){
        res.status(401).send("Not Allowed")
      }
      next();
  })
  role.catch(next)
  
}
function authenRoleProf(req,res,next){
  const role = Role.findOne({email: req.oidc.user.email});

  role.then(roles => {
      if(roles.role !== "prof"){
        if(roles.role !== "admin")
          res.status(401).send("Not Allowed")
      }
      next();
  })
  role.catch(next)
  
}

module.exports = {authenreq , authenRoleAdmin , authenRoleProf};