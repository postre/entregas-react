import { useContext } from "react";
import { QuantityHandler } from ".";
import { CartContext } from "../context";
import { NumberHelpers, StringHelpers } from "../helpers";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const ItemList = ({ product }) => {
  const { isInCart } = useContext(CartContext);
  return (
    <>
      <div className="col-md-4 mt-4 ">
        <div className="card card-product h-100">
          <img src={product.thumbnail} className="img-fluid product-img" />

          <div className="card-body border-top item-list">
            <div className={isInCart(product.id) ? "added-icon-in" : "added-icon-out"}>
              <FaCartShopping />
            </div>

            <small>{StringHelpers.title(product.category)}</small>
            <h5 className="card-title">{product.title}</h5>
            <div className="text-truncate-container">
              <p className="card-text">{product.description}</p>
            </div>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
                <h4 className="mb-3">{NumberHelpers.moneyFormat(product.price)}</h4>
                <Link to={`/product/${product.id}`}>Ver Más</Link>
              </div>
              <div className="col-6">
                <QuantityHandler item={product} addButton={true} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
