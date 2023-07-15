import { Router } from "express";
import { commentsController } from "./comments.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateComments } from "../middlewares/comments.meddleware.js";

const router = Router();

router.get('/comments'        , commentsController.getAll);
router.get('/comments/:id'    , validateId, commentsController.getOne);
router.post('/comments'       , validateComments, commentsController.create);
router.put('/comments/:id'    , validateId, validateComments, commentsController.update);
router.delete('/comments/:id' , validateId, commentsController.remove);


export default router;