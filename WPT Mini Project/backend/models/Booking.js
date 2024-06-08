
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    location: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    eventType: { type: String, required: true, enum: ['Wedding', 'Conference', 'Party', 'Anniversary', 'Celebrations', 'Other'] },
    eventDate: { type: Date, required: true },
    eventTime: { type: String, required: true }, // Time in HH:MM format
    status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' }
}, { timestamps: true });

module.exports = mongoose.model('Booking', BookingSchema);