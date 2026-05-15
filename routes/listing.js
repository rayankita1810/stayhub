const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLoggedIn, isOwner, validateListing, isNotBlocked } = require("../middleware.js");
const listingcontroller = require("../controllers/listing.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingcontroller.index))
  .post(
    isLoggedIn,
     isNotBlocked,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingcontroller.addNewListing)
  );

//add new listing
router.get("/new", isLoggedIn,isNotBlocked,  listingcontroller.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingcontroller.showAllListings))
  .put(
    isLoggedIn,
    isNotBlocked, 
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingcontroller.saveEditedData)
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingcontroller.deleteListing));

//edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isNotBlocked, 
  isOwner,
  wrapAsync(listingcontroller.showEditPage)
);

module.exports = router;
