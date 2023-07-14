import { Router } from "express";
import { classesController } from "./classes.controller.js";

const router = Router();

router.get('/classes', classesController.getAll);
router.post('/classes', classesController.create);
router.put('/classes/:id', classesController.update);
router.delete('/classes/:id', classesController.remove);

export default router;