


<h2> Link: </h2>
Nodejs: https://nodejs.org/en/  </br>
Visual Code: https://code.visualstudio.com/ </br>
MongoDB: https://www.mongodb.com/cloud/atlas <br />



<h2>Installation</h2></br>
  1.Install nodejs<br />
  2.The .env file need to change (dbuser/password/dbname)<br />
    For Database: https://www.mongodb.com/cloud/atlas <br />
      _Create or Login your MongoDB account <br />
      _Create your Databse access acount  <br />
      _ Copy the information  </br>
    For Authen0: https://auth0.com/ </br>
      _ Create Authen0 account </br>
      _ Click applications tab and click application </br>
      _ Choose "Regular Web Applications </br>
      _ Change to setting tab </br>
      _ Copy the "Domain" string </br>
      _ Copy the "Client ID" string </br>
  3.Clone the project from github by this command: git clone https://github.com/spring2021-cpsc362/online_academy.git  </br>
  4.Open terminal and go to the clone repository directory, type command: npm install </br>
  5.Create .env file like this: </br>
    DB_CONNECTION=mongodb+srv://dbuser:password@cluster0.u3u2h.mongodb.net/dbname?retryWrites=true&w=majority ( Paste your mongodb info here) </br>
    issuerBaseURL=https://DOMAIN ( Paste your Auth0 Domain here) </br>
    baseURL=http://localhost:3000 </br>
    clientID=CLIENTID ( Paste your Auth0 ClientID here) </br>
    secret=adsjaiojdiowejrijwerhjweuhrewirhiew (Any string you want example : adsjaiojdiowejrijwerhjweuhrewirhiew) </br>
  6. type command: npm start </br>
  7.Open web-browser with this url: http://localhost:3000   </br>
