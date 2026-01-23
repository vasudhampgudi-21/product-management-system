import express from "express";
import {createProduct,getAll,updateProduct,deleteProduct} from "../CONTOLLERS/userController.js";

const router = express.Router(); 
router.post("/create",createProduct)

router.get("/get",getAll)
router.put("/update/:id",updateProduct)
router.delete("/delete/:id",deleteProduct)

export default router;
