import { Router } from "express";
import { salesController } from "./sales.controller.js";
import { validateSales } from "../middlewares/sales.meddleware.js";
import { validateId } from "../middlewares/id.meddleware.js";

const router = Router();

router.get('/sales'        , salesController.getAll);
router.get('/sales/:id'    , validateId, salesController.getOne);
router.post('/sales'       , validateSales, salesController.create);
router.put('/sales/:id'    , validateId, validateSales, salesController.update);
router.delete('/sales/:id' , validateId, salesController.remove);


export default router;