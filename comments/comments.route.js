import { Router } from "express";
import { commentsController } from "./comments.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateComments } from "../middlewares/comments.meddleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/comments', commentsController.getAll);
router.get('/comments/:id', validateId, commentsController.getOne);
router.get('/comments/class/:id', validateId, commentsController.getAllByIdClass);
router.post('/comments', validateComments, authMiddleware, commentsController.create);


export default router;