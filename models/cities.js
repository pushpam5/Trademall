const mongoose = require('mongoose');
 
const Cities = mongoose.model('Cities', new mongoose.Schema({
    city_id: {
        type: Number,
         required: false,
        maxlength: 11
    },
    name: {
        type: String,
        required: false,
        maxlength: 50
    },
    state_id: {
        type: Number,
        required: true,
        maxlength: 11
    }
}));
 
exports.Cities = Cities;