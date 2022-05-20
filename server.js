import express, { json } from 'express';
import cors from 'cors';
import dbConnectionMiddleware from './middlewares/dbConnectionMiddleware.js';
import router from './routes/routes.js';
import 'dotenv/config.js';

const app = express();
const port = process.env.PORT;
app.use(json());
app.use(cors());
app.use(dbConnectionMiddleware);
app.use(router);
app.listen(port, () => { console.log(`running at port ${port}`); });