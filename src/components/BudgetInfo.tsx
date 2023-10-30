import { FC } from 'react';

type BudgetInfoProps = {
    budgetMonth: string,
    budget: number | undefined
}

const BudgetInfo:FC<BudgetInfoProps> = ({budgetMonth, budget}) => {
    return (
        <article className="budget-info">
            <div className="budget-amount">
                Your Budget for {budgetMonth} is {budget}
            </div>
            <div className="budget-indicator">
            </div>
        </article>
    )
}

export default BudgetInfo;