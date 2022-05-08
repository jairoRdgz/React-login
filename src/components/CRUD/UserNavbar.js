import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";
export const Navbar = (props) => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand d-flex" to="/Layout">
        <SiFirebase size="1.5rem" className="me-2" />
        {props.email}
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/addUser"
            >
              <AiOutlineSave className="me-1" size="1.5rem" />
              Save a User
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
