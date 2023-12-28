import { NumberHelpers } from "../helpers";
import { OrderDetailItem } from "../components";

export const OrderDetailTable = ({ order }) => {
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
          </tr>
        </thead>
        <tbody>
          {order.items.items.map((item, index) => (
            <OrderDetailItem key={item.id} index={index} item={item} />
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">Subtotal</td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(order.items.subtotal)}</td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">
              IVA <small>({NumberHelpers.percentageFormat(order.items.taxesPercentage)})</small>
            </td>
            <td className="text-end border-0">{NumberHelpers.moneyFormat(order.items.taxes)}</td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end">Envio</td>
            <td className="text-end">{NumberHelpers.moneyFormat(order.items.shippingCost)}</td>
          </tr>
          <tr>
            <th className="border-0"></th>
            <td className="border-0"></td>
            <td className="border-0"></td>
            <td className="text-end border-0">
              <b>Total</b>
            </td>
            <td className="text-end border-0">
              <b>{NumberHelpers.moneyFormat(order.items.total)}</b>
            </td>
          </tr>
        </tfoot>
      </table>
    </>
  );
};
