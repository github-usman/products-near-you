import { User } from "../../models/user.model.js";
import catchAysncErrors from "../../middleware/catchAysncErrors.js";
import ErrorHander from "../../utils/error-handler.js";
import sendToken from "../../utils/jwt-tokens.js";

// user Register
export const registerUser = catchAysncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
  });
  sendToken(user, 201, res);
});
// user Register
export const registerSellerUser = catchAysncErrors(async (req, res, next) => {
  const { name, email, password, address, mobile_no, location } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    address,
    mobile_no,
    location: {
      longitude: location.longitude,
      latitude: location.latitude,
    },
    avatar: {
      public_id: "this is a sample id",
      url: "profilepicUrl",
    },
    role: "seller",
  });
  sendToken(user, 201, res);
});

// Get User Profile
export const getUserProfile = catchAysncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Profile
export const updateUserProfile = catchAysncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
  };

  // we will put avatar logic here

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Get all users --ADMIN
export const getAllUser = catchAysncErrors(async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
});

// Get Single user Details --ADMIN

export const getSingleUserDetails = catchAysncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return next(
      new ErrorHander(
        `User doest not exist with this id : ${req.params.id}`,
        400
      )
    );
  }

  res.status(200).json({
    success: true,
    user,
  });
});

// Update User Role --ADMIN
export const updateUserRole = catchAysncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    user,
  });
});

// Delete a User
export const deleteUser = catchAysncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);

  // we will remove cloudnary
  if (!user) {
    return next(
      new ErrorHander(
        `User doest not exist with this id : ${req.params.id}`,
        400
      )
    );
  }

  await User.findByIdAndDelete(user);

  res.status(200).json({
    success: true,
    message: "User Delete Successfully!",
  });
});
