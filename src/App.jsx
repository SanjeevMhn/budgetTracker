import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { faker } from '@faker-js/faker';
import AddExpense from './components/AddExpense';
import ExpenseModal from './components/ExpenseModal';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Transactions this week',
    },
  },
};

const labels = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Transactions',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


const checkDigits = (num) => {
  return num.toString().length;
}


const App = () => {

  const dateToday = useRef(null);
  const [showModal,setShowModal] = useState(false);
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2022-02-23",
      name: "Internet Bill",
      amount: 1650
    },
    {
      id: 2,
      date: "2022-02-23",
      name: "Electricity Bill",
      amount: 550
    },
    {
      id: 3,
      date: "2022-02-23",
      name: "Water Bill",
      amount: 250
    },
    {
      id: 4,
      date: "2022-02-23",
      name: "Bike Petrol",
      amount: 500
    },
    {
      id: 5,
      date: "2022-02-23",
      name: "Vegetables",
      amount: 350
    },
  ])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Date: ${dateToday}, Expense Name: ${expenseName}, Expense Amount: ${expenseAmount}`);
  }

  useEffect(() => {
    const setTodaysDate = () => {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      let lenMonth = checkDigits(month);
      let lenDay = checkDigits(day);

      if (lenMonth == 1) {
        month = "0" + month;
      }
      if (lenDay == 1) {
        day = "0" + day;
      }

      let today = `${year}-${month}-${day}`;

      dateToday.current.value = today;
      today = today.toString;
    }

    setTodaysDate();
  }, [])

  return (
    <div className="wrapper">
      <h2 className="welcome-msg text-xl mb-3 font-semibold">
        Welcome back, Sanjeev
      </h2>
      <div className="fund bg-[rgb(17_175_131)] text-white p-4 rounded-md flex items-center">
        <span className="label-text">
          Remaining Balance:
        </span>
        <span className="total-loaded-fund font-semibold px-2">
          Rs. 2500
        </span>
        <button className="add-fund w-[20px] h-[20px] bg-white text-black rounded-full text-xs flex items-center justify-center ml-auto" type="button">
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
      <div className="flex mt-3 flex-col lg:flex-row">
        <div className="weekly-spending p-3 flex-grow">
          <Bar options={options} data={data} />
        </div>
        <div className="transactions p-3 w-full lg:w-[40%]">
          <div className="header flex items-center mb-3 justify-between">
            <h2 className="title font-semibold text-[15px]">Latest Transactions</h2>
            {/* <button className="add-fund px-3 py-1 bg-[rgb(17_175_131)] text-white rounded-full text-xs flex items-center justify-center ml-auto" type="button">
              <FontAwesomeIcon icon={faPlus} className="flex" />
              <span className="pl-2">
                Add
              </span>
            </button> */}
            <input type="text" name="current-date" id="" className="form-control w-[38%] text-[15px] text-right" ref={dateToday} value="" disabled />
          </div>
          <table className='w-full'>
            <thead>
              <th className='text-left border border-gray-400 px-2'>Name</th>
              <th className='text-right border border-gray-400 px-2'>Amount</th>
            </thead>
            <tbody>
              {transactions.map((tran, index) => {
                return (
                  <tr key={index}>
                    <td className='border border-gray-400 px-2'>
                      {tran.name}
                    </td>
                    <td className='text-right border border-gray-400 px-2'>
                      {tran.amount}
                    </td>
                  </tr>
                )
              })}

            </tbody>
          </table>
        </div>
      </div>
      <AddExpense showModal={showModal} setShowModal={setShowModal} />

      <ExpenseModal 
        showModal={showModal} 
        setShowModal={setShowModal} 
        expenseAmount={expenseAmount} 
        expenseName={expenseName} 
        setExpenseAmount={setExpenseAmount}
        setExpenseName={setExpenseName}
        handleSubmit={handleSubmit}  />
    </div>
  )

}

export default App;
