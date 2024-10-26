import mongoose from 'mongoose';

import env from '../config/env.js';

export default function () {
    const init = () => {
        const connectionString = `mongodb://${env.MONGODB_USERNAME}:${env.MONGODB_PASSWORD}@${env.MONGODB_HOST}:${env.MONGODB_PORT}/${env.MONGODB_DB}?authSource=admin`;

        mongoose.connect(connectionString)
            .then(() => console.log('MongoDB connected.'))
            .catch(err => console.log(err));
    }

    return { init }
}
