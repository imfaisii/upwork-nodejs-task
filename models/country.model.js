import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({
    name: String,
    region: String,
});

export default mongoose.model('Country', countrySchema);