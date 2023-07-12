import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import cors from "cors";
const app = express();

import todoRouter from "./routes/todo.route.js";

app.use(cors());
app.use(express.json());
app.use('/api', todoRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, ()=>{
	console.log("servidor listo en http://localhost: "+PORT);
});