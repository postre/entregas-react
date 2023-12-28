import { FaSearchPlus } from "react-icons/fa";
import { NumberHelpers, StringHelpers } from "../helpers";
import { Link } from "react-router-dom";

export const OrderListItem = ({ item, index }) => {
  return (
    <tr>
      <th scope="row">{index + 1}</th>
      <td className="text-start">{item.id}</td>
      <td className="text-end">{StringHelpers.date(item.date)}</td>

      <td className="text-end">{NumberHelpers.moneyFormat(item.items.total)}</td>
      <td className="text-center">
        <Link to={`/order/${item.id}`}>
          <button className="btn btn-primary btn-sm">
            <FaSearchPlus />
          </button>
        </Link>
      </td>
    </tr>
  );
};
