import express from "express";
import {createProduct, getAll, updateproduct, deleteProduct} from "../CONTROLLERS/userController.js";

const router=express.Router();
router.post("/create",createProduct);

router.get("/get",getAll);
router.put("/update/:id",updateproduct);
router.delete("/delete/:id",deleteProduct);
export default router;