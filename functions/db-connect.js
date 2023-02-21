import mongoose from 'mongoose';

export default async function connect() {
    // Connect to MongoDB
    mongoose.connect(process.env.DB_CONNECTION, () => {});
}
