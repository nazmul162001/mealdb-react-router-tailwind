import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import MealDetails from './components/MealDetails/MealDetails';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import NotFound from './components/NotFound/NotFound';
import Contact from './Contact/Contact';

function App() {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="App max-w-screen-2xl m-auto">
      <Navbar 
      setSearchText = {setSearchText}
      />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/meals" element={<Meals searchText = {searchText} ></Meals>}></Route>
        <Route path="/meal/:mealId" element={<MealDetails></MealDetails>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
