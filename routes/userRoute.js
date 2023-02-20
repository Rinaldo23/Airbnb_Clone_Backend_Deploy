import express from "express"
import { deleteUser, getUser, getUsers, updateUser } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../utils/verification.js";

const userRouter = express.Router();

// UPDATE USER
userRouter.put("/:id", verifyUser, updateUser);

// DELETE USER
userRouter.delete("/:id", verifyUser, deleteUser);

// GET USER
userRouter.get("/:id", verifyUser, getUser);

// GET ALl USERS
userRouter.get("/", verifyAdmin, getUsers);

// userRouter.get("/checkauthentication", verifyToken, (req, res, next) => {
//     res.send("hello user, you are logged in")
// })

// userRouter.get("/checkuser/:id", verifyUser, (req, res, next) => {
//     res.send("hello user, you are logged in and you can delete your account")
// })

// userRouter.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//     res.send("hello admin, you are logged in and you can delete all accounts")
// })

export default userRouter;