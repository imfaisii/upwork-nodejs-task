import mongoose from 'mongoose';

const salesRepresentativesSchema = new mongoose.Schema({
    name: String,
    region: String,
    countries: [String],
});

export default mongoose.model('SalesRepresentatives', salesRepresentativesSchema);