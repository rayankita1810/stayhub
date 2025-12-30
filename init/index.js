// const mongoose = require("mongoose");
// const initData = require("./data");
// const Listing = require("../models/listing");

// main()
//   .then(() => {
//     console.log("connected to db");
//   })
//   .catch((err) => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/stayhub");
// }

// const initDB = async () => {
//   await Listing.deleteMany({});
//   initData.data = initData.data.map((obj) => ({
//     ...obj,
//     owner: "692f180c9671673b5920ff11",
//   }));
//   await Listing.insertMany(initData.data);
//   console.log("data initialized");
// };
// initDB();
require("dotenv").config();
const mongoose = require("mongoose");
const Listing = require("../models/listing");
const User = require("../models/user");
const initData = require("./data");

const dbUrl = process.env.ATLASDB_URL;

async function main() {
  await mongoose.connect(dbUrl);
  console.log("connected to MongoDB Atlas");
}

const seedUser = async () => {
  // prevent duplicate admin user
  let user = await User.findOne({ username: "admin" });

  if (!user) {
    user = new User({
      username: "admin",
      email: "admin@test.com",
    });
    await User.register(user, "password123");
    console.log("admin user created");
  } else {
    console.log("admin user already exists");
  }

  return user._id;
};

const initDB = async () => {
  await Listing.deleteMany({});
  console.log("old listings removed");

  const ownerId = await seedUser();

  const listingsWithOwner = initData.data.map((listing) => ({
    ...listing,
    owner: ownerId,
  }));

  await Listing.insertMany(listingsWithOwner);
  console.log("listings seeded with owner");
};

main()
  .then(initDB)
  .then(() => mongoose.connection.close())
  .catch((err) => console.log(err));

