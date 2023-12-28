import { useContext, useEffect } from "react";
import { FirebaseContext } from "../context";
import { NoItems } from "./NoItems";
import { OrderDetailTable } from "../components";
import { useParams } from "react-router-dom";

export const OrderDetailContainer = () => {
  const { id } = useParams();
  const { auth, getOrder, order, restrict } = useContext(FirebaseContext);

  useEffect(() => {
    restrict();
    getOrder(id);
  }, [id]);

  if (auth.currentUser) {
    return (
      <>
        <h3 className="mt-4">Detalle de la compra #{order.id}</h3>
        {order.items.items.length ? (
          <OrderDetailTable order={order} />
        ) : (
          <NoItems text={"No hay productos en su pedido."} />
        )}
      </>
    );
  } else {
    return <NoItems text={"No estas autorizado a ver esta sección."} />;
  }
};
