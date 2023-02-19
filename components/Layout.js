import Navbar from "./Navbar/Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="content">
            <Navbar />
            { children }
            <Footer />
        </div>
    );
}
