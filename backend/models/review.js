// import mongoose from "mongoose";

// const furnitureDataSchema = new mongoose.Schema(
//   {
//     reviews: [
//     {
//       type: mongoose.Types.ObjectId,
//       ref: "Review",
//     },],
//     username: {
//       type: String,
//       required: true,
//     },
//     reviewText: {
//       type: String,
//       required: true,
//     },
//   },
//   { timestamps: true }
// );

// const furnitureData = mongoose.model('furnitureData', furnitureDataSchema);
// export default furnitureData;
import bodyParser from 'body-parser';

// Define Review Schema
const reviewSchema = new mongoose.Schema({
  furnitureId: Number,
  userName: String,
  reviewText: String,
});

const Review = mongoose.model('Review', reviewSchema);

// Middleware
app.use(bodyParser.json());

// API endpoint to save reviews
app.post('/api/reviews', async (req, res) => {
  const { furnitureId, userName, reviewText } = req.body;

  try {
    const newReview = new Review({ furnitureId, userName, reviewText });
    await newReview.save();
    res.status(201).json({ message: 'Review saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error saving review' });
  }
});
