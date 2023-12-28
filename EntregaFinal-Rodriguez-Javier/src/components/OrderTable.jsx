import { useContext } from "react";
import { FirebaseContext } from "../context";
import { OrderListItem } from "../components";

export const OrderTable = () => {
  const { orders } = useContext(FirebaseContext);
  return (
    <>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-start">
              Código
            </th>
            <th scope="col" className="text-end">
              Fecha
            </th>
            <th scope="col" className="text-end">
              Total
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((item, index) => (
            <OrderListItem key={item.id} index={index} item={item} />
          ))}
        </tbody>
      </table>

      <div className="row">
        <div className="col-12"></div>
      </div>
    </>
  );
};
