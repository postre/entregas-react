import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FirebaseContext } from "../context";

export const NavMenu = ({ textColorClass }) => {
  const { getCategories, categories } = useContext(FirebaseContext);
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      <NavLink to={"/products/featured"} className="nav-link px-2 me-4 text-white">
        Destacados
      </NavLink>

      {categories.map((category) => (
        <li key={category.id} className="me-4">
          <NavLink to={`/products/category/${category.slug}`} className={`nav-link px-2 ${textColorClass}`}>
            {category.name}
          </NavLink>
        </li>
      ))}
    </>
  );
};
