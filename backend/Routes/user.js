import express from 'express'
import { createUser, deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/UserController.js';
import { verifyUser } from '../utils/verifyToken.js';
const router = express.Router();


//update user
router.put("/:id", verifyUser,  updateUser);

//delete user
router.delete("/:id", verifyUser,  deleteUser);

//get single user
router.get("/:id", verifyUser, getSingleUser);

//get All users
router.get("/", verifyUser,  getAllUser);

export default router;