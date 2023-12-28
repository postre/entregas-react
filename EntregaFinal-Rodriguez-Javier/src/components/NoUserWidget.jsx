import { Link } from "react-router-dom";
import { FaUserCircle, FaUserPlus, FaUserShield } from "react-icons/fa";

export const NoUserWidget = () => {
  return (
    <div className="dropdown">
      <a
        href="#"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="nav-link nav-icon"
      >
        <FaUserCircle size={30} />
      </a>

      <div aria-labelledby="dropdownMenuButton1" className="shadow dropdown-menu p-0 cart-dropdown">
        <ul className="list-group color-black">
          <li className="list-group-item">
            <Link to={"/signup"} className="nav-link">
              <FaUserPlus size={20} className="me-2" /> Registro
            </Link>
          </li>
          <li className="list-group-item">
            <Link to={"/login"} className="nav-link">
              <FaUserShield size={20} className="me-2" /> Login
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
