import mongoose from 'mongoose';

export default mongoose.model('listing', mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    }
}))