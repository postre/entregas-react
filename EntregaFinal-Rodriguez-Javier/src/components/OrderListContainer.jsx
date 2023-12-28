import { useContext, useEffect, useState } from "react";
import { FirebaseContext } from "../context";
import { NoItems } from "./NoItems";
import { OrderTable } from "../components";

export const OrderListContainer = () => {
  const [key, setKey] = useState(null);
  const { auth, orders, getOrders } = useContext(FirebaseContext);

  const searchOrder = (e) => {
    setKey(e.target.value);
  };

  useEffect(() => {
    getOrders(key);
  }, [key]);

  if (auth.currentUser) {
    return (
      <>
        <div className="row">
          <div className="col-12">
            <div className="form-group">
              <label>Buscar Pedidos por ID</label>
              <input
                type="text"
                className="form-control"
                placeholder="Escriba o pegue el id de su pedido"
                onKeyUp={searchOrder}
              />
            </div>
          </div>
        </div>
        <hr />
        <h3 className="mt-4">Compras realizadas por {auth.currentUser.displayName}</h3>
        {orders.length ? <OrderTable /> : <NoItems text={"Aun no realizaste ninguna compra."} />}
      </>
    );
  } else {
    return <NoItems text={"No estas autorizado a ver esta sección."} />;
  }
};
