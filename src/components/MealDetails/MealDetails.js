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
    <div className='text-center bg-gradient-to-r from-gray-500 via-green-500 to-gray-500'>
      <h2 className='text-3xl text-center py-5 text-violet-600 font-bold'>Food Id: {mealId} </h2>

          <img className='w-[600px] h-[350px] mx-auto rounded-2xl' src= {details.strMealThumb} alt="" />
        <h2 className='text-2xl font-mono '> Name: <span className='text-gray-700'>{details.strMeal}</span> </h2>

        <h2 className='text-2xl font-mono'> Area: <span className='text-gray-700'>{details.strArea}</span> </h2>

        <h2 className='text-2xl font-mono'> Category: <span className='text-gray-700'>{details.strCategory}</span> </h2>

        <h2 className='text-2xl font-mono'> Ingredient: <span className='text-gray-700'>{details.strIngredient1}, {details.strIngredient2},{details.strIngredient3},{details.strIngredient4},{details.strIngredient5},{details.strIngredient6},{details.strIngredient7},{details.strIngredient8}</span> </h2>

        <h2 className='text-2xl py-5'> Description: <span className='text-gray-300 font-normal text-xl'>{details.strInstructions}</span> </h2>
    </div>
  );
};

export default MealDetails;