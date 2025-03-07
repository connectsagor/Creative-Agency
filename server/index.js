const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.URI);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); //
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });

const OrderSchema = new mongoose.Schema({
  userId: String,
  name: String,
  email: String,
  title: String,
  description: String,
  price: String,
  image: String,
  role: {
    type: String,
    default: "user",
  },
  status: {
    type: String,
    default: "Pending",
  },
});
const ReviewSchema = new mongoose.Schema({
  userName: String,
  coName: String,
  review: String,
  image: String,
});

const Order = mongoose.model("Order", OrderSchema);

const Review = mongoose.model("Review", ReviewSchema);

app.post("/addOrder", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const orderData = {
      ...req.body,
      image: req.file.filename,
    };

    const newOrder = await Order.create(orderData);

    if (newOrder) {
      return res.status(200).json({
        message: "Your order is stored.",
        insertedCount: 1,
      });
    }

    res.status(500).json({ message: "Insertion failed", insertedCount: 0 });
  } catch (error) {
    console.error("Error storing order:", error);
    res.status(500).json({ message: "Server error", insertedCount: 0 });
  }
});

app.post("/addReview", upload.single("avater"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const reviewData = {
      ...req.body,
      image: req.file.filename,
    };

    const newReview = await Review.create(reviewData);

    if (newReview) {
      return res.status(200).json({
        message: "Your review is updated.",
        insertedCount: 1,
      });
    }

    res.status(500).json({ message: "Insertion failed", insertedCount: 0 });
  } catch (error) {
    console.error("Error storing order:", error);
    res.status(500).json({ message: "Server error", insertedCount: 0 });
  }
});

app.post("/add-service", upload.none(), async (req, res) => {
  try {
    const serviceData = req.body;

    const newService = await Order.create(serviceData);

    if (newService) {
      return res.status(200).json({
        message: "Service added",
        insertedCount: 1,
      });
    }

    res.status(500).json({ message: "Insertion failed", insertedCount: 0 });
  } catch (error) {
    console.error("Error storing order:", error);
    res.status(500).json({ message: "Server error", insertedCount: 0 });
  }
});

app.get("/my-order", async (req, res) => {
  const id = req.query.id;

  try {
    const myOrder = await Order.find({ userId: id });

    if (myOrder) {
      return res.status(200).json({
        message: "Your orders items.",
        itemsCount: 1,
        data: myOrder,
      });
    }

    res.status(500).json({ message: "Retrive failed", itemsCount: 0 });
  } catch (error) {
    console.error("Error getting order:", error);
    res.status(500).json({ message: "Server error", itemsCount: 0 });
  }
});

app.get("/allUsers", async (req, res) => {
  try {
    const allUser = await Order.find({});

    if (allUser) {
      return res.status(200).json({
        message: "all users.",
        data: allUser,
      });
    }

    res.status(500).json({ message: "Retrive failed" });
  } catch (error) {
    console.error("Error getting order:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.get("/reviews", async (req, res) => {
  try {
    const allReview = await Review.find({}).sort({ _id: -1 }).limit(3);

    if (allReview) {
      return res.status(200).json({
        message: "All review",
        itemsCount: 1,
        data: allReview,
      });
    }

    res.status(500).json({ message: "Retrive failed", itemsCount: 0 });
  } catch (error) {
    console.error("Error getting order:", error);
    res.status(500).json({ message: "Server error", itemsCount: 0 });
  }
});

app.patch("/add-admin", async (req, res) => {
  try {
    const email = req.body.email;

    const updatedUser = await Order.findOneAndUpdate(
      { email: email },
      { role: "admin" },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json({ message: "User set as admin", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.get("/is-admin/:email", async (req, res) => {
  const email = req.params.email;
  try {
    const user = await Order.findOne({ email });

    if (user && user.role === "admin") {
      return res.json({ isAdmin: true });
    }

    res.json({ isAdmin: false });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

app.listen(port);
