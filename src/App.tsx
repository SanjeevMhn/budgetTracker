import { FC, useEffect, useState, useRef } from 'react'
import './App.css'

type ExpensesType = {
  id: number,
  category: string,
  amount: string,
  date: string
}

type MonthlyBudgetType = {
  id: number,
  date: string,
  month: string,
  budget: number,
}

const App:FC = () => {

  const [userName, setUserName] = useState<string>('');
  const [budget, setBudget] = useState<number>();
  const [date, setDate] = useState<string>('');
  const [monthlyBudget, setMonthlyBudget] = useState<MonthlyBudgetType[]>([])
  const [hasBudgetSet, setHasBudgetSet] = useState<boolean>(false);
  const [budgetMonth, setBudgetMonth] = useState<string>('');
  const [recentTransactions, setRecentTransactions] = useState<ExpensesType[]>([])
  const userNameRef = useRef(null);
  const budgetAmountRef = useRef(null);

  const getCurrentDate = ():string => {
    const today = new Date();

    const dateMonthYearDay = today.toLocaleString('default',{year: 'numeric',month: 'long',day: 'numeric',weekday: 'long'});
    return dateMonthYearDay; 
  }

  const initializeDate = ():void => {
    const date:string = getCurrentDate();
    setDate(date)
  }

  const initializeMonth = ():void => {
    const currentDate = date;
    setBudgetMonth(date.split(' ')[1]);
  }


  const checkCurrentMonthlyBudget = ():void => {
    const currentDate = date;
    if(monthlyBudget.length !== 0 && monthlyBudget.find((budget) => budget.date = currentDate)){
      setHasBudgetSet(true);
    }
  }

  const getBudgetForCurrentMonth = ():void => {
    const currentDate = date;
    const getBudgetAmount:MonthlyBudgetType[] = monthlyBudget.filter((month) => {
      if(month.date === currentDate){
        return month
      }
    })

    if(getBudgetAmount.length == 0){
      return;
    }
    setBudget(getBudgetAmount[0].budget);
  }


  const handleSubmit = (event:any):void => {
    event.preventDefault();
    const currentDate = date;

    if(monthlyBudget.find((budget) => budget.date === currentDate)){
      return;
    }
    const budgetObject:MonthlyBudgetType = {
      id: Date.now(),
      budget: budgetAmountRef.current.value,
      date: currentDate,
      month: budgetMonth 
    }

    setMonthlyBudget([...monthlyBudget,budgetObject])
  }

  const handleUserName = (event:any) => {
    event.preventDefault();
    setUserName(userNameRef.current.value);
  }

  useEffect(() => {
    initializeDate();
    checkCurrentMonthlyBudget();
    getBudgetForCurrentMonth();
  },[date,userName,monthlyBudget.length])

  return (
    <>
      {userName !== null && userName !== '' && userName !== undefined ? (<>
        <nav className="main-nav">
          <h2 className="header-text">
            Budget Tracker
          </h2>
          <ul className="menu-list">
            <li className="menu-list-item">
              <a className="menu-item-link">
                Categories
              </a>
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
          { hasBudgetSet ? (
            <>
              <article className="budget-initialize">
                <div className="budget-amount">
                  Your Budget for {date.split(' ')[1]} is {budget}
                </div>
                <div className="budget-indicator">
                </div>
              </article>

              <article className="monthly-expenses">
              </article>

              <article className="recent-transactions">
                <h2 className="header-text">Recent Transactions</h2>
                <form className="recent-transaction-form">
                  <div className="form-row">
                    <label htmlFor="transaction-amt">Amount</label>
                    <input id="transaction-amt" type="number" className="form-control" placeholder="Amount" />
                  </div>
                  <div className="form-row">
                    <label htmlFor='transaction-category'>Category</label> 
                    <select id="transaction-category">
                      <option value="bills">Bills</option>
                      <option value="grocery">Grocery</option>
                      <option value="personal">Personal</option>
                      <option value="home">Home</option>
                    </select>
                  </div>

                </form>
                {
                  recentTransactions.length !== 0 ? (
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
                  ):(
                    <p className="secondary-text">No Transactions added</p>
                  )
                }
                
              </article>
            </>

          ) : (
            <>
              Please set your budget for the month of {date.split(' ')[1]}
              <form className="set-budget-form" onSubmit={handleSubmit}>
                <input type="number" className="form-control" placeholder="Budget Amount" ref={budgetAmountRef}  required />
                <button type="submit">Set Budget</button>
              </form>
            </>
          )}
          
        </section>
      </>) : (<>
        <h2 className="header-text">Please enter your name</h2>
        <form onSubmit={handleUserName}>
          <input type="text" className="form-control" ref={userNameRef} required />
          <button type="submit">Submit</button>
        </form>
      </>) } 
      
    </>
  )
}

export default App;