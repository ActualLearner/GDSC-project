const Booking = require('../models/bookingModel.js');

const getBookings = async (req, res) => {
    try {
        const bookings = await Booking.find();
        
        if (!bookings || bookings.length === 0) {
            res.status(404).send("No bookings found.")
        } else {
            res.status(200).json({ bookings });
        }
    } catch (e) {
        return res.status(500).send("Failed to retrieve bookings.");
    }
};

const createBooking = async (req, res) => {
    try {
        const { user, car, startDate, endDate, totalCost, pickupLocation, returnLocation, createdAt } = req.body;

        const newBooking = await Booking.create({ user: user, car: car, startDate: startDate, endDate: endDate, totalCost: totalCost, pickupLocation: pickupLocation, returnLocation: returnLocation, createdAt: createdAt });
        if (newBooking) res.status(201).json({ newBooking });

    } catch (e) {
        return res.status(500).json({ error: "Failed to create booking." })
    }
}

const updateBooking = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedbooking = req.body;

        const booking = await Booking.findById(id);
        if (!booking) res.status(404).json({ error: "booking not found. " })

        Object.keys(updatedbooking).forEach(key => {
            booking[key] = updatedbooking[key];
        });

        await booking.save();
        res.status(200).json({ booking });
    } catch (e) {
        return res.status(500).json({ error: "Couldn't update booking." });
    }

}

const deleteBooking = async (req, res) => {
    try {
        const id = req.params.id;

        const booking = await Booking.findByIdAndDelete(id);
        if (!booking) return res.status(404).json({ error: "Couldn't find booking" });

        return res.status(204).send("Deleted Successfully!");
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }

}

module.exports = { getBookings, createBooking, updateBooking, deleteBooking };