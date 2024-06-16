const Booking = require('../models/Booking');

exports.getAllBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.json(bookings);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.createBooking = async (req, res) => {
    try {
        const newBooking = new Booking(req.body);
        const booking = await newBooking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.ChangeStatus= async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    try {
      const booking = await Booking.findByIdAndUpdate(id, { status }, { new: true });
  
      if (!booking) {
        return res.status(404).json({ error: 'Booking not found' });
      }
  
      res.json({ message: 'Booking status updated successfully', booking });
    } catch (error) {
      console.error('Error updating booking status:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  exports.getBookingsByUserId = async (req, res) => {
    const userId = req.userId; // Assuming userId is available in the request

    try {
        const bookings = await Booking.find({ userId }); // Find bookings by userId

        if (!bookings || bookings.length === 0) {
            return res.status(404).json({ error: 'No bookings found for this user' });
        }

        res.json(bookings);
    } catch (error) {
        console.error('Error fetching bookings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteBooking = async (req, res) => {
    const { id } = req.params;

    try {
        const booking = await Booking.findByIdAndDelete(id);

        if (!booking) {
            return res.status(404).json({ error: 'Booking not found' });
        }

        res.json({ message: 'Booking deleted successfully' });
    } catch (error) {
        console.error('Error deleting booking:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}; bookingcontroller