import React from 'react';

const SingleMeal = (props) => {
  const {strMealThumb, strMeal, strArea, strCategory} = props.meal
  return (
    <div className='p-10 rounded-2xl shadow-slate-600 shadow-inner'>
      <img className='' src={strMealThumb} alt="" />
      <h3 className='text-2xl font-bold'>Name: <span className='text-gray-500'>{strMeal}</span></h3>
      <h3 className='text-2xl font-bold'>Category: <span className='text-gray-500'>{strCategory}</span></h3>
      <h2 className='text-2xl font-bold'>Area: <span className='text-gray-500'>{strArea}</span></h2>
    </div>
  );
};

export default SingleMeal;