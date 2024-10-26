import express from 'express';
import router from "./router/index.js";
import useDBClient from './composables/useDBClient.js';

import { PORT } from './constants/global.js';

const app = express();

// mongodb connection
const { init: dbInit } = useDBClient();
dbInit();

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Listening:: http://localhost:${PORT}.`);
});