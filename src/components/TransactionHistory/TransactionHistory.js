import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import TransactionHead from "./TransactionHead";
import { TransactionTable } from "./TransactionHistory.styled";
export default function TransactionHistory({ items }) {
  return (
    <TransactionTable>
      <TransactionHead />

      <tbody>
        {items.map((item) => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </tbody>
    </TransactionTable>
  );
}

TransactionHistory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
};
