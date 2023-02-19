import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    id: String,
    name: String,
    description: String,
    memberIds: [String],
    links: [{
        link: String,
        description: String
    }],
    tags: [String],
    image: String,
    lastModified: Date,
    created: Date,
    funding: {
        goal: Number,
        current: Number,
        supporterIds: [String]
    }
}, { collection: 'projects' });

const Project = mongoose.model('project', projectSchema);

export default Project;
