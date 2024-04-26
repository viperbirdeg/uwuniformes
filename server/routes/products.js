import { Router } from "express";
import controller from "../controllers/products.js";
const router = Router();

router.get("/getAllProducts", controller.getAllProducts);
router.post("/createProduct", controller.createProduct);

export default router;