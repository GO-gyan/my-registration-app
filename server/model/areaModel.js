const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AreaSchema = new Schema({
    areaCode: String,
    areaLabel: String
});


mongoose.model('area', AreaSchema);