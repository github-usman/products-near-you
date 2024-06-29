import { User } from "../models/user.model.js";
import catchAysncErrors from "../middleware/catchAysncErrors.js";
import ErrorHander from "../utils/error-handler.js";
import sendToken from "../utils/jwt-tokens.js";
import sendEmail from "../utils/send-email.js";
import crypto from "crypto"

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

// user Login
export const loginUser = catchAysncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  // checking credentials verfication

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});

// user Logout

export const logoutUser = catchAysncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});

// Forgot Password

export const forgotPassword = catchAysncErrors(async (req, res, next) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return next(new ErrorHander("User not found", 404));
  }

  // getResetPasswordtoken
  const resetToken = user.getResetPasswordToken();

  await user.save({ validateBeforeSave: false });

  const resetPasswordUrl = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/password/reset/${resetToken}`;

  const message = `
                  <div style="font-family: Arial, sans-serif; line-height: 1.5;">
                    <p>By clicking on the button below, you can reset your password:</p>
                    <a href="${resetPasswordUrl}" style="display: inline-block; padding: 10px 20px; color: #fff; background-color: #007bff; text-decoration: none; border-radius: 5px; margin-bottom: 15px;">Reset Password</a>
                    <p>If the above button does not work, use the following link:</p>
                    <p style="padding: 10px 20px; color: #fff; background-color: #FF0000; border-radius: 5px; margin-top: 15px;">If you have not requested this email, please ignore it.</p>
                    <p><a href="${resetPasswordUrl}" style="color: #007bff;">${resetPasswordUrl}</a></p>
                  </div>
                `;
  try {
    await sendEmail({
      email: user.email,
      subject: `PRODUCT NEAR YOU password Recovery`,
      message,
    });
    res.status(200).json({
      success: true,
      message: `Email sent to ${user.email} successfully.`,
    });
  } catch (error) {
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;
    await user.save({ validateBeforeSave: false });
    return next(new ErrorHander(error.message, 500));
  }
});

// Reset Password

export const resetPassword = catchAysncErrors(async (req, res, next) => {

  // create token hash from params
  const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");


    const user = await User.findOne({
      resetPasswordToken,
      resetPasswordExpire:{$gt:Date.now()}
    });

    if(!user){
      return next(new ErrorHander("Reset Password Token is Invalid or has been expired",400));
    }

    if(req.body.password !== req.body.confirmPassword){
      return next(new ErrorHander("Reset Password Token is Invalid or has been expired",400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save()
    sendToken(user,200,res);
});
