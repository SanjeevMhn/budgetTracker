import React,{useEffect, useRef} from 'react';
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

const labels = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

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
  useEffect(()=>{
    const setTodaysDate = () => {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();

      let lenMonth = checkDigits(month);
      let lenDay = checkDigits(day);

      if(lenMonth == 1){
        month = "0" + month;
      }
      if(lenDay == 1){
        day = "0" + day;
      }

      let today = `${year}-${month}-${day}`;

      dateToday.current.value = today;
    }

    setTodaysDate();
  },[])

  return (
    <>
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
            <input type="date" name="current-date" id="" className="form-control w-[38%] text-[15px]" ref={dateToday} value=""/>
          </div>
          <table className='w-full'>
            <thead>
              <th className='text-left border border-gray-400 px-2'>Name</th>
              <th className='text-right border border-gray-400 px-2'>Amount</th>
            </thead>
            <tbody>
              <tr>
                <td className='border border-gray-400 px-2'>
                  Internet Bill
                </td>
                <td className='text-right border border-gray-400 px-2'>
                  Rs. 1650
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 px-2'>
                  Electricity Bill
                </td>
                <td className='text-right border border-gray-400 px-2'>
                  Rs. 550
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 px-2'>
                  Water Bill
                </td>
                <td className='text-right border border-gray-400 px-2'>
                  Rs. 250
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 px-2'>
                  Bike Petrol
                </td>
                <td className='text-right border border-gray-400 px-2'>
                  Rs. 500
                </td>
              </tr>
              <tr>
                <td className='border border-gray-400 px-2'>
                  Vegetables
                </td>
                <td className='text-right border border-gray-400 px-2'>
                  Rs. 350
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </>
  )

}

export default App;
