import { Router } from "express";
import { favoritesController } from "./favorites.controller.js";
import { validateId } from "../middlewares/id.meddleware.js";
import { validateFavorites } from "../middlewares/favorites.meddleware.js"
const router = Router();

router.get('/favorites'        , favoritesController.getAll);
router.get('/favorites/:id'    , validateId, favoritesController.getOne);
router.post('/favorites'       , validateFavorites, favoritesController.create);
router.put('/favorites/:id'    , validateId, validateFavorites, favoritesController.update);
router.delete('/favorites/:id' , validateId, favoritesController.remove);


export default router;