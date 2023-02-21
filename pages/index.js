import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ventrue</title>
        <meta name="description" content="Ventrue" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Ventrue
        </h1>

        <p className={styles.description}>
          Student view
        </p>

        <div className={styles.grid}>
          <Link href="/projects" className={styles.card}>
            <h2>New Project &rarr;</h2>
            <p>Enter details about what you&#39;re doing, and your funding goal.</p>
          </Link>
        </div>
      </main>
    </div>
  )
}
