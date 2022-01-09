import PropTypes from "prop-types";
import { TableItem } from "./TransactionItem.styled";

export default function TransactionItem({ item }) {
  const { type, amount, currency } = item;
  return (
    <TableItem>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TableItem>
  );
}

TransactionItem.propTypes = {
  item: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
