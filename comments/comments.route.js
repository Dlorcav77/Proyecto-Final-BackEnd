import { Router } from "express";
import { commentsController } from "./comments.controller.js";

const router = Router();

router.get('/comments'        , commentsController.getAll);
router.get('/comments/:id'    , commentsController.getOne);
router.post('/comments'       , commentsController.create);
router.put('/comments/:id'    , commentsController.update);
router.delete('/comments/:id' , commentsController.remove);


export default router;