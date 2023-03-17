import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

import routes from './routes/index.js';

routes(app);

export default app;