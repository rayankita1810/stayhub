const Listing = require("../models/listing");
const mbxGeocoding = require('@mapbox/mapbox-sdk/services/geocoding');
const mapToken = process.env.MAP_TOKEN;
const geocodingClient = mbxGeocoding({ accessToken: mapToken });

// module.exports.index = async (req, res) => {
//   const allListings = await Listing.find({});
//   res.render("listings/index.ejs", { allListings });
// };

module.exports.index = async (req, res) => {
  const { category } = req.query;
  const { search } = req.query;

  let allListings;

  if (category) {
    allListings = await Listing.find({ category });
  } 
  else if(search){
    allListings = await Listing.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { location: { $regex: search, $options: "i" } }
      ]
    });
  }
  else {
    allListings = await Listing.find({});
  }

  res.render("listings/index.ejs", { allListings,
    selectedCategory: category || null });
};
module.exports.renderNewForm = async (req, res) => {
  res.render("listings/new.ejs");
};
module.exports.showAllListings = async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  if (!listing) {
    req.flash("error", "Listing does not exist!");
    return res.redirect("/");
  }
  // console.log(listing);
  res.render("listings/show.ejs", { listing });
};

module.exports.addNewListing = async (req, res, next) => {
 let response = await geocodingClient.forwardGeocode({
  query: req.body.listing.location,
  limit: 1
})
  .send();
  // console.log("response", response.body.features[0].geometry);
  let url = req.file.path;

  let filename = req.file.filename;
  // console.log("url",url);
  // console.log("file",filename);
  let newListing = new Listing(req.body.listing);
  newListing.owner = req.user._id;
  newListing.image = { url, filename };
  newListing.geometry=response.body.features[0].geometry;
  await newListing.save();

  req.flash("success", "New listing added");
  res.redirect("/");
};

module.exports.showEditPage = async (req, res) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  if (!listing) {
    req.flash("error", "Listing does not exists!");
    return res.redirect("/");
  }
  let originalurl = listing.image.url.replace("/upload", "/upload/w_250");
  // console.log("originalurl", originalurl);
  res.render("listings/edit.ejs", { listing, originalurl });
};
module.exports.saveEditedData = async (req, res) => {
  let { id } = req.params;
  // console.log("listing",req.body.listing);
  if (!req.body.listing) {
    throw new ExpressError(400, "Send valid data for testing!");
  }
  let newListing = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
  // console.log("57path", req.file);

  // if location has changed then update location
    if (req.body.listing.location) {
    let geoResponse = await geocodingClient
      .forwardGeocode({
        query: req.body.listing.location,
        limit: 1,
      })
      .send();

    newListing.geometry = geoResponse.body.features[0].geometry;
  }

  if (req.file) {
    let url = req.file.path;
    let filename = req.file.filename;
    newListing.image = { url, filename };
    // await newListing.save();
  }
  await newListing.save();

  req.flash("success", "Listing edited");
  res.redirect(`/${id}`);
};
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;
  await Listing.findByIdAndDelete(id);
  req.flash("success", "Listing deleted");
  res.redirect("/");
};
