import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import {authRoutes} from './src/routes/authRoutes.js';
import { infoRoutes } from './src/routes/infoRoutes.js';
import { plantsRoutes } from './src/routes/plants.routes.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(authRoutes);
app.use(infoRoutes);
app.use(plantsRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> {
    console.log(`App running on localhost:${PORT}`);
});