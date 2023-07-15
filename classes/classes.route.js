import { Router } from "express";
import { classesController } from "./classes.controller.js";
import { validateClasses } from "../middlewares/classes.meddleware.js";
import { validateId } from "../middlewares/id.meddleware.js";


const router = Router();

router.get('/classes'       , classesController.getAll);
router.get('/classes/:id'   , validateId, classesController.getOne);
router.post('/classes'      , validateClasses, classesController.create);
router.put('/classes/:id'   , validateId, validateClasses, classesController.update);
router.delete('/classes/:id', validateId, classesController.remove);

export default router;