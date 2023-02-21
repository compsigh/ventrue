import ReactMarkdown from 'react-markdown';
import connect from '../../functions/db-connect.js';
import Project from '../../schemas/project-schema.js';
import styles from '../../styles/Home.module.scss';

export default function ProjectListing({ project }) {

    return (
        <div className={styles.container}>
            <ReactMarkdown>{project.description}</ReactMarkdown>
            <p>Current funding: ${project.funding.current}</p>
            <p>Goal: ${project.funding.goal}</p>
        </div>
    );
}

export async function getServerSideProps({ params }) {

    // Connect to MongoDB
    await connect();

    // Get project info
    const data = await Project.findOne({ id: params.id });

    return {
        props: {
            project: JSON.parse(JSON.stringify(data))
        },
    }
}
