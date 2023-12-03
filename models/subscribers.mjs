import mongoose from "mongoose";

const subscribersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subscribedChanel: {
    type: String,
    required: true,
  },
  subscribedDate: { type: Date, required: true, default: Date.now() },
});

const Subscribers = mongoose.model("Subscribers", subscribersSchema);

export default Subscribers;
