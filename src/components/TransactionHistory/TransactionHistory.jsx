import PropTypes from 'prop-types';
import { TransactionTable, TableHead, TableHeadItem, TableRow, TableBody } from './TransactionHistory.styled';
import { TransactionString } from './TransactionString';

export const TransactionHistory = ({ items }) => {
return (
        <TransactionTable className="transaction-history">
            <TableHead>
                <TableRow>
                    <TableHeadItem>Type</TableHeadItem>
                    <TableHeadItem>Amount</TableHeadItem>
                    <TableHeadItem>Currency</TableHeadItem>
                </TableRow>
            </TableHead>
            <TableBody>
                { items.map((transaction) => (
                        <TransactionString key={transaction.id} transaction={transaction}/>
                        ))}
            </TableBody>
        </TransactionTable>
)}