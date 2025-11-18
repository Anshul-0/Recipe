import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">

        <Link to="/" className="logo">ATSHEE</Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/">Menu</Link>
          <Link to="/">Specials</Link>
          <Link to="/">Contact</Link>
        </div>

      </div>
    </nav>
  );
}
