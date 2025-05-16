import express from 'express'
import { createProduct, getProductById, getProducts } from '../Controllers/productController.js';


const router = express.Router();

 router.get("/getdata",getProducts)
router.get("/getdata/:id",getProductById)
 router.post("/create",createProduct)
// router.put("/update/:id")
// router.delete("/delete/:id")



export default router;