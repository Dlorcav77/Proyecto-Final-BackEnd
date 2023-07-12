import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get('/usuarios', userController.getAll);
router.post('/usuarios', userController.create);
router.put('/usuarios/:id', userController.update);
router.delete('/usuarios/:id', userController.remove);

export default router;