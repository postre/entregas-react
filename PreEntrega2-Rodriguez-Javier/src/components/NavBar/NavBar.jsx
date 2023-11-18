import { useEffect, useState } from "react";
import { CartWidget } from "../../components";
import { getCategories } from "../../mocks";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getCategories()
      .then((response) => {
        setIsLoading(!isLoading); // Usamos el operado not para cambiar el valor del estado a la inversa del actual
        // Guardamos los productos recibidos en el estado para mostrar luego en el DOM
        setCategories(response);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <header className="p-3 text-bg-dark">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 me-2 text-white text-decoration-none">
              <img src="/src/assets/img/react.svg" className="animated-logo" width="30" />
              <span className="mx-2 fw-bold">React Store</span>
              <img src="/src/assets/img/react.svg" className="animated-logo" width="30" />
            </Link>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {categories.map((category) => 
                <li key={category.id} className="me-4">
                  <NavLink to={`/products/${category.id}`} className="nav-link px-2 text-white">
                    {category.name}
                  </NavLink>
                </li>
              )}
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
