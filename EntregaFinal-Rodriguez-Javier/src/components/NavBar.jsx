import { useContext } from "react";
import { UserWidget, NoUserWidget } from ".";
import { FirebaseContext } from "../context";
import { NavLink } from "react-router-dom";
import { NavMenu } from "./NavMenu";

export const NavBar = () => {
  const { auth } = useContext(FirebaseContext);

  return (
    <>
      <header className="p-3 text-bg-dark" style={{ position: "fixed", top: "0px", width: "100%" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <NavLink to={"/"} className="d-flex align-items-center mb-2 mb-lg-0 me-4 text-white text-decoration-none">
              <img src="/src/assets/img/react.svg" className="animated-logo" width="30" />
              <span className="mx-2 fw-bold">React Store</span>
              <img src="/src/assets/img/react.svg" className="animated-logo" width="30" />
            </NavLink>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <NavMenu textColorClass={"text-white"} />
            </ul>

            <div className="text-end">{auth.currentUser ? <UserWidget /> : <NoUserWidget />}</div>
          </div>
        </div>
      </header>
    </>
  );
};
