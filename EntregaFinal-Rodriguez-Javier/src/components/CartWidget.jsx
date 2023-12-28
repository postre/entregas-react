import { FaCartShopping } from "react-icons/fa6";
import { CartContext } from "../context";
import { useContext } from "react";
import { CartWidgetList } from "./CartWidgetList";
import { NoItems } from "./NoItems";
import { NumberHelpers } from "../helpers";

export const CartWidget = () => {
  const { cartObject } = useContext(CartContext);
  return (
    <div className="dropdown">
      <a
        href="#"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        className="nav-link nav-icon iconClass likeButton"
      >
        <FaCartShopping size={25} />
        <span className={`badge badge-primary color-black ${cartObject.quantity ? "animate-in" : "animate-out"}`}>
          {cartObject.quantity}
        </span>
        <small className="ms-2">
          <b>{NumberHelpers.moneyFormat(cartObject.items.length ? cartObject.total : 0)}</b>
        </small>
      </a>

      <div
        aria-labelledby="dropdownMenuButton1"
        className="shadow dropdown-menu p-0 cart-dropdown"
        style={{ width: "400px" }}
      >
        {cartObject.items.length ? <CartWidgetList /> : <NoItems text={"No hay productos en su carro."} element="h5" />}
      </div>
    </div>
  );
};
