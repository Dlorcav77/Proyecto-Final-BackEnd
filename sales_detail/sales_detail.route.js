import { Router } from "express";
import { sales_detailController } from "./sales_detail.controller.js";
import { validateSales_detail } from "../middlewares/sales_detail.meddleware.js";
import { validateId } from "../middlewares/id.meddleware.js";

const router = Router();

// router.get('/sales_detail'        , sales_detailController.getAll);
// router.get('/sales_detail/:id'    , validateId, sales_detailController.getOne);
router.post('/sales_detail', validateSales_detail, sales_detailController.create)

export default router;