// import express from 'express'
// import { CreateReview } from '../Controllers/reviewController.js';
// import { verifyUser } from '../utils/verifyToken.js';

// const router = express.Router()

// router.post('/:furnitureDataId', verifyUser, CreateReview )

// export default router;
// import bodyParser from 'body-parser';
// const router = express.Router();
// // Define Review Schema
// const reviewSchema = new mongoose.Schema({
//   furnitureId: Number,
//   userName: String,
//   reviewText: String,
// });

// const Review = mongoose.model('Review', reviewSchema);

// // Middleware
// app.use(bodyParser.json());

// // API endpoint to save reviews
// app.post('/api/reviews', async (req, res) => {
//   const { furnitureId, userName, reviewText } = req.body;

//   try {
//     const newReview = new Review({ furnitureId, userName, reviewText });
//     await newReview.save();
//     res.status(201).json({ message: 'Review saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving review' });
//   }
// });
// Routes/review.js
import express from 'express';
import FurnitureData from '../models/furnitureData.js';
const router = express.Router();

router.post('/:furnitureId/review', async (req, res) => {
  const { furnitureId, username, review } = req.body;

  const furniture = await FurnitureData.findById(furnitureId);
  if (!furniture) return res.status(404).send('Furniture not found');

  const newReview = {
    username,
    review,
    date: new Date(),
  };

  furniture.reviews.push(newReview);
  await furniture.save();

  res.send(newReview);
});

export default router;