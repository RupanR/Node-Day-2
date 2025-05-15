import express from 'express'
import { getProducts } from '../Controllers/productController.js';


const router = express.Router();

 router.get("/getdata",getProducts)
// router.get("/getdata/:id")
// router.post("/create")
// router.put("/update/:id")
// router.delete("/delete/:id")



export default router;