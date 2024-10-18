const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  u_id: {
    type:String,
    required: true
  }
});
const Booking = mongoose.model('Booking', bookingSchema);
module.exports = {
    Booking
};