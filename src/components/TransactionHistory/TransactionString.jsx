import { TableRow, TableRowItem } from './TransactionHistory.styled';

export const TransactionString = ({transaction: {id, type, amount, currency}}) => {
  return (
        <TableRow>
            <TableRowItem>{type}</TableRowItem>
            <TableRowItem>{amount}</TableRowItem>
            <TableRowItem>{currency}</TableRowItem>
        </TableRow>
  )};
