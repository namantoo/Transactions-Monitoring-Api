const mongoose = require("mongoose")


const  profileSchema = new mongoose.Schema({

    metamask_address: String
  
     
},{ collection: 'USER_PROFILES',
versionKey: false //here
})

// const Notice = new mongoose.model('Notice', noticeSchema);

module.exports =  mongoose.model('USER_PROFILES', profileSchema) ;