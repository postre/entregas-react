import { NumberHelpers } from "../helpers";

export const OrderDetailItem = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="text-start">
        <b>{item.title}</b>
        <br />
        <small>
          {item.brand} | {item.category}
          <br />
        </small>
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.price)}</td>
      <td className="text-center" align="center">
        {item.quantity}
      </td>
      <td className="text-end">{NumberHelpers.moneyFormat(item.subTotal)}</td>
    </tr>
  );
};
