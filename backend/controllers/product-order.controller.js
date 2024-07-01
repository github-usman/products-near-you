import { OrderProduct } from "../models/order-product.model.js";
import ErrorHandler from "../utils/error-handler.js";
import catchAsyncErrors from "../middleware/catchAysncErrors.js";

// Create new Order
export const newOrder = catchAsyncErrors(async (req, res, next) => {
  const {
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  const order = await OrderProduct.create({
    shippingInfo,
    orderItems,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
    paidAt: Date.now(),
    user: req.user._id,
  });

  res.status(201).json({
    success: true,
    order,
  });
});

// get Single Order -- ADMIN
export const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await OrderProduct.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  res.status(200).json({
    success: true,
    order,
  });
});

// get logged in user  Orders

export const myOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await OrderProduct.find({ user: req.user._id });

  res.status(200).json({
    success: true,
    orders,
  });
});

// get all Orders -- ADMIN
export const getAllOrders = catchAsyncErrors(async (req, res, next) => {
  const orders = await OrderProduct.find();

  let totalAmount = 0;

  orders.forEach((order) => {
    totalAmount += order.totalPrice;
  });

  res.status(200).json({
    success: true,
    totalAmount,
    orders,
  });
});

// update Order Status -- ADMIN
export const updateOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await OrderProduct.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }

  if (order.orderStatus === "Delivered") {
    return next(new ErrorHandler("You have already delivered this order", 400));
  }

  if (req.body.status === "Shipped") {
    order.orderItems.forEach(async (order_items) => {
      await updateStock(order_items.product, order_items.quantity);
    });
  }
  order.orderStatus = req.body.status;

  if (req.body.status === "Delivered") {
    order.deliveredAt = Date.now();
  }

  await order.save({ validateBeforeSave: false });
  res.status(200).json({
    success: true,
    message: `Updated Order Successfully with : ${req.body.status}`,
  });
});

async function updateStock(id, quantity) {
  const product = await OrderProduct.findById(id);

  product.Stock -= quantity;

  await product.save({ validateBeforeSave: false });
}

// delete Order -- Admin
export const deleteOrder = catchAsyncErrors(async (req, res, next) => {
  const order = await OrderProduct.findById(req.params.id);

  if (!order) {
    return next(new ErrorHandler("Order not found with this Id", 404));
  }
  await OrderProduct.findByIdAndDelete(order);

  res.status(200).json({
    success: true,
    message: "Delete Order Successfully!",
  });
});
