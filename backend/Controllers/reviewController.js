// import Review from "../models/review.js";
// import furnitureData from "../models/furnitureData";

// export const CreateReview = async(req,res)=>{

//     const furnitureDataId = req.params.tourId
//     const newReview = new Review({ ...req.body})
//     try {

//         const savedReview = await newReview.save()

//         await furnitureData.findByIdAndUpdate(id,{
//             $push: {reviews: savedReview._id}
//         })

//         res.status(200).json({success:true, message:'Review submitted', data:savedReview})
        
//     } catch (err) {
//         res.status(500).json({success:false, message:'failed to submit'})
        
//     }
// }
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
