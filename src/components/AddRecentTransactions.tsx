import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from 'react';
import RecentTransactionsList from "./RecentTransactionsList";
import { ExpensesType } from '../App';

type AddRecentTransactionsProps = {
    date: string,
    recentTransactions: ExpensesType[],
    setRecentTransactions: Dispatch<SetStateAction<ExpensesType[]>>,
    transactionAmount: number,
    setTransactionAmount: Dispatch<SetStateAction<number>>,
    transactionType: string,
    setTransactionType: Dispatch<SetStateAction<string>>
    transactionComment: string,
    setTransactionComment: Dispatch<SetStateAction<string>>
}


const AddRecentTransactions: FC<AddRecentTransactionsProps> = ({date,recentTransactions, setRecentTransactions, transactionAmount, transactionType, setTransactionAmount, setTransactionType, transactionComment, setTransactionComment }) => {

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const input = parseInt(e.target.value)
        setTransactionAmount(input);
    }

    const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setTransactionType(e.target.value);
    }

    const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTransactionComment(e.target.value);
    }

    const handleTransactionSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (transactionType === 'default') {
            return;
        }

        if (transactionAmount == null || transactionAmount === 0 || transactionAmount < 0) {
            return;
        }

        if (transactionComment === '' || transactionComment === null) {
            return;
        }
        const transactionObj: ExpensesType = {
            id: Date.now(),
            category: transactionType,
            comment: transactionComment,
            date: date,
            amount: transactionAmount
        }

        setRecentTransactions([...recentTransactions, transactionObj]);
        setTransactionAmount(0)
        setTransactionType("default")
        setTransactionComment("")
    }

    return (
        <article className="recent-transactions">
            <h2 className="header-text">Recent Transactions</h2>
            <form className="recent-transaction-form" onSubmit={handleTransactionSubmit}>
                <div className="form-row">
                    <label htmlFor="transaction-amt">Amount</label>
                    <input id="transaction-amt" type="number" className="form-control" placeholder="Amount" onChange={handleAmountChange} value={transactionAmount} required />
                </div>
                <div className="form-row">
                    <label htmlFor='transaction-category'>Category</label>
                    <select id="transaction-category" onChange={handleSelectChange} value={transactionType} required>
                        <option value="default">Choose Option</option>
                        <option value="bills">Bills</option>
                        <option value="grocery">Grocery</option>
                        <option value="personal">Personal</option>
                        <option value="home">Home</option>
                        <option value="other">Other</option>
                    </select>
                    <span className="side-btn">
                        <button className="add-btn" type="button">Add Category</button>
                    </span>
                </div>
                <div className="form-row">
                    <label htmlFor="comment">Comment</label>
                    <input type="text" name="comment" id="comment" onChange={handleCommentChange} value={transactionComment} placeholder='Transaction Comment' required />
                </div>
                <div className="form-row">
                    <button className="submit-btn" type="submit">Add</button>
                </div>
            </form>
            {
                recentTransactions.length !== 0 ? (
                    <RecentTransactionsList recentTransactions={recentTransactions} />
                ) : (
                    <p className="secondary-text">No Transactions added</p>
                )
            }

        </article>
    )
}

export default AddRecentTransactions;