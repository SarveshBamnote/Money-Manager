import './index.css'

const MoneyDetails = props => {
  const {balanceAmount, incomeAmount, expensesAmount} = props

  return (
    <dic className="money-details-container">
      <div className="balance-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="text">Your balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>

      <div className="income-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="text">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          className="icons"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="text">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </dic>
  )
}
export default MoneyDetails
