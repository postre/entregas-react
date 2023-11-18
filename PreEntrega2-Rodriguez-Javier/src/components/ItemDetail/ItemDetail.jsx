import { useEffect, useState } from "react";
import { getProduct } from "../../mocks";
import { useParams } from "react-router-dom";
import { Loader } from "../Loader/Loader";
import { moneyFormat } from "../../utils/NumberUtils";
import ImageGallery from "react-image-gallery";
import { useCount } from "../../hooks/CountItemHandler";
import { ItemListHandler } from "../ItemListHandler/ItemListHandler";

export const ItemDetail = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const { count, increment, decrement } = useCount(0);

  useEffect(() => {
    setIsLoading(true);
    getProduct(id)
      .then((response) => {
        setIsLoading(false); 
        setProduct(response);
      })
      .catch((error) => console.log(error));
  }, [id]);
  return (
    <>
      {isLoading ? <Loader isLoading={isLoading} /> : 
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
              <div className="category text-bold">{product.category}</div>
              <h3 className=" my-3">{product.title}</h3>
              <div className="category text-bold">{product.brand}</div>
              <div className="price-area my-4">

                <p className="new-price text-bold mb-1">{moneyFormat(product.price)} <small>(+IVA)</small></p>
              
              </div>

              
            </div>

        

            <div className="row questions bg-light p-3">
              <div className="col-md-11 text">
              {product.description}
              </div>
            </div>

            <div className="row mt-4">
              <div className="col-4">
                <ItemListHandler increment={increment} decrement={decrement} count={count} addButton={false} />
              </div>
            </div>
            
            
          </div>
        </div>
      </div>
      }
    </>
  );
};
