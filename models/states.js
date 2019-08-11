const mongoose = require('mongoose');
const Countries=require('./countries')
 
const States = mongoose.model('States', new mongoose.Schema({
    state_id: {
        type: Number,
        required: true,
        maxlength: 11
    },
    name: {
        type: String,
         required: true,
        maxlength: 50
    },
    country_id: {
        type: Number,
        required: false,
       maxlength: 11
    }                                                                                                                                                                                       
}));
 exports.States = States;