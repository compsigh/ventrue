import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.scss';

export default function Navbar(props) {
    return (
    <nav className={styles.navbar}>
        <div className="logo">
            <Image src="/logo.png" alt="Vercel Logo" width={50} height={50} />
        </div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/teammates">Teammates</Link>
    </nav>
    );
}
