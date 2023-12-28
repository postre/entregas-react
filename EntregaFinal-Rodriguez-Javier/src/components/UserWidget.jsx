import { useContext } from "react";
import { CartWidget } from "./CartWidget";
import { FirebaseContext } from "../context";
import { StringHelpers } from "../helpers";
import { FaUserCircle, FaCartArrowDown } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { Link } from "react-router-dom";

export const UserWidget = () => {
  const { auth, logoutUser } = useContext(FirebaseContext);
  return (
    <div className="d-flex align-items-center">
      <div className="dropdown">
        <button
          type="button"
          id="dropdownUserMenu"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
          className="btn btn-outline-light btn-sm me-3"
        >
          <FaUserCircle size={25} className="me-2" />
          <small>Hola: </small>
          {StringHelpers.title(auth.currentUser.displayName)}
        </button>

        <div
          aria-labelledby="dropdownUserMenu"
          className="shadow dropdown-menu p-0 cart-dropdown"
          style={{ width: "250px" }}
        >
          <ul className="list-group color-black">
            <li className="list-group-item">
              <Link to={"/orders"} className="nav-link">
                <FaCartArrowDown size={20} className="me-2" /> Mis pedidos
              </Link>
            </li>
            <li className="list-group-item">
              <a href="#" onClick={logoutUser} className="nav-link">
                <IoLogOut size={20} className="me-2" /> Cerrar sesión
              </a>
            </li>
          </ul>
        </div>
      </div>

      <CartWidget />
    </div>
  );
};
