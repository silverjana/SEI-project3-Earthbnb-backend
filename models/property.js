
import mongoose from "mongoose"

//schema for review
const reviewSchema = new mongoose.Schema({
  text: { type: String, required: true },
  rating: Number,
  createdAt: { type: Date, default: Date.now() },
  createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
})

const propertySchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  type: { type: String, enum: ["beach", "cabin", "camping", "art city", "chalet"], required: true, unique: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  date_start: { type: Date, },
  date_end: { type: Date, },
  amenities: String,
  longitude: String,
  images: [],
  reviews: [reviewSchema],
  createdAt: { type: Date, default: Date.now() },
})

export default mongoose.model("Property", propertySchema)