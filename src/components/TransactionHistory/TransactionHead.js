import { TableHead } from "./TransactionHead.styled";

export default function TransactionHead() {
  return (
    <TableHead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </TableHead>
  );
}
