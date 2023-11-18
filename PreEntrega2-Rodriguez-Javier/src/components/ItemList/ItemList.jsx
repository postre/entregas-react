import { Link } from "react-router-dom";
import { useCount } from "../../hooks/CountItemHandler.js";
import { moneyFormat } from "../../utils/NumberUtils.js";
import { ItemListHandler } from "../ItemListHandler/ItemListHandler.jsx";



export const ItemList = ({ product }) => {

  const { count, increment, decrement } = useCount(0);

  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="card card-product h-100">
          <img src={product.thumbnail} className="img-fluid product-img" />

          <div className="card-body border-top">
            <h5 className="card-title">{product.title}</h5>
            <p>{product.brand}</p>
            <p className="card-text">{product.description}</p>
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col-6">
                <h4>{moneyFormat(product.price)}</h4>
                <p className="mt-2">
                  <Link to={`/product/${product.id}`}>
                    Ver Mas
                  </Link>
                </p>
              </div>
              <div className="col-6 text-end ">
                <ItemListHandler increment={increment} decrement={decrement} count={count} addButton={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
