import { Product } from "../models/product.model.js";

// Create a Product

export const createProduct = async(req,res,next)=>{
    console.log(req.body, 'incoming request body'); 
    const newProduct = req.body;
    console.log(newProduct, 'newProduct request body'); 
    try {
        await Product.create(newProduct)
        res.status(201).json({
            success:true,
            newProduct
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`problem due to ${error}`
        })
    }
}