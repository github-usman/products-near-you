import multer from "multer";
import cloudinary from "../config/cloudinaryConfig.js";
import { Product } from "../models/product.model.js";
import catchAysncErrors from "../middleware/catchAysncErrors.js";
import ErrorHander from "../utils/error-handler.js";
import ApiFeatures from "../utils/api-feature.js";
import { resultPerPage } from "../config/config.js";

// Get all Product

export const getAllProductDetails = catchAysncErrors(async (req, res, next) => {
  const productCount = await Product.countDocuments();
  const apiFeatures = new ApiFeatures(Product.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const allProduct = await apiFeatures.query;
  res.status(200).json({
    success: true,
    allProduct,
    productCount,
  });
});

// Get Product Details
export const getProductDetails = catchAysncErrors(async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    product,
  });
});

// *************ADMIN ROUTES***************//

// Create a Product -------ADMIN routes

// Configure Multer for file handling
const storage = multer.memoryStorage();
const upload = multer({ storage });

export const createProduct = catchAysncErrors(async (req, res, next) => {
  upload.array("images")(req, res, async (err) => {
    if (err) {
      return next(new ErrorHander("Image upload failed", 500));
    }
    let images = req.files;
    if (!images || images.length === 0) {
      return next(new ErrorHander("Images are required", 404));
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      try {
        const result = await new Promise((resolve, reject) => {
          const uploadStream = cloudinary.v2.uploader.upload_stream(
            { folder: "products-images" },
            (error, result) => {
              if (error) reject(error);
              else resolve(result);
            }
          );
          uploadStream.end(images[i].buffer);
        });

        imagesLinks.push({
          public_id: result.public_id,
          url: result.secure_url,
        });
      } catch (error) {
        return next(new ErrorHander(`Error uploading image ${i}`, 500));
      }
    }

    req.body.images = imagesLinks;
    req.body.user = req.user.id;
    const newProduct = await Product.create(req.body);
    res.status(201).json({
      success: true,
      newProduct,
    });
  });
});

// Update a Product -------ADMIN routes

export const updateProduct = catchAysncErrors(async (req, res, next) => {
  const existingProduct = await Product.findById(req.params.id);
  if (!existingProduct) {
    return next(new ErrorHander("Product not found", 404));
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
    return next(new ErrorHander("Product not found", 404));
  }

  await Product.findByIdAndDelete(existingProduct);
  res.status(200).json({
    success: true,
    message: "Product deleted successfully",
  });
});

// Create New Review or Update the review
export const createProductReview = catchAysncErrors(async (req, res, next) => {
  const { rating, comment, productId } = req.body;

  const review = {
    user: req.user._id,
    name: req.user.name,
    rating: Number(rating),
    comment,
  };

  const product = await Product.findById(productId);
  const isReviewed = product.reviews.find(
    (rev) => rev.user.toString() === req.user._id.toString()
  );

  if (isReviewed) {
    product.reviews.forEach((rev) => {
      if (rev.user.toString() === req.user._id.toString())
        (rev.rating = rating), (rev.comment = comment);
    });
  } else {
    product.reviews.push(review);
    product.numOfReviews = product.reviews.length;
  }

  let avg = 0;

  product.reviews.forEach((rev) => {
    avg += rev.rating;
  });

  product.ratings = avg / product.reviews.length;

  await product.save({ validateBeforeSave: false });

  res.status(200).json({
    success: true,
  });
});

// Get All Reviews of a product

export const getProductReviews = catchAysncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.id);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  res.status(200).json({
    success: true,
    reviews: product.reviews,
  });
});

// Delete Review
export const deleteReview = catchAysncErrors(async (req, res, next) => {
  const product = await Product.findById(req.query.productId);

  if (!product) {
    return next(new ErrorHander("Product not found", 404));
  }

  const reviews = product.reviews.filter(
    (rev) => rev._id.toString() !== req.query.id.toString()
  );

  let avg = 0;

  reviews.forEach((rev) => {
    avg += rev.rating;
  });

  let ratings = 0;

  if (reviews.length === 0) {
    ratings = 0;
  } else {
    ratings = avg / reviews.length;
  }

  const numOfReviews = reviews.length;

  await Product.findByIdAndUpdate(
    req.query.productId,
    {
      reviews,
      ratings,
      numOfReviews,
    },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );

  res.status(200).json({
    success: true,
  });
});
