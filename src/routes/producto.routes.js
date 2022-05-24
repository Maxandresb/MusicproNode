import { Router } from "express";
import { method as productoController } from "../controllers/producto.controller";
const router=Router();

router.get("/productos", productoController.getProductos);

export default router