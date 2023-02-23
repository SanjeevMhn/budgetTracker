import React from "react";

const AddExpense = () => {

    return (
        <button type="button" className="w-[65px] h-[65px] bg-cyan-600 text-white rounded-full flex items-center justify-center absolute bottom-[20px] left-[50%] lg:left-[calc(50%+220px)] lg:translate-x-[calc(50%-calc(220px-calc(65px/2)))] overflow-visible group">
            <span className="icon-container leading-none flex items-center justify-center w-[60%] invert brightness-0">
                <img src="../src/assets/add-outline.svg" alt="" srcset="" />
            </span>
            <span className="tooltips absolute right-[-110px] text-white text-[12.5px] min-w-[100px] bg-black px-2 py-1 rounded-md hidden group-hover:inline-block">
                Add Expenses
            </span>
        </button>
    )

}

export default AddExpense;