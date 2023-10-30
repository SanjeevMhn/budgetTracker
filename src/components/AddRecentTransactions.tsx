import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction } from 'react';
import RecentTransactionsList from "./RecentTransactionsList";
import { ExpensesType } from '../App';

type AddRecentTransactionsProps = {
    handleTransactionSubmit: (event:FormEvent) => void,
    recentTransactions: ExpensesType[],
    transactionAmount: number,
    setTransactionAmount: Dispatch<SetStateAction<number>>,
    transactionType: string,
    setTransactionType: Dispatch<SetStateAction<string>>
}


const AddRecentTransactions:FC<AddRecentTransactionsProps> = ({handleTransactionSubmit,recentTransactions, transactionAmount, transactionType, setTransactionAmount, setTransactionType}) => {
    
    const handleInputChange = (e:ChangeEvent<HTMLInputElement>) => {
        const input = parseInt(e.target.value)
        setTransactionAmount(input);
    }

    const handleSelectChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setTransactionType(e.target.value);
    }

    return (
        <article className="recent-transactions">
            <h2 className="header-text">Recent Transactions</h2>
            <form className="recent-transaction-form" onSubmit={handleTransactionSubmit}>
                <div className="form-row">
                    <label htmlFor="transaction-amt">Amount</label>
                    <input id="transaction-amt" type="number" className="form-control" placeholder="Amount" onChange={handleInputChange} value={transactionAmount}  required />
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