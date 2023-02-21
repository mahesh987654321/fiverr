import { Link } from "react-router-dom";
import "./navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>sign in</span>
          <span>Become a Seller</span>
          <button>Join</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test1</span>
        <span>Test2</span>
      </div>
    </div>
  );
};

export default Navbar;
