import { useEffect, useState } from "react";
import { ItemList, Loader, Slider } from "../../components";
import { getProducts, getCategory } from "../../mocks";
import { useParams } from "react-router";

export const ItemListContainer = ({ greetings = [] }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    
    if(categoryId) {
      getCategory(categoryId )
      .then((response) => { 
        setCategory(response);
       })
      .catch((error) => console.log(error));
    }else{
      setCategory(undefined);
    }

  
    getProducts({ category:categoryId })
      .then((response) => {
        setIsLoading(false); // Usamos el operado not para cambiar el valor del estado a la inversa del actual
        // Guardamos los productos recibidos en el estado para mostrar luego en el DOM
        
        setProducts(response);
      })
      .catch((error) => console.log(error));
  }, [categoryId]);

  return (
    <>
      {isLoading ? <Loader isLoading={isLoading} /> : ""}
      {greetings.length ? <Slider greetings={greetings} /> : ""}
      <div className="container mb-5">
      {category!=undefined ? <h3 className="mt-4">{category.name}</h3> : ""}
      
        <div className="row cart d-flex align-items-stretch">
          {products.map((product) => (
            <ItemList product={product} key={product.id} />
          ))}
        </div>
      </div>
    </>
  );
};
