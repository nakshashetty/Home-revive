import Booking from '../models/booking.js'

//create new booking 
export const createBooking = async(req,res)=>{
    const newBooking = new Booking(req.body)

    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({success:true, message:'Your booking successfull', data:savedBooking})
    
    } catch (err) {
        console.error(err);
         res.status(500).json({success:true, message:'Internal Server Error'})
         
    }
};



//get Single Booking
// export const getBooking = async(req,res)=>{
//     const id = req.params.id

//     try {
//         const book = await Booking.findById(id)

//         res
//         .status(200)
//         .json({
//             success : true,
//             message: "Successful",
//             data: book,
//         })
//     } catch (err) {
//         res.status(404).json({success: true, message: "not found"});
//     }
// };
export const getBooking = async (req, res) => {
    const id = req.params.id;
  
    try {
      const book = await Booking.findById(id);
  
      if (!book) {
        return res.status(404).json({ message: "Booking not found" });
      }
  
      res.status(200).json({ message: "Success", data: book });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  };

//get  all Booking
export const getAllBooking = async(req,res)=>{


    try {
        const books = await Booking.find()

        res
        .status(200)
        .json({
            success : true,
            message: "Successful",
            data: books,
        })
    } catch (err) {
        res.status(500).json({success: true, message: "Internal Server Error"});
    }
}

export const getBookingForUser = async (req, res) => {
  const { userId } = req.params;

  

  const bookings = await Booking.find({ userId })
    .exec();

  

  res.send(bookings);
}
