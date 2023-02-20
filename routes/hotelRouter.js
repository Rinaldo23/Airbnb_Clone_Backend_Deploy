import express from "express"
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../utils/verification.js";

const hotelRouter = express.Router();

// CREATE HOTEL
hotelRouter.post("/", verifyAdmin, createHotel)

// UPDATE HOTEL
hotelRouter.put("/:id", verifyAdmin, updateHotel)

// DELETE HOTEL
hotelRouter.delete("/:id", verifyAdmin, deleteHotel)

// GET HOTEL
hotelRouter.get("/find/:id", getHotel)

// GET ALl HOTELS
hotelRouter.get("/", getHotels)

// GET HOTELS BY CITY
hotelRouter.get("/countByCity", countByCity);

// GET HOTELS BY TYPE
hotelRouter.get("/countByType", countByType);

hotelRouter.get("/room/:id", getHotelRooms);


export default hotelRouter;