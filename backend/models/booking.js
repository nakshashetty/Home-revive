import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId:{
      type:String,
    },
    userEmail:{
      type:String,
    },
    fullName: {
      type: String,
      required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    date: {
      type: Date,
    },
    architect: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    furniture: [
      {
        furnitureId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'FurnitureData',
        },
      }
    ],

    furnitureList: [
        {
          name: String,
          price: Number,
          image: String,
          Des: String
        }
      ]
    },
  
  { timestamps: true }
);

export default mongoose.model("booking", bookingSchema);
