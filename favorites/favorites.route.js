import { Router } from "express";
import { favoritesController } from "./favorites.controller.js";

const router = Router();

router.get('/favorites'        , favoritesController.getAll);
router.get('/favorites/:id'    , favoritesController.getOne);
router.post('/favorites'       , favoritesController.create);
router.put('/favorites/:id'    , favoritesController.update);
router.delete('/favorites/:id' , favoritesController.remove);


export default router;