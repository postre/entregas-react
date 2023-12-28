import { useContext } from "react";
import { FaTrash } from "react-icons/fa6";
import { NumberHelpers } from "../helpers";
import { QuantityHandler } from "./QuantityHandler";
import { CartContext } from "../context";

export const CartListItem = ({ item, index }) => {
  const { deleteFromCart } = useContext(CartContext);

  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="text-start">
        <b>{item.title}</b>
        <br />
        <small>
          {item.brand} | {item.category}
          <br />
        </small>
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.price)}</td>
      <td className="text-center" align="center">
        <div className="row">
          <div className="col-6 offset-3">
            <QuantityHandler className="" item={item} min={1} addOnIncrementDecrement={true} />
          </div>
        </div>
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.subTotal)}</td>
      <td className="text-center">
        <button className="btn btn-danger btn-sm">
          <FaTrash onClick={() => deleteFromCart(item)} />
        </button>
      </td>
    </tr>
  );
};
