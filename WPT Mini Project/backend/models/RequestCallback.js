const mongoose = require('mongoose');

const RequestCallbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    location: { type: String, required: true }
   
}, { timestamps: true });

module.exports = mongoose.model('RequestCallback', RequestCallbackSchema);
