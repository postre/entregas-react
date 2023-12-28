import { useContext, useEffect } from "react";
import { CartContext, FirebaseContext } from "../context";
import { NoItems } from "./NoItems";
import { CartTable } from "../components";

export const CartListContainer = () => {
  const { auth, restrict } = useContext(FirebaseContext);
  const { cartObject } = useContext(CartContext);

  useEffect(() => {
    restrict();
  }, []);

  return auth.currentUser ? (
    <>
      <h3 className="mt-4">Lista de Compras</h3>
      {cartObject.items.length ? <CartTable /> : <NoItems text={"No hay productos en su carro."} />}
    </>
  ) : (
    <NoItems text={"No estas autorizado a ver esta sección."} />
  );
};
