import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from "cors";
const app = express();

import classesRouter from "./classes/classes.route.js";
import usersRouter from "./users/user.route.js";
import favoritesRouter from "./favorites/favorites.route.js";

app.use(cors());
app.use(express.json());

app.use('/api/v1', usersRouter);
app.use('/api/v1', classesRouter);
app.use('/api/v1', favoritesRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
	console.log("servidor listo en http://localhost: "+PORT);
});