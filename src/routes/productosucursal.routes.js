import { Router } from "express";
import { method as prodsucController } from "../controllers/productosucursal.controler";
const router=Router();

router.get("/producto",prodsucController.getStocks);


export default router