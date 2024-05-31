// import express from 'express';
// import { createTour, updateTour, deleteTour, getSingleTour, getAllTour , getTourBySearch, getFeaturedTour, getTourCount } from "../Controllers/furnitureDataController.js";

// import { verifyAdmin } from '../utils/verifyToken.js';
// const router = express.Router()

// //create new tour
// router.post("/", verifyAdmin, createfurnitureData);

// //update tour
// router.put("/:id",verifyAdmin, updatefurnitureData);

// //delete tour
// router.delete("/:id",verifyAdmin, deletefurnitureData);



// export default router;
import express from 'express';
import FurnitureData from '../models/furnitureData.js';
const router = express.Router();

router.post('/:furnitureId/review', async (req, res) => {
//   const { furnitureId, username, review } = req.body;
  const { furnitureId } = req.params;
  const { username, review } = req.body;
  try {
    const furniture = await FurnitureData.findById(furnitureId);
    if (!furniture) {
      return res.status(404).send('Furniture not found');
    }

//   const furniture = await FurnitureData.findById(furnitureId);
//   if (!furniture) return res.status(404).send('Furniture not found');

  const newReview = {
    username,
    review,
    date: new Date(),
  };

  furniture.reviews.push(newReview);
  await furniture.save();
  console.log('Review saved successfully');
  res.send(newReview);
} catch (err) {
  console.error(err);
  res.status(500).send('Internal Server Error');
}
  
});
export default router;
