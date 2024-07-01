import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product Name"],
  },
  description: {
    type: String,
    required: [true, "Please enter product details/description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter product Price"],
    maxLength: [9, "Price cannot exceed 9 characters"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter category of the product"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter prodcut stock"],
    maxLength: [4, "Stock cannot exceed 4 characters"],
    default: 1,
  },
  rating: {
    type: Number,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: true,
      },
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
    },
  ],
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Product = mongoose.model("Product", productSchema);
