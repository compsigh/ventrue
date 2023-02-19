import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <h1>Four! Oh, four!</h1>
            <h2>We couldn't locate that page for you. :(</h2>
            <h3><Link href="/">Try again?</Link></h3>
        </div>
    );
}
