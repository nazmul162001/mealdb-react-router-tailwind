import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Meals = () => {
  const [meals, setMeals] = useState([])
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    .then(res => res.json())
    .then(data => setMeals(data.meals))
  },[])
  return (
    <div>
      <h2 className='text-3xl text-center'>My Total Meals:  {meals.length} </h2>
      <div className="meals-card grid grid-cols-1 md:grid-cols-3 gap-10 p-8">
        {
          meals.map(meal => <SingleMeal
          key={meal.idmeal}
          meal = {meal}
          ></SingleMeal>)
        }
      </div>
    </div>
  );
};

export default Meals;