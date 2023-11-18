import { FaCartShopping, FaMinus, FaPlus } from "react-icons/fa6";

export const ItemListHandler = ({ increment, decrement, count, addButton=false, added=false}) => {
  return (
    <>
      <div className="btn-group btn-group-toggle w-100" data-toggle="buttons">
        <button className="btn btn-default btn-sm border" onClick={decrement}>
          <FaMinus />
        </button>
        <button className="btn btn-default btn-sm border" style={{width: '40px'}}>{count}</button>
        <button className="btn btn-default btn-sm border" onClick={increment}>
          <FaPlus />
        </button>
      </div>
      {addButton ? (
        <button className={`btn btn-${added ? "success" : "secondary"} w-100 mt-1 btn-sm`} >
          <FaCartShopping /> <small>{added ? "Actualizar" : "Agregar"}</small>
        </button>
      ) : (
        ""
      )}
    </>
  );
};