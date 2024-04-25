import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/products.js";
const router = Router();

router.get("/getAllProducts", getAllProducts);
router.post("/createProduct", createProduct);

export default router;
