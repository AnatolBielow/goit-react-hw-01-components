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
