import { Router } from "express";
import { createProduct, getAllProducts } from "../controllers/products.js";
const router = Router();

router.post("/createProduct", createProduct);

router.get("/getAllProducts", getAllProducts);

export default router;
