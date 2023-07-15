import { Router } from "express";
import { ratingsController } from "./ratings.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateRatings } from "../middlewares/ratings.meddleware.js";

const router = Router();

router.get('/ratings'        , ratingsController.getAll);
router.get('/ratings/:id'    , validateId, ratingsController.getOne);
router.post('/ratings'       , validateRatings, ratingsController.create);
router.put('/ratings/:id'    , validateId, validateRatings, ratingsController.update);
router.delete('/ratings/:id' , validateId, ratingsController.remove);


export default router;