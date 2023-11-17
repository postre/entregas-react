import { useEffect, useState } from "react";
import { ItemList, Slider } from "../../components";

export const ItemListContainer = ({ greetings }) => {
  const [products, setProducts] = useState([]);

  const fetchInfo = () => { 
    return fetch( "https://dummyjson.com/products?limit=30")
    .then((response) => response.json())
    .then((response) => setProducts(response.products))
  
    }
    
    useEffect(() => {
      fetchInfo();
    }, [])


  return (
    <>
      <div className="container mb-5">
        <Slider greetings={greetings} />
      </div>

      <div className="container mb-5">
        <div className="row cart d-flex align-items-stretch">
          {products.map((product) => (
            <ItemList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
