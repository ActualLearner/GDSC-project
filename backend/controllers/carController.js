const Car = require('../models/carModel.js');

const getCars = async (req, res) => {
    try {

        const cars = await Car.find();

        if (!cars || cars.length === 0) {
            res.status(404).send("No Cars found.");
        } else {
            res.status(200).json({ cars });
        }

    } catch (e) {
        return res.status(500).send("Failed to retrieve cars.");
    }
};

const queryCars = async (req, res) => {
    try {
        const model = req.params.model;

        const cars = await Car.find({ model: model });
        if (!cars || cars.length === 0) res.status(404).send("No Cars found.");

        res.status(200).json({ cars });

    } catch (e) {
        return res.status(500).json({ error: "Failed to search car." })
    }
}

const createCar = async (req, res) => {
    try {
        const { make, model, category, price_for_3_days, availability, location, imageUrl, seats, transmission } = req.body;

        const newCar = await Car.create({ make, model, category, price_for_3_days, availability, location, imageUrl, seats, transmission });
        if (newCar) res.status(201).json({ newCar });

    } catch (e) {
        return res.status(500).json({ error: "Failed to create car." })
    }
}

const updateCar = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedCar = req.body;

        const car = await Car.findById(id);
        if (!car) res.status(404).json({ error: "Car not found. " })

        Object.keys(updatedCar).forEach(key => {
            car[key] = updatedCar[key];
        });

        await car.save();
        res.status(200).json({ car })
    } catch (e) {
        return res.status(500).json({ error: "Couldn't update car." })
    }

}

const deleteCar = async (req, res) => {
    try {
        const id = req.params.id;

        const car = await Car.findByIdAndDelete(id);
        if (!car) return res.status(404).json({ error: "Couldn't find car" });

        return res.status(204).send("Deleted Successfully!");
    } catch (e) {
        return res.status(500).json({ error: e.message })
    }

}

module.exports = { getCars, queryCars, createCar, updateCar, deleteCar };