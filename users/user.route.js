import { Router } from "express";
import { userController } from "./user.controller.js";
import { validateUser } from "../middlewares/user.meddleware.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateLogin } from "../middlewares/login.meddleware.js";

const router = Router();

router.get('/users'       , userController.getAll);
router.get('/users/:id'   , validateId, userController.getOne);
router.post('/users/login', validateLogin, userController.getLogin);
router.post('/users'      , validateUser, userController.create);
router.put('/users/:id'   , validateId, validateUser, userController.update);
router.delete('/users/:id', validateId, userController.remove);


export default router;