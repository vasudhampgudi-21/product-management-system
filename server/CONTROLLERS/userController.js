import Product from "../models/productModel.js"
export const createProduct= async(req,res)=>{

};
export const getAll = async(req,res) =>
{

try{
 const productData= await Product.find();

if(!productData)
    {
        return res.status(404).json({msg:"data not found"});
    }

res.status(200).json(productData);
}
catch(error){
res.status(500).json({error:error});
}
 
};
export const updateproduct=async(req,res)=>{
try{
    const id=req.params.id;
const productExist=await Product.findById(id);
if(!productExist)
{
    return res.status(401).json({msg: "User not found"});
}

const updatedData =await Product.findByIdAndUpdate(id,req.body,{new:true});
res.status(200).json(updatedData);
}
catch(error)
{
res.status(500).json({error:error});
}
};
export const deleteProduct=async(req,res)=>{
try{
    const id=req.params.id;
const ProductExist=await Product.findById(id);
if(!ProductExist)
{
    return res.status(401).json({msg: "Product data is not found"});
}
const deleteData= await Product.findByIdAndDelete(id,req.body,{new:true});
res.status(200).json({msg:"Product data deleted successfully"});
}
catch(error)
{
res.status(500).json({error:error});
}
};