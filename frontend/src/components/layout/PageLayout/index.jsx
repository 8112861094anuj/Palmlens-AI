import "./index.css";

import Navbar from "../Navbar";
import Footer from "../Footer";

function PageLayout({ children }) {
    return (
        <div className="page-layout">

            <Navbar />

            <main>

                {children}

            </main>

            <Footer />

        </div>
    );
}

export default PageLayout;