// import furnitureData from '../models/furnitureData.js';

// // Create new furniture data
// export const createFurnitureData = async (req, res) => {
//   const newFurnitureData = new furnitureData(req.body);

//   try {
//     const savedFurnitureData = await newFurnitureData.save();

//     res.status(200).json({
//       success: true,
//       message: 'Successfully created',
//       data: savedFurnitureData,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to create. Try again.',
//     });
//   }
// };

// // Update furniture data
// export const updateFurnitureData = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const updatedFurnitureData = await furnitureData.findByIdAndUpdate(
//       id,
//       {
//         $set: req.body,
//       },
//       { new: true }
//     );

//     res.status(200).json({
//       success: true,
//       message: 'Successfully updated',
//       data: updatedFurnitureData,
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to update',
//     });
//   }
// };

// // Delete furniture data
// export const deleteFurnitureData = async (req, res) => {
//   const id = req.params.id;

//   try {
//     await furnitureData.findByIdAndDelete(id);

//     res.status(200).json({
//       success: true,
//       message: 'Successfully deleted',
//     });
//   } catch (err) {
//     res.status(500).json({
//       success: false,
//       message: 'Failed to delete',
//     });
//   }
// };

// // Get single furniture data
// export const getSingleFurnitureData = async (req, res) => {
//   const id = req.params.id;

//   try {
//     const singleFurnitureData = await furnitureData.findById(id).populate('reviews');

//     res.status(200).json({
//       success: true,
//       message: 'Successful',
//       data: singleFurnitureData,
//     });
//   } catch (err) {
//     res.status(404).json({
//       success: false,
//       message: 'Not found',
//     });
//   }
// };

// // Get all furniture data
// export const getAllFurnitureData = async (req, res) => {
//   const page = parseInt(req.query.page || 0); // Default to page 0 if not provided

//   try {
//     const furnitureDatas = await furnitureData.find({}).populate('reviews').skip(page * 8).limit(8);

//     res.status(200).json({
//       success: true,
//       count: furnitureDatas.length,
//       message: 'Successful',
//       data: furnitureDatas,
//     });
//   } catch (err) {
//     res.status(404).json({
//       success: false,
//       message: 'Not found',
//     });
//   }
// };

router.post('/review', async (req, res) => {
    console.log('Received request:', req.body);
  
    const { furnitureId, username, review } = req.body;
  
    const furniture = await furnitureData.findById(furnitureId);
    if (!furniture) {
      console.log('Furniture not found');
      return res.status(404).send('Furniture not found');
    }
  
    const newReview = {
      username,
      review,
      date: new Date(),
    };
  
    furniture.reviews.push(newReview);
    await furniture.save();
  
    console.log('Review saved:', newReview);
    res.send(newReview);
  });
  