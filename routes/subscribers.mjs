import express from "express";
import subscriber from "../models/subscribers.mjs";
const router = express.Router();
// getting all
router.get("/", async function (req, res) {
  try {
    const subscribers = await subscriber.find({});
    res.json(subscribers);
  } catch (err) {
    res.status(err.statusCode).json(err.message);
  }
});
//getting one
router.get("/:id", getSubscriber, function (req, res) {
  res.json(res.subscriber);
});

// create one
router.post("/", async function (req, res) {
  const newSubscriber = new subscriber({
    name: req.body.name,
    subscribedChanel: req.body.subscribedChanel,
  });
  try {
    const savedSubscriber = await newSubscriber.save();
    res.status(201).json({
      message: "Subscriber created successfully",
      subscriber: savedSubscriber,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// updating one
router.patch("/:id", getSubscriber, async function (req, res) {
  if (req.body.name !== null) {
    res.subscriber.name = req.body.name;
  }
  if (req.body.subscribedChanel) {
    res.subscriber.subscribedChanel = req.body.subscribedChanel;
  }
  try {
    const updatedSubscriber = await res.subscriber.save();
    res.json({
      message: "Subscriber updated successfully",
      subscriber: updatedSubscriber,
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// deleting one
router.delete("/:id", getSubscriber, async function (req, res) {
  try {
    await res.subscriber.deleteOne();
    res.json({ message: "subscribre removed successfully" });
  } catch (err) {
    res.status(res.statusCode).json(err.message);
  }
});

// Middleware
async function getSubscriber(req, res, next) {
  try {
    const foundSubscriber = await subscriber.findById(req.params.id);
    if (!foundSubscriber) {
      return res.status(404).json({ message: "Subscriber not found" });
    }
    res.subscriber = foundSubscriber;
    next();
  } catch (err) {
    res.status(res.statusCode).json({ message: err.message });
  }
}

export default router;
