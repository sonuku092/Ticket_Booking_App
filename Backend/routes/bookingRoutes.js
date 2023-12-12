const express=require('express');
const bookingRouter=express.Router();
const {Booking,deleteBooking,getBookById}=require('../Controllers/bookingController')

bookingRouter.post('/',Booking);
bookingRouter.get("/:id",getBookById);
bookingRouter.delete('/:id',deleteBooking);

module.exports=bookingRouter;