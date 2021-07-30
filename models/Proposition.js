const mongoose = require('mongoose') ; 
const PropositionSchema = new mongoose.Schema({
    value : Number ,
    offer: {type:mongoose.Schema.Types.ObjectId , ref:'Post'} ,
    freelancer :{type:mongoose.Schema.Types.ObjectId ,ref}

})