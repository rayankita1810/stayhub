const express = require("express");
const router = express.Router();

const { isAdmin } = require("../middleware.js");
const adminController = require("../controllers/admin.js");
const wrapAsync = require("../utils/wrapAsync");

// Dashboard
router.get("/dashboard", isAdmin, adminController.dashboard);

// Listings page
router.get("/listings", isAdmin, adminController.listings);

// Users page
router.get("/users", isAdmin, adminController.users);

// Review page
router.get("/reviews", isAdmin, adminController.allReviews);

// Delete review
router.delete(
  "/reviews/:id",
  isAdmin,
  wrapAsync(adminController.deleteReview)
);

// Approve listing
router.post(
  "/listings/:id/approve",
  isAdmin,
  adminController.approveListing
);

// Reject listing
router.post(
  "/listings/:id/reject",
  isAdmin,
  adminController.rejectListing
);

// Block user
router.post(
  "/users/:id/block",
  isAdmin,
  adminController.blockUser
);

// Unblock user
router.post(
  "/users/:id/unblock",
  isAdmin,
  adminController.unblockUser
);

module.exports = router;