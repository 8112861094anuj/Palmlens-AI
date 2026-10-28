import "./index.css";

//import logo from "../../assets/logos/palmlens-logo.png";//

function Navbar() {
    return (
        <header className="navbar">
            <div className="container navbar-container">

                <div className="navbar-logo">
                    PalmLens
                </div>

                <nav className="navbar-links">

                    <a href="/">Home</a>

                    <a href="/scan">Scan Palm</a>

                    <a href="/report">My Reading</a>

                    <a href="/future-chat">Future Chat</a>

                </nav>

            </div>
        </header>
    );
}

export default Navbar;
