import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const userSchema = new Schema({
    id: {
        type: String,
        required: true,
        immutable: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    kind: {
        type: String,
        enum: ['student', 'supporter'],
        required: true
    }
}, { collection: 'users' });

const User = model('user', userSchema);

export default User;
