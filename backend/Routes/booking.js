import express from 'express'

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking, getBookingForUser } from '../Controllers/BookingController.js';

const router = express.Router()

router.post('/', verifyUser, createBooking );
router.get("/:id", verifyUser, getBooking );
router.get('/', verifyAdmin, getAllBooking );
router.get('/:id', verifyUser, getBooking);
router.get('/user/:userId', verifyUser, getBookingForUser);

export default router
