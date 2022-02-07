import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css'
import NewExpense from '../NewExpense/NewExpense';

const Expenses = (props) => {
  
  /**----------add the filter JSX in the return--------- */

  /**---------In this Expense component return:::To accept array of data({items}) dynamically from the APP.js 
   * we do this by mapping the array of items unto the ExpenseItem componeNT Element--- */

  
  // props.items?.lenght === 0 &&
 
    return (      
      props.items?.length > 0 &&
        <Card className="expenses">
          {props.items.map((expense) => (
          <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date ={expense.date}
          />
          ))}      
        </Card>
      
    );
}

export default Expenses;