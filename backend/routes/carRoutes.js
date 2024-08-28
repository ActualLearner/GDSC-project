const express = require('express');
const carController = require('../controllers/carController.js');

const router = express.Router();

router.get("/", carController.getCars);
router.get("/:model", carController.queryCars);
router.post("/", carController.createCar);
router.put("/:id", carController.updateCar);
router.delete("/:id", carController.deleteCar);

module.exports = router;