import { TransactionTable, TableHeadItem, TableRow } from './TransactionHistory.styled';
import { TransactionString } from './TransactionString';

export const TransactionHistory = ({ items }) => {
return (
        <TransactionTable className="transaction-history">
            <thead>
                <TableRow>
                    <TableHeadItem>Type</TableHeadItem>
                    <TableHeadItem>Amount</TableHeadItem>
                    <TableHeadItem>Currency</TableHeadItem>
                </TableRow>
            </thead>
            <tbody>
                { items.map((transaction) => (
                        <TransactionString key={transaction.id} transaction={transaction}/>
                        ))}
            </tbody>
        </TransactionTable>
)}