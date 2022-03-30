import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleMeal = (props) => {
  const {strMealThumb, strMeal, strArea, strCategory, idMeal} = props.meal

  const navigate = useNavigate();
  const singleDetails = () => {
    navigate('/meal/' + idMeal)
  }

  return (
    <div className='p-10 rounded-2xl shadow-slate-600 shadow-inner relative'>
      <img className='' src={strMealThumb} alt="" />
      <h3 className='text-2xl font-bold'>Name: <span className='text-gray-500'>{strMeal}</span></h3>
      <h3 className='text-2xl font-bold'>Category: <span className='text-gray-500'>{strCategory}</span></h3>
      <h2 className='text-2xl font-bold'>Area: <span className='text-gray-500'>{strArea}</span></h2>
      <button onClick={singleDetails} className='absolute bottom-0 left-0 bg-gray-500 w-full h-10 rounded-b-2xl text-gray-200 font-mono font-bold text-xl'>See Details</button>
    </div>
  );
};

export default SingleMeal;