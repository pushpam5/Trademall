const Joi = require('joi');
const mongoose = require('mongoose');
 
const Countries = mongoose.model('Countries', new mongoose.Schema({
    country_id: {
        type: Number,
        required: true,
        maxlength: 11
    }, 
    sortname: {
        type: String,
        required: false,
        maxlength: 10
    },
    name: {
        type: String,
         required: true,
        maxlength: 50
    },
    phoneCode: {
        type: Number,
        required: false,
        maxlength: 11
    }
}));
 
exports.Countries = Countries;
