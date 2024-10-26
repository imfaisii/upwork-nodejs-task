import mongoose from 'mongoose';

const countrySchema = new mongoose.Schema({}, { strict: false });

export default mongoose.model('Country', countrySchema);