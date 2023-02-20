import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function ProjectsList() {
    return (
        <div>
            <div className={styles.container}>
                <main className={styles.main}>
                    <h1 className={styles.title}>
                    Projects
                    </h1>

                    <div className={styles.grid}>
                    <Link href="/projects/1" className={styles.card}>
                        <h2>Chat App &rarr;</h2>
                        <p>$0 / $200</p>
                    </Link>
                    </div>
                </main>
            </div>
        </div>
    );
}
