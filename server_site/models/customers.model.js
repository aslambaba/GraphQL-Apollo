const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
    Name: String,
    Product: String,
    Country: String,  
})

const CustomerModel = mongoose.model('GQL-A', CustomerSchema);
module.exports = CustomerModel;