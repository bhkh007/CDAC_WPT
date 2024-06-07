// const express = require('express');
// const router = express.Router();
// const bookingController = require('../controllers/bookingController');
// const authMiddleware = require('../middleware/authMiddleware');
// const roleMiddleware = require('../middleware/roleMiddleware')

// // POST request to create a booking
// router.post('/addBooking', authMiddleware, bookingController.createBooking);

// // GET request to retrieve user's bookings
// router.get('/userData', bookingController.getBookings);

// // GET request to retrieve all bookings (for admin)
// //router.get('/all', authMiddleware, bookingController.getAllBookings);
// router.get('/all',  bookingController.getAllBookings);


// // POST request to submit request callback form
// router.post('/callback', bookingController.requestCallback);

// module.exports = router;

const express = require('express');
const router = express.Router();
const BookingControllers = require('../controllers/BookingControllers');
const authMiddleware = require('../middleware/authMiddleware');
router.post('/addBooking', BookingControllers.createBooking);
router.get('/allBookings', BookingControllers.getAllBookings)
router.put('/:id/status',BookingControllers.ChangeStatus);
router.get('/:id', BookingControllers.getBookingsByUserId);
module.exports = router;