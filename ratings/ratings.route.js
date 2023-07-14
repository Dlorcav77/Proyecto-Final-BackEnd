import { Router } from "express";
import { ratingsController } from "./ratings.controller.js";

const router = Router();

router.get('/ratings'        , ratingsController.getAll);
router.get('/ratings/:id'    , ratingsController.getOne);
router.post('/ratings'       , ratingsController.create);
router.put('/ratings/:id'    , ratingsController.update);
router.delete('/ratings/:id' , ratingsController.remove);


export default router;