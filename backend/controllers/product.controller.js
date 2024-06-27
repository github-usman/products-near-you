import { Product } from "../models/product.model.js";

// Create a Product -------ADMIN routes

export const createProduct = async(req,res,next)=>{
    const newProduct = req.body;
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

// Get all Product

export const getProducts = async(req,res,next)=>{
    try {
      const allProduct =   await Product.find({})
        res.status(200).json({
            success:true,
            allProduct
        })
        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`problem due to ${error}`
        })
    }
}

// Update a Product -------ADMIN routes

export const updateProduct = async(req,res,next)=>{
    try {
        const existingProduct = await Product.findById(req.params.id);
        if(!existingProduct){
           return res.status(404).json({
                success:false,
                message:"Product is not Found"
            })
        }

        const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true});
        res.status(200).json({
            success:true,
            updatedProduct
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`problem due to ${error}`
        })
    }
}

// Update a Product -------ADMIN routes

export const deleteProduct = async(req,res,next)=>{
    try {
        const existingProduct = await Product.findById(req.params.id);
        if(!existingProduct){
           return res.status(404).json({
                success:false,
                message:"Product is not Found"
            })
        }

        await Product.findByIdAndDelete(existingProduct);
        res.status(200).json({
            success:true,
            message:"Product deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            success:false,
            message:`problem due to ${error}`
        })
    }
}