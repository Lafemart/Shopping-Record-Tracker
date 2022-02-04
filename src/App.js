import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';

/** Note::::The initialExpenses array below is an array of object items we would use to initialized the state    */
const Dummy_Expenses = [
  // { id: 'e1', title: 'Item Name', amount: 'Amount', date: new Date()},  
];

const  App = () => {
  
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) =>{
      return[expense, ...prevExpenses ];      
    })
    
  }


  return (
    <div>
      <h2 className='h2'>Shopping Records Tracker</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  ); 
}

export default App;
