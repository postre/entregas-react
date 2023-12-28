import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { FirebaseContext } from "../context";
import ImageGallery from "react-image-gallery";
import { NumberHelpers } from "../helpers";
import { QuantityHandler } from "./QuantityHandler";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { getProduct, product } = useContext(FirebaseContext);

  useEffect(() => {
    getProduct(id);
  }, [id]);

  return (
    <>
      {product && product.images.length ? (
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <ImageGallery
                items={product.images}
                infinite={false}
                lazyLoad={true}
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
              />
            </div>

            <div className="col-md-6">
              <div className="main-description px-2">
                <div className="category text-bold">Brand: {product.brand}</div>
                <h3 className=" my-3">{product.title}</h3>
                <div className="price-area my-4">
                  <p className="old-price mb-1">
                    <del>{NumberHelpers.moneyFormat(product.priceOld)}</del>
                    <span className="old-price-discount text-danger">
                      <small> ({NumberHelpers.percentageFormat(product.discountPercentage)}off)</small>
                    </span>
                  </p>
                  <p className="new-price text-bold mb-1">
                    {NumberHelpers.moneyFormat(product.price)} <small>(+IVA)</small>
                  </p>
                  <div className="row">
                    <div className="col-4">
                      <QuantityHandler item={product} addButton={true} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="row questions bg-light p-3">
                <div className="col-md-1 icon">
                  <i className="fa-brands fa-rocketchat questions-icon"></i>
                </div>
                <div className="col-md-11 text">{product.description}</div>
              </div>

              <div className="delivery my-4">
                <p className="font-weight-bold mb-0">
                  <span>
                    <i className="fa-solid fa-truck"></i>
                  </span>{" "}
                  <b>Delivery done in 3 days from date of purchase</b>{" "}
                </p>
                <p className="text-secondary">Order now to get this product delivery</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
