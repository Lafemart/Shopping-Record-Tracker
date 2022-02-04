
import { useState } from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => { 
    
    /*----FUNCTION: UseState to collect/target data from user: listening to input value and store each input element current state-----------------* */
    const [titleEntered, setTitleEntered] = useState('');
    const [amountEntered, setAmountEntered] = useState('')
    const [dateEntered, setDateEntered] = useState('')

    /**This alternative method of working with multiple state is good if our current state operation will depend on previous state */
    // const [userInput, setUserInput] = useState({
    //     titleEntered: '',
    //     amountEntered: '',
    //     dateEntered: '' 
    // })

    const titleChangeHandler = (e) => {
        setTitleEntered(e.target.value);
    
    /**This alternative method of working with multiple state is good if our current state operation will depend on previous state */
    //     setUserInput((prevState) => {
    //     return {
    //         ...prevState,
    //         titleEntered: e.target.value
    //     };
    // });
    };
     

    const amountChangeHandler = (e) => {
        setAmountEntered(e.target.value);

    /**This alternative method of working with multiple state is good if our current state operation will depend on previous state */
    //    setUserInput((prevState) => {
    //        return {
    //            ...prevState,
    //            amountEntered: e.target.value
    //        };
    //    });
    };

    const dateChangeHandler = (e) => {
        setDateEntered(e.target.value)
    
    /**This alternative method of working with multiple state is good if our current state operation will depend on previous state */
    //     setUserInput(() => {
    //        return {
    //            ...prevState,
    //            dateEntered: e.target.value
    //        };
    //    });
    };
    
    /**------------FUNCTION: Collect value from the form onSubmit by the user---------------------------- */
    const submitHandler = (e) =>{
        e.preventDefault();

        const expenseData = {
            title: titleEntered,
            amount: amountEntered,
            date: new Date(dateEntered)
        };
    
        /**------FUNCTION: Passing the expensData as props upward to the parent compnent NewExpense.js
         * 1. call the function we declared in the parent component and passed down here from the parent compoment
         * 2. pass the expenseData which is the form data as argument/params when calling the function ----------------------------*/
         props.onSubmitExpenseData(expenseData);

        /**----------FUNCTION: Clearing inputs fields when user submit form---------------------------------------
         * we do this by:
         * 1. Setting the setTittleEntered, setAmountEntered, SetDateEntered e.t.c all into empty string
         * 2. Setting the value attribute on all the input element to the current state data such as tittleEntered, 
         * amountEntered, $  dateEntered.
         * ----- 
         * This is called two way binding*/
        setTitleEntered('');    
        setAmountEntered('');
        setDateEntered('');            
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Item Description</label>
                <input type='text' value={titleEntered} onChange={titleChangeHandler} required />
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amountEntered} onChange={amountChangeHandler} required />
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2022-12-31' value={dateEntered} onChange={dateChangeHandler} required />
            </div>
        </div>
        <div className='new-expense__actions'>
            <button>Add expense</button>
        </div>
    </form>

}

export default ExpenseForm;