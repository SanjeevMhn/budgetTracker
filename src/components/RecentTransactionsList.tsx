import { FC } from "react";
import { ExpensesType } from "../App";

type RecentTransactionsListProps = {
    recentTransactions: ExpensesType[]
}

const RecentTransactionsList:FC<RecentTransactionsListProps> = ({recentTransactions}) => {
    return (
        <ul className="transaction-list">
            {
                recentTransactions.map((transaction:ExpensesType) => {
                    return (
                    <li className="transaction-item" key={transaction.id}>
                        <span className="transaction-category">{transaction.category}</span>
                        <span className="transaction-amount">{transaction.amount}</span>
                    </li>
                    )
                })
            }
        </ul>
    )
}

export default RecentTransactionsList;