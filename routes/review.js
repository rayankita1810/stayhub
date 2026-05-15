const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync");
const {
  isLoggedIn,
  isReviewAuthor,
  validateReview,
  isNotBlocked,
} = require("../middleware.js");
const reviewcontroller = require("../controllers/reviews.js");

//reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  isNotBlocked,
  wrapAsync(reviewcontroller.createReview),
);
//delete review
router.delete(
  "/:reviewId",
  isLoggedIn,
  isNotBlocked,
  wrapAsync(reviewcontroller.deleteReview),
);
module.exports = router;
