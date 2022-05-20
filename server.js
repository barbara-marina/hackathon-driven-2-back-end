import express, { json } from 'express';
import cors from 'cors';
import dbConnectionMiddleware from './middlewares/dbConnectionMiddleware.js';
import router from './routes/index.js';
import chalk from "chalk";
import 'dotenv/config.js';

const app = express();
const port = process.env.PORT || 5000;
app.use(json());
app.use(cors());
app.use(dbConnectionMiddleware);
app.use(router);
app.listen(port, () => console.log(chalk.bold.cyanBright(`Server is running at port ${port}.`)));