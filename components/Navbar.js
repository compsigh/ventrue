import Link from 'next/link';

export default function Navbar() {
    return (
    <nav>
        <div className="logo">
            <img src="/logo.png" alt="Ventrue logo" />
        </div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/teammates">Teammates</Link>
    </nav>
    );
}
