const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const { isLoggedIn, isReviewAuthor, validateReview } = require("../middleware.js");
const reviewcontroller = require("../controllers/reviews.js");

//reviews
router.post("/",isLoggedIn ,validateReview,wrapAsync(reviewcontroller.createReview));
//delete review
router.delete("/:reviewId",isLoggedIn,isReviewAuthor, wrapAsync(reviewcontroller.deleteReview));
module.exports=router;