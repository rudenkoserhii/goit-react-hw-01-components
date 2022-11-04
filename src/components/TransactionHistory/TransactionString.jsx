import { TableRow, TableRowItem } from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionString = ({transaction: {id, type, amount, currency}}) => {
  return (
        <TableRow>
            <TableRowItem>{type}</TableRowItem>
            <TableRowItem>{amount}</TableRowItem>
            <TableRowItem>{currency}</TableRowItem>
        </TableRow>
  )};

TransactionString.propTypes = {
    transaction: PropTypes.shape({
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
})};