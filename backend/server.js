const express = require ("express");
const mongoose = require ("mongoose");
const cors = require ("cors");
const dotenv = require ('dotenv');
const carRoutes = require ("./routes/carRoutes.js");
const bookingRoutes = require ("./routes/bookingRoutes.js");

dotenv.config();
const corsOptions ={
    origin:"*",
    credentials:true,
    optionSuccessStatus:200,
}

const app = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/car', carRoutes);
app.use('/api/booking', bookingRoutes);

(async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
        await app.listen(process.env.PORT, () => {
            console.log("Listening on Port 3355")
        });
    } catch (e){
        console.log(e.message);
    }
})();

