import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const ExpenseModal = ({showModal,setShowModal, expenseAmount, expenseName, setExpenseAmount, setExpenseName, handleSubmit}) => {

    return (
        <div className={`modal absolute w-full h-full bg-[rgba(0,0,0,0.75)] items-center justify-center top-0 left-0 ${showModal ? 'flex' : 'hidden'}`}>
            <button className="icon-container absolute top-[30px] right-[30px] w-[50px] h-[50px]" onClick={()=>{setShowModal(showModal = false)}}>
                <FontAwesomeIcon icon={faClose} className='text-white text-xl' />
            </button>
            <div className="modal-body w-[50%] bg-gray-300 text-blaack rounded-lg p-4">
                <h2 className='text-center text-xl mb-4'>Expense Data</h2>
                <form className='' onSubmit={handleSubmit}>
                    {/* <div className="form-group flex flex-col mb-2">
                        <label htmlFor="date" className='mb-1'>
                            Date:
                        </label>
                        <input type="date" name="date" id="date" className='px-2 py-1 text-xs rounded-md' />
                    </div> */}
                    <div className="form-group flex flex-col mb-2">
                        <label htmlFor="expense-name" className='mb-1'>Expense Name:</label>
                        <input type="text" name="expense-name" id="expense-name" className="px-2 py-1 text-xs rounded-md"  onChange={(e)=>setExpenseName(e.target.value)}/>
                    </div>
                    <div className="form-group flex flex-col mb-2">
                        <label htmlFor="expense-amount" className='mb-1'>Expense Amount</label>
                        <input type="number" name="expense-amount" id="expense-amount" className='px-2 py-1 text-xs rounded-md' onChange={(e)=>setExpenseAmount(e.target.value)}/>
                    </div>
                    <div className="form-group flex justify-center pt-3">
                        <button type="submit" className='py-1 px-2 rounded-md text-white bg-blue-500 mr-3'>Save</button>
                        <button type="reset" className='py-1 px-2 rounded-md text-white bg-red-700' onClick={()=>{setShowModal(showModal = false)}}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default ExpenseModal;
