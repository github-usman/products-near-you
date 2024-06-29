import { jwtSecret } from "../config/config.js";
import { User } from "../models/user.model.js";
import ErrorHandler from "../utils/error-handler.js";
import catchAysncErrors from "./catchAysncErrors.js";
import jwt from "jsonwebtoken"

// user authenticated
const isAuthenticatedUser = catchAysncErrors(async(req,res,next)=>{
    const {token} = req.cookies;
    if(!token){
        return next(new ErrorHandler("Please Login to access this resource",401));
    }

    const decodeData = jwt.verify(token,jwtSecret);
    req.user = await User.findById(decodeData.id);

    next();

});

export default isAuthenticatedUser;