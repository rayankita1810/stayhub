const Review = require("../models/review");
const Listing = require("../models/listing");

module.exports.createReview = async(req,res)=>{
   const listing=await Listing.findById(req.params.id);
   const newreview =new Review(req.body.review);
   newreview.author = req.user._id;
   listing.reviews.push(newreview);
   await newreview.save();
   await listing.save();
   req.flash("success", "Review edited");
   res.redirect(`/${listing.id}`);
}
module.exports.deleteReview=async(req,res)=>{
 let {id, reviewId} = req.params;
 await Listing.findByIdAndUpdate(id,{$pull:{reviews:reviewId}});
 await Review.findByIdAndDelete(reviewId);
 req.flash("success", "Review deleted");
 res.redirect(`/${id}`)
}