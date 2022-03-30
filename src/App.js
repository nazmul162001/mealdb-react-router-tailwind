import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import Meals from './components/Meals/Meals';
import Navbar from './components/Navbar/Navbar';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/meals" element={<Meals></Meals>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </div>
  );
}

export default App;
