import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../context";
import { StringHelpers } from "../helpers";
import { ItemList } from "./ItemList";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products, getProducts, getCategory } = useContext(FirebaseContext);

  useEffect(() => {
    getCategory(categoryId);
    getProducts({ categoryId });
  }, [categoryId]);

  return (
    <>
      <div className="container mb-5">
        <h3 className="mt-4">{categoryId ? StringHelpers.title(categoryId) : "Productos destacados"}</h3>
        <div className="row cart d-flex align-items-stretch">
          {products.map((product) => (
            <ItemList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
