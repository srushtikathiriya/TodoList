const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName: {
        type: String,
    },
    email:{
        type:String,
    },
    // completed: {  // New field
    //     type: Boolean,
    //     default: false,
    // }
},
{
    timestamps:true
})

module.exports = mongoose.model('profiles',profileSchema);