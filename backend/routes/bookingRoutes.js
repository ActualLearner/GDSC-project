const express = require('express');
const bookingController = require('../controllers/bookingController.js');

const router = express.Router();

router.get("/", bookingController.getBookings);
router.post("/", bookingController.createBooking);
router.put("/:id", bookingController.updateBooking);
router.delete("/:id", bookingController.deleteBooking);

module.exports = router;