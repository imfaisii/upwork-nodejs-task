import express from 'express';
import router from "./router/index.js";

import { PORT } from './constants/global.js';

const app = express();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Listening:: http://localhost:${PORT}.`);
});