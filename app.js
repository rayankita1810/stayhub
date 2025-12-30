if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const session = require("express-session");
const MongoStore = require('connect-mongo').default;
const flash = require("connect-flash");
const passport = require("passport");
const localStrategy = require("passport-local");
const User = require("./models/user.js");
const userRouter = require("./routes/user.js");
const listingRouter = require("./routes/listing.js");
const reviewRouter = require("./routes/review.js");

let dburl = process.env.ATLASDB_URL;
async function main() {
  await mongoose.connect(dburl);
}
main()
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

const store = new MongoStore({
    mongoUrl: dburl,
    crypto: {
      secret:process.env.SECRET,
    },
    touchAfter:24*3600,
  });
store.on("error", ()=>{
  console.log("ERROR in mongo session store", ErrorEvent);
})
const sessionOption = {
  store,
  secret: process.env.SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    expires: Date.now() + 7 * 24 * 60 * 60 * 1000,
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
};

// app.get("/", (req, res) => {
//   res.send("Hi I am root");
// });


app.use(session(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new localStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});
app.use("/", userRouter);
app.use("/", listingRouter);
app.use("/:id/reviews", reviewRouter);


app.use((req, res, next) => {
  next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
  const message = err.message;
  if (!err.message) err.message = "Something went wrong!";
  res.render("error.ejs", { message });
});

app.listen(3000, () => {
  console.log("app is listening at 3000");
});

//testing route
// app.get("/test",async (req, res)=>{
//     let sampleListing = new Listing({
//         title:"Niarala",
//         description:"New Construction",
//         price:1200,
//         location:"Kolkata",
//         country:"India",
//     });
//     await sampleListing.save();
//     res.send("success");
// });
// app.get("/demouser",async(req,res,next)=>{
//   let fakeuser = new User({
//     email:"abc@gmail.com",
//     username:"fakeuser",
//   });
//   let registeruser = await User.register(fakeuser,"123");
//   res.send(registeruser);

// })
