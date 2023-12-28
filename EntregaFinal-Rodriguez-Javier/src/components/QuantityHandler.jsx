import { useContext, useEffect, useState } from "react";
import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";
import { CartContext } from "../context";

export const QuantityHandler = ({ item, addButton = false, addOnIncrementDecrement = false, min = 0 }) => {
  const { addToCart, deleteFromCart, isInCart } = useContext(CartContext);

  const [count, setCount] = useState(0);

  const handleAddToCart = (item) => {
    if (count == 0) {
      handleDeleteFromCart(item);
      return;
    }
    addToCart(item, count);
  };

  const handleDeleteFromCart = () => {
    deleteFromCart(item);
  };

  const handleIncrementItem = () => {
    setCount(count + 1);
    if (addOnIncrementDecrement) {
      addToCart(item, count + 1);
    }
  };
  const handleDecrementItem = () => {
    if (count == min) {
      return;
    }
    setCount(count - 1);
    if (addOnIncrementDecrement) {
      addToCart(item, count - 1);
    }
  };

  useEffect(() => {
    const inCart = isInCart(item.id);
    setCount(inCart ? inCart.quantity : 0);
  }, []);

  return (
    <>
      <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
        <button className="btn btn-default btn-sm border" onClick={handleDecrementItem}>
          <FaMinus />
        </button>
        <button className="btn btn-default btn-sm border" style={{ width: "70px" }}>
          {count}
        </button>
        <button className="btn btn-default btn-sm border" onClick={handleIncrementItem}>
          <FaPlus />
        </button>
      </div>
      {addButton ? (
        <button
          className={`btn btn-${isInCart(item.id) ? "success" : "secondary"} w-100 mt-1 btn-sm`}
          onClick={() => handleAddToCart(item)}
        >
          <FaCartShopping /> <small>{isInCart(item.id) ? "Actualizar" : "Agregar"}</small>
        </button>
      ) : (
        ""
      )}
    </>
  );
};
