import {User} from "../models/user.model.js";
import catchAysncErrors from "../middleware/catchAysncErrors.js";
import ErrorHander from "../utils/error-handler.js"

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

    res.status(201).json({
        success:true,
        user
    })
})