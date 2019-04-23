const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
    pageId: String,
    toPage: String,
    areaCode: String
});


mongoose.model('page', PageSchema);