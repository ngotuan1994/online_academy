const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();
async function connect(){
    try{
        await mongoose.connect(process.env.DB_CONNECTION,
            {
                useNewUrlParser : true,
                useUnifiedTopology : true,
                useFindAndModify : false
            });
            console.log('Connect Successfully')
    }catch(err)
    {
        console.log('Connect failure!');
    }
    
}

module.exports = {connect};