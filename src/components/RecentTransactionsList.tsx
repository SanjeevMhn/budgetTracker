import { FC } from "react";
import { ExpensesType } from "../App";

type RecentTransactionsListProps = {
    recentTransactions: ExpensesType[]
}

const RecentTransactionsList: FC<RecentTransactionsListProps> = ({ recentTransactions }) => {
    return (
        <ul className="transaction-list">
            {
                recentTransactions.map((transaction: ExpensesType) => {
                    return (
                        <li className="transaction-item" key={transaction.id}>
                            <div className="transaction-header">
                                <span className="transaction-category">{transaction.category}</span>
                                <span className="transaction-amount">{transaction.amount}</span>
                            </div>
                            <div className="transaction-body">
                                <span className="transaction-comment">{transaction.comment}</span>
                            </div>

                        </li>
                    )
                })
            }
        </ul>
    )
}

export default RecentTransactionsList;