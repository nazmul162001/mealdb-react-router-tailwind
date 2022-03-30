import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetails = () => {
  const {mealId} = useParams()

  const [details, setDetails] = useState({})
  // console.log(details);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(res => res.json())
    .then(data => setDetails(data.meals[0]))
  },[mealId])

  return (
    <div className='text-center'>
      <h2 className='text-5xl text-center py-5'>Food Id: {mealId} </h2>

          <img className='w-[400px] mx-auto rounded-2xl' src= {details.strMealThumb} alt="" />
        <h2 className='text-2xl font-mono font-bold'> Name: <span className='text-indigo-500'>{details.strMeal}</span> </h2>

        <h2 className='text-2xl font-mono font-bold'> Area: <span className='text-indigo-500'>{details.strArea}</span> </h2>

        <h2 className='text-2xl font-mono font-bold'> Category: <span className='text-indigo-500'>{details.strCategory}</span> </h2>

        <h2 className='text-2xl font-mono font-bold'> Ingredient: <span className='text-indigo-500'>{details.strIngredient1}, {details.strIngredient2},{details.strIngredient3},{details.strIngredient4},{details.strIngredient5},{details.strIngredient6},{details.strIngredient7},{details.strIngredient8}</span> </h2>

        <h2 className='text-2xl font-bold pt-5'> Description: <span className='text-gray-500 font-normal text-xl'>{details.strInstructions}</span> </h2>
    </div>
  );
};

export default MealDetails;