import { Dispatch, FormEvent, PropsWithChildren, SetStateAction, forwardRef } from "react";
import { MonthlyBudgetType } from "../App";

type SetBudgetProps = {
    budgetMonth: string,
    monthlyBudget: MonthlyBudgetType[],
    setMonthlyBudget: Dispatch<SetStateAction<MonthlyBudgetType[]>>,
    date: string
}


const SetBudget = forwardRef<HTMLInputElement, PropsWithChildren<SetBudgetProps>>(({ budgetMonth,monthlyBudget,setMonthlyBudget,date }, budgetAmountRef) => {
    const handleSubmit = (event: FormEvent): void => {
        event.preventDefault();
        const currentDate = date;

        if (monthlyBudget.find((budget) => budget.date === currentDate)) {
            return;
        }
        const budgetObject: MonthlyBudgetType = {
            id: Date.now(),
            budget: budgetAmountRef.current.value,
            date: currentDate,
            month: budgetMonth
        }

        setMonthlyBudget([...monthlyBudget, budgetObject])
    }
    return (
        <>
            Please set your budget for the month of {budgetMonth}
            <form className="set-budget-form" onSubmit={handleSubmit}>
                <input type="number" className="form-control" placeholder="Budget Amount" ref={budgetAmountRef} required />
                <button type="submit">Set Budget</button>
            </form>
        </>
    )
})

export default SetBudget;