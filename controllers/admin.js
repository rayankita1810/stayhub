const Listing = require("../models/listing");
const User = require("../models/user");
const Review = require("../models/review");

// Dashboard
module.exports.dashboard = async (req, res) => {
  console.log("🔥 ADMIN DASHBOARD ROUTE HIT");

  const pendingCount = await Listing.countDocuments({ status: "pending" });
  const approvedCount = await Listing.countDocuments({ status: "approved" });
  const rejectedCount = await Listing.countDocuments({ status: "rejected" });

  const recentListings = await Listing.find()
    .sort({ _id: -1 })
    .limit(5);

  res.render("admin/dashboard", {
    pendingCount,
    approvedCount,
    rejectedCount,
    recentListings,
  });
};

// Listings page
module.exports.listings = async (req, res) => {
  const { status } = req.query;

  let filter = {};
  if (status) filter.status = status;

  const listings = await Listing.find(filter).populate("owner");

  res.render("admin/listings", { listings, status });
};

// Users page
module.exports.users = (req, res) => {
  res.render("admin/users");
};

// Approve listing
module.exports.approveListing = async (req, res) => {
  await Listing.findByIdAndUpdate(req.params.id, {
    status: "approved",
  });

  const redirectUrl = req.body.redirectUrl || "/admin/listings";

  res.redirect(redirectUrl);
};

// Reject listing
module.exports.rejectListing = async (req, res) => {
  await Listing.findByIdAndUpdate(req.params.id, {
    status: "rejected",
  });

  const redirectUrl = req.body.redirectUrl || "/admin/listings";

  res.redirect(redirectUrl);
};

module.exports.users = async (req, res) => {
  const users = await User.find({});

  const userData = await Promise.all(
    users.map(async (user) => {
      const listingsCount = await Listing.countDocuments({
        owner: user._id,
      });

      return {
        user,
        listingsCount,
      };
    })
  );

  res.render("admin/users", { userData });
};

module.exports.blockUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    isBlocked: true,
  });

  res.redirect("/admin/users");
};

// ✅ Unblock user
module.exports.unblockUser = async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, {
    isBlocked: false,
  });

  res.redirect("/admin/users");
};


module.exports.allReviews = async (req, res) => {
  const reviews = await Review.find({})
    .populate("author")
    .populate("listing")
    .sort({ created_at: -1 });

  res.render("admin/reviews", { reviews });
};
module.exports.deleteReview = async (req, res) => {
  const { id } = req.params;

  await Listing.updateMany(
    { reviews: id },
    { $pull: { reviews: id } }
  );

  await Review.findByIdAndDelete(id);

  req.flash("success", "Review deleted");

  res.redirect("/admin/reviews");
};