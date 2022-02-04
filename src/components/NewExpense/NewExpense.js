
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

    const submitExpenseDataHandler = (expenseDataEntered) =>{
        const expenseData = {
        ...expenseDataEntered,
        // id: Math.random().toString()
        id: (Math.floor(Math.random() * 1000) + 5000)
        };
        
        /**passing the expenseData we collected from the child component NewExpense.js to the parent APP.JS- */
        props.onAddExpense(expenseData);

    };


    return <div className='new-expense'>
        <ExpenseForm onSubmitExpenseData={submitExpenseDataHandler} />
    </div>

}


export default NewExpense;