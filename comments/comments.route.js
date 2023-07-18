import { Router } from "express";
import { commentsController } from "./comments.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateComments } from "../middlewares/comments.meddleware.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get('/comments'        , commentsController.getAll);
router.get('/comments/:id'    , validateId, commentsController.getOne);
router.post('/comments'       , validateComments, authMiddleware, commentsController.create);
router.put('/comments/:id'    , validateId, validateComments, authMiddleware, commentsController.update);
router.delete('/comments/:id' , validateId, authMiddleware, commentsController.remove);


export default router;