import Link from 'next/link'
import styles from '../../styles/Home.module.scss'
import connect from '../../functions/db-connect.js';
import Project from '../../schemas/project-schema.js';

export default function ProjectsList({ projects }) {
    return (
        <div>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                    Projects
                    </h1>

                    <div className={styles.grid}>
                        {projects.map((project, index) => {
                            return <Link key={index} href={`/projects/${project.id}`} className={styles.card}>
                                <h2>{project.name} &rarr;</h2>
                                <p>${project.funding.current} / ${project.funding.goal}</p>
                            </Link>
                        })}
                    </div>

                </main>
            </div>
        </div>
    );
}

export async function getServerSideProps() {
    // Connect to MongoDB
    connect();

    // Get projects from the database
    const data = await Project.find({});

    return {
        props: {
            projects: JSON.parse(JSON.stringify(data))
        },
    }
}
