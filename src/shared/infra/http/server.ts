import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import 'express-async-errors';

import '../database/mongoConnect';
import '../../container';
import { router } from './routes';

dotenv.config();
const app = express();

app.use(
    cors({
        origin: '*',
    }),
);

// origin: ['dominio.com.br, 'dominio2.com.br]

app.use(express.json());
app.use(router);

app.listen(5002, `${process.env.SERVER_HOST}`, () => {
    console.log('🟠 Server Started on Port 5002');
});
