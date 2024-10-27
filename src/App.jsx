import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import BudgetCalculator from './components/budgetCalculator'

function App(){
  return (
    <div>
      <Navbar />
      <Banner />
      <BudgetCalculator />
    </div>
  )
}

export default App;
