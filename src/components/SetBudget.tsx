import { FormEvent, PropsWithChildren, forwardRef } from "react";

type SetBudgetProps = {
    handleSubmit: (e:FormEvent) => void,
    budgetMonth: string
}

const SetBudget = forwardRef<HTMLInputElement,PropsWithChildren<SetBudgetProps>>(({handleSubmit, budgetMonth}, budgetAmountRef) => {
    return (
        <>
            Please set your budget for the month of {budgetMonth}
            <form className="set-budget-form" onSubmit={handleSubmit}>
                <input type="number" className="form-control" placeholder="Budget Amount" ref={budgetAmountRef}  required />
                <button type="submit">Set Budget</button>
            </form>
        </>
    )
})

export default SetBudget;