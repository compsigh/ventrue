import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: {
        type: String,
        required: true,
        immutable: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    memberIds: {
        type: [String],
        required: true
    },
    links: [{
        link: String,
        description: String
    }],
    tags: [String],
    image: String,
    lastModified: {
        type: Date,
        default: () => Date.now()
    },
    created: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    funding: {
        type: {
            goal: Number,
            current: Number,
            supporterIds: [String]
        },
        required: true
    }
}, { collection: 'projects' });

const Project = mongoose.model('project', projectSchema);

export default Project;
