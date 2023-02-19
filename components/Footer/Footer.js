import styles from './Footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Made by compsigh in <strong>24 hours</strong></p>
            <p>•</p>
            <p>With ❤️ from San Francisco, CA</p>
            <p>•</p>
            <p><a>Contact us</a></p>
        </footer>
    );
}
