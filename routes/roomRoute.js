import express from "express"
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom, updateRoomAvailability } from "../controllers/roomController.js";
import { verifyAdmin } from "../utils/verification.js";

const roomRouter = express.Router();

// CREATE ROOM
roomRouter.post("/:hotelid", verifyAdmin, createRoom);

// UPDATE ROOM
roomRouter.put("/:id", verifyAdmin, updateRoom);

roomRouter.put("/availability/:id", updateRoomAvailability);

// // DELETE ROOM
roomRouter.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

// // GET ROOM
roomRouter.get("/:id", getRoom);

// // GET ALl ROOMS
roomRouter.get("/", getRooms);


export default roomRouter;