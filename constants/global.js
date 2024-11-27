import env from '../config/env.js';

export const PORT = 3000;

export const RESPONSE = {
    SUCCESS: 'success',
    ERROR: 'error'
}

export const APP_URL = `${env.APP_URL}:${PORT}`;