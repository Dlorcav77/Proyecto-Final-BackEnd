import { Router } from "express";
import { ratingsController } from "./ratings.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateRatings } from "../middlewares/ratings.meddleware.js";

const router = Router();

router.post('/ratings', validateRatings, ratingsController.create)
router.get('/ratings/:id', validateId, ratingsController.getClassAvgRating);
router.get('/ratings/user/:id', validateId, ratingsController.getUserAvgRating);


export default router;