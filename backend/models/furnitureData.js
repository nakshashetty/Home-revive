// import mongoose from "mongoose";

// const furnitureDataSchema = new mongoose.Schema(
//   {

//     reviews: [
//       {
//         type: mongoose.Types.ObjectId,
//         ref: "Review",
//       },
//     ],

//     featured: {
//       type: Boolean,
//       default: false,
//     },
//   },
//   { timestamps: true }
// );

// export default mongoose.model("furnitureData", furnitureDataSchema);
import mongoose from 'mongoose';
const furnitureDataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  Des: { type: String, required: true },
  reviews: [
    {
      username: { type: String, required: true },
      review: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const FurnitureData = mongoose.model('FurnitureData', furnitureDataSchema);

export default FurnitureData;