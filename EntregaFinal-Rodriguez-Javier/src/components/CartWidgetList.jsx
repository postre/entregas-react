import { FaTrash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { CartContext } from "../context";
import { useContext } from "react";
import { NumberHelpers } from "../helpers";

export const CartWidgetList = () => {
  const { cartObject, deleteFromCart } = useContext(CartContext);
  return (
    <ul className="list-group row" role="menu">
      {cartObject.items.map((item) => (
        <li key={item.id} className="list-group-item">
          <div className="row">
            <div className="col-10">
              <b>{item.title}</b>
              <br />
              {NumberHelpers.moneyFormat(item.price)} x {item.quantity}
            </div>
            <div className="col-2 text-end">
              <button className="btn btn-sm btn-danger">
                <FaTrash onClick={() => deleteFromCart(item)} />
              </button>
            </div>
          </div>
        </li>
      ))}

      <li className="list-group-item">
        <div className="row">
          <div className="col-6 text-end"></div>
          <div className="col-6 text-end">
            <b className="me-2">Subtotal:</b> {NumberHelpers.moneyFormat(cartObject.subtotal)}
            <br />
            <b className="me-2">
              IVA <small>({NumberHelpers.percentageFormat(cartObject.taxesPercentage)})</small>:
            </b>
            {NumberHelpers.moneyFormat(cartObject.taxes)}
            <br />
            <b className="me-2">Envio:</b> {NumberHelpers.moneyFormat(cartObject.shippingCost)}
            <hr />
            <h5>{NumberHelpers.moneyFormat(cartObject.total)}</h5>
          </div>
        </div>
      </li>
      <li className="list-group-item">
        <Link to="/cart">
          <button className="btn btn-primary w-100">ir al carro</button>
        </Link>
      </li>
    </ul>
  );
};
