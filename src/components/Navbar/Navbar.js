import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Navbar = (props) => {

  const {setSearchText} = props

  return (
    <nav className='h-[150px] md:h-[80px] bg-indigo-400 flex flex-col md:flex-row justify-center md:justify-between items-center px-10'>
      <div className="logo md:order-1">
      <Link to="/" className='text-3xl font-mono font-bold'>Logo</Link>
      </div>

      <div className="search-field order-3 md:order-2">
        <input onChange={(e) => setSearchText(e.target.value)} className='md:w-[300px] h-[35px] bg-indigo-300 rounded-r-full rounded-l-full border-0 pr-3 pl-5 placeholder-gray-500  shadow-current shadow' placeholder='search your meal' type="search" name="" id="" />
      </div>

      <div className="nav-menu md:order-3 flex">
        <CustomLink className='px-2 text-gray-800 text-xl' to="/">Home</CustomLink>
        <CustomLink className='px-2 text-gray-800 text-xl' to="/meals">Meal</CustomLink>
        <CustomLink className='px-2 text-gray-800 text-xl' to="/contact">Contact</CustomLink>
      </div>
    </nav>
  );
};

export default Navbar;