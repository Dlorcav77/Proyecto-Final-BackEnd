import { Router } from "express";
import { sales_detailController } from "./sales_detail.controller.js";

const router = Router();

router.get('/sales_detail'        , sales_detailController.getAll);
router.get('/sales_detail/:id'    , sales_detailController.getOne);
router.post('/sales_detail'       , sales_detailController.create);
router.put('/sales_detail/:id'    , sales_detailController.update);
router.delete('/sales_detail/:id' , sales_detailController.remove);


export default router;