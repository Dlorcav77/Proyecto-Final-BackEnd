import { Router } from "express";
import { salesController } from "./sales.controller.js";

const router = Router();

router.get('/sales'        , salesController.getAll);
router.get('/sales/:id'    , salesController.getOne);
router.post('/sales'       , salesController.create);
router.put('/sales/:id'    , salesController.update);
router.delete('/sales/:id' , salesController.remove);


export default router;