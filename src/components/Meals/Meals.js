import React, { useEffect, useState } from 'react';
import NotFound from '../NotFound/NotFound';
import SingleMeal from '../SingleMeal/SingleMeal';
import Spinner from '../Spinner/Spinner';

const Meals = ({searchText}) => {
  // console.log(searchText);
  const [meals, setMeals] = useState([])
  // state for spinner 
  const [loading, setLoading] = useState(false)
  
  useEffect(() => {
    setLoading(true)
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
    .then(res => res.json())
    .then(data => setMeals(data.meals))
    setLoading(false)
  },[searchText])

  return (
      <>
      {loading ? (
        <Spinner />
        ) :  (   <div>
      <h2 className='text-3xl text-center'>My Total Meals:  {meals ? meals.length : 0} </h2>
      <div className={meals ? "grid grid-cols-1 md:grid-cols-3 gap-10 p-8" : "w-full h-screen"}>
        {
          meals ? 
          meals.map(meal =>  <SingleMeal
            key={meal.idMeal}
            meal = {meal}
            ></SingleMeal>)
            : <NotFound></NotFound>
        }
      </div>
    </div> )}
      </>
  );
};

export default Meals;