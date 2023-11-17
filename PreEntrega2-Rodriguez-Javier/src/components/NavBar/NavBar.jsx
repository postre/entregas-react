import { CartWidget } from "../../components";

export const NavBar = () => {
  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 me-2 text-white text-decoration-none"
            >
              <img
                src="/src/assets/img/react.svg"
                className="animated-logo"
                width="30"
              />
              <span className="mx-2 fw-bold">React Store</span>
              <img
                src="/src/assets/img/react.svg"
                className="animated-logo"
                width="30"
              />
            </a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Celulares
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Notebooks
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Perfumes
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Cosmetica
                </a>
              </li>
              <li>
                <a href="#" className="nav-link px-2 text-white">
                  Muebles
                </a>
              </li>
            </ul>

            <div className="text-end">
              <CartWidget />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};