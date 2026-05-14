import mongoose from 'mongoose';
const ComponentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    props: [String],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    visibility: {
        type: String,
        enum: ['public', 'private'],
        default: 'private'
    },
    npmPackage: {
        type: String,
    },

}, { timestamps: true });

const Component = mongoose.model('Component', ComponentSchema);
export default Component;