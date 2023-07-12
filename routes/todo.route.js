import { Router } from "express";
import { userController } from "../controllers/user.controller.js";
import { classesController } from "../controllers/classes.controller.js";

const router = Router();

router.get('/users', userController.getAll);
router.post('/users', userController.create);
router.put('/users/:id', userController.update);
router.delete('/users/:id', userController.remove);

router.get('/classes', classesController.getAll);
router.post('/classes', classesController.create);
router.put('/classes/:id', classesController.update);
router.delete('/classes/:id', classesController.remove);

export default router;