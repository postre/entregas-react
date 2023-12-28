import { useContext } from "react";
import { CartContext } from "../context";
import { NumberHelpers } from "../helpers";
import { CartListItem } from "../components";

export const CartTable = () => {
  const { cartObject, deleteFromCart, orderConfirm } = useContext(CartContext);
  return (
    <>
      <table className="table mt-4">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col" className="text-start">
              Producto
            </th>
            <th scope="col" className="text-end">
              Precio
            </th>
            <th scope="col" className="text-center">
              Cantidad
            </th>
            <th scope="col" className="text-end" style={{ width: "150px" }}>
              Total
            </th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {cartObject.items.map((item, index) => (
            <CartListItem key={item.id} index={index} item={item} deleteFromCart={deleteFromCart} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="border-0"></th>

            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">Subtotal</td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(cartObject.subtotal)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">
              IVA <small>({NumberHelpers.percentageFormat(cartObject.taxesPercentage)})</small>
            </td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(cartObject.taxes)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end">Envio</td>
            <td className="text-end">{NumberHelpers.moneyFormat(cartObject.shippingCost)}</td>
            <td className="border-0"></td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">
              <b>Total</b>
            </td>
            <td className="text-end border-0">
              <b>{NumberHelpers.moneyFormat(cartObject.total)}</b>
            </td>
            <td className="border-0"></td>
          </tr>
        </tfoot>
      </table>

      <div className="row">
        <div className="col-11 text-end">
          <button
            className="btn btn-primary"
            onClick={() => {
              orderConfirm();
            }}
          >
            Confirmar Compra
          </button>
        </div>
      </div>
    </>
  );
};
