import mongoose from 'mongoose';
const { Schema, model, SchemaTypes } = mongoose;

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
    members: [{
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true
    }],
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
            supporters: [{
                type: SchemaTypes.ObjectId,
                ref: 'User',
                required: true
            }]
        },
        required: true
    }
}, { collection: 'projects' });

projectSchema.pre('save', function (next) {
    this.lastModified = Date.now();
    next();
});

const Project = mongoose.models.Project || model('Project', projectSchema);

export default Project;
