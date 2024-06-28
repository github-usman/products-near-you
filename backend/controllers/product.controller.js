import { Product } from "../models/product.model.js";
import catchAysncErrors from "../middleware/catchAysncErrors.js";
import ApiFeatures from "../utils/api-feature.js";

// Get all Product

export const getProducts = catchAysncErrors(async (req, res, next) => {
  const resultPerPage =5;
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const allProduct = await apiFeatures.query;
  res.status(200).json({
    success: true,
    allProduct,
    productCount
  });
});

// *************ADMIN ROUTES***************//

// Create a Product -------ADMIN routes

export const createProduct = catchAysncErrors(async (req, res, next) => {
  const newProduct = req.body;
  await Product.create(newProduct);
  res.status(201).json({
    success: true,
    newProduct,
  });
});

// Update a Product -------ADMIN routes

export const updateProduct = catchAysncErrors(async (req, res, next) => {
  const existingProduct = await Product.findById(req.params.id);
  if (!existingProduct) {
    return next();
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.status(200).json({
    success: true,
    updatedProduct,
  });
});

// Update a Product -------ADMIN routes

export const deleteProduct = catchAysncErrors(async (req, res, next) => {
  const existingProduct = await Product.findById(req.params.id);
  if (!existingProduct) {
    return next();
  }

  await Product.findByIdAndDelete(existingProduct);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});
