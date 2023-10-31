import { FC, useEffect, useState, useRef } from 'react'
import './App.css'
import GetUserName from './components/GetUserName'
import SetBudget from './components/SetBudget'
import AddRecentTransactions from './components/AddRecentTransactions'
import BudgetInfo from './components/BudgetInfo'

export type ExpensesType = {
  id: number,
  category: string,
  comment: string,
  amount: number,
  date: string
}

export type MonthlyBudgetType = {
  id: number,
  date: string,
  month: string,
  budget: number,
}

const App: FC = () => {

  const [userName, setUserName] = useState<string>('');
  const [budget, setBudget] = useState<number>();
  const [date, setDate] = useState<string>('');
  const [monthlyBudget, setMonthlyBudget] = useState<MonthlyBudgetType[]>([])
  const [hasBudgetSet, setHasBudgetSet] = useState<boolean>(false);
  const [budgetMonth, setBudgetMonth] = useState<string>('');
  const [recentTransactions, setRecentTransactions] = useState<ExpensesType[]>([])
  const [transactionAmount, setTransactionAmount] = useState<number>(0);
  const [transactionType, setTransactionType] = useState<string>('default');
  const [transactionComment, setTransactionComment] = useState<string>('');
  const budgetAmountRef = useRef(null);
  const userNameRef = useRef(null);

  const getCurrentDate = (): string => {
    const today = new Date();

    const dateMonthYearDay = today.toLocaleString('default', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });
    return dateMonthYearDay;
  }

  const initializeDate = (): void => {
    const date: string = getCurrentDate();
    setDate(date)
  }

  const initializeMonth = (): void => {
    setBudgetMonth(date.split(' ')[1]);
  }
  
  const checkCurrentMonthlyBudget = (): void => {
    const currentDate = date;
    if (monthlyBudget.length !== 0 && monthlyBudget.find((budget) => budget.date = currentDate)) {
      setHasBudgetSet(true);
    }
  }

  const getBudgetForCurrentMonth = (): void => {
    const currentDate = date;
    const getBudgetAmount: MonthlyBudgetType[] = monthlyBudget.filter((month) => {
      if (month.date === currentDate) {
        return month
      }
    })

    if (getBudgetAmount.length == 0) {
      return;
    }
    setBudget(getBudgetAmount[0].budget);
  }

  useEffect(() => {
    initializeDate();
    initializeMonth();
    checkCurrentMonthlyBudget();
    getBudgetForCurrentMonth();
  }, [date, userName, monthlyBudget.length])

  return (
    <>
      {userName !== null && userName !== '' && userName !== undefined ? (
        <>
          <nav className="main-nav">
            <h2 className="header-text">
              Budget Tracker
            </h2>
            <ul className="menu-list">
              <li className="menu-list-item">
                <a className="menu-item-link">
                  Profile
                </a>
              </li>
            </ul>
          </nav>
          <section className="budget-wrapper">
            <h2 className="budget-header">
              Hello, {userName}
            </h2>
            {hasBudgetSet ? (
              <>
                <BudgetInfo budgetMonth={budgetMonth} budget={budget} />
                <AddRecentTransactions
                  date={date}
                  recentTransactions={recentTransactions}
                  setRecentTransactions={setRecentTransactions}
                  transactionAmount={transactionAmount}
                  setTransactionAmount={setTransactionAmount}
                  transactionType={transactionType}
                  setTransactionType={setTransactionType}
                  transactionComment={transactionComment}
                  setTransactionComment={setTransactionComment}
                   />
              </>
            ) : (
              <SetBudget 
                ref={budgetAmountRef} 
                budgetMonth={budgetMonth} 
                monthlyBudget={monthlyBudget} 
                setMonthlyBudget={setMonthlyBudget}
                date={date} 
              />
            )}
          </section>
        </>) : (
        <GetUserName ref={userNameRef} setUserName={setUserName} />
      )}

    </>
  )
}

export default App;