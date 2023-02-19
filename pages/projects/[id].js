import { useRouter } from 'next/router'
import mongoose from 'mongoose';
import Project from '../../schemas/project-schema.js';
import { faker } from '@faker-js/faker';

export default function ProjectListing({ project }) {
    const router = useRouter();
    const { id } = router.query;

    return <div>
        <h1>Project {id}</h1>
        <p>{project.name}</p>
        <p>{project.description}</p>
        {project.links.map((link, index) => {
            return <p key={index}>{link.link} - {link.description}</p>
        })}
    </div>;
}

export async function getServerSideProps({ params }) {

    // Connect to MongoDB
    await mongoose.connect(process.env.DB_CONNECTION, () => {
        console.log('connected to db');
    });

    // Create a demo project
    // const project = new Project({
    //     id: faker.datatype.uuid(),
    //     name: 'Project 1',
    //     description: 'This is a project',
    //     memberIds: ['1', '2', '3'],
    //     links: [{
    //         link: 'https://google.com',
    //         description: 'Google'
    //     }],
    //     tags: ['tag1', 'tag2', 'tag3'],
    //     image: 'https://picsum.photos/200/300',
    //     lastModified: new Date(),
    //     created: new Date(),
    //     funding: {
    //         goal: 100,
    //         current: 50,
    //         supporterIds: ['1', '2', '3']
    //     }
    // });

    // Save the demo project to the database
    // await project.save();

    // Get a project from the database
    const data = await Project.findOne({});
    await mongoose.connection.close();

    // Will be passed to the page component as props
    return {
        props: {
            project: JSON.parse(JSON.stringify(data))
        },
    }
}
