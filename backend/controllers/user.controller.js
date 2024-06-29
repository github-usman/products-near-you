import {User} from "../models/user.model.js";
import catchAysncErrors from "../middleware/catchAysncErrors.js";
import ErrorHander from "../utils/error-handler.js"
import sendToken from "../utils/jwt-tokens.js";

// user Register
export const registerUser = catchAysncErrors(async(req,res,next)=>{
    const {name,email,password} = req.body;

    const user = await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"this is a sample id",
            url:"profilepicUrl",
        },
    })
    sendToken(user,201,res);
})

// user Login
export const loginUser = catchAysncErrors(async(req,res,next)=>{
    const {email,password} = req.body;
    
    // checking credentials verfication

    if(!email || !password){
        return next(new ErrorHander("Please Enter Email & Password",401));
    }

    const user = await User.findOne({email}).select("+password");

    if(!user){
        return next(new ErrorHander("Invalid email or password",401));
    }
    const isPasswordMatched = user.comparePassword(password);
    
    if(!isPasswordMatched){
        return next(new ErrorHander("Invalid email or password",400));
    }

    sendToken(user,200,res);
})

// user Logout

export const logoutUser = catchAysncErrors(async(req,res,next)=>{
    
    res.cookie("token",null,{
        expires:new Date(Date.now()),
        httpOnly:true
    })

    res.status(200).json({
        success:true,
        message:"Logged Out",
    })
})
