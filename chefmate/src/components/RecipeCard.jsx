import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import ServingSizeInput from './ServingSizeInput';

const RecipeCard = ({ recipe }) => {
  const [servings, setServings] = useState(recipe.servings);
  const factor = useMemo(
    () => servings / recipe.servings,
    [servings, recipe.servings]
  );

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-sm mx-auto flex flex-col">
      <Link to={`/recipe/${recipe.id}`}>
        <div className="h-48 w-full overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>

      <div className="flex-grow p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold mb-1">
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h2>
          <p className="text-sm text-gray-600">Diet: {recipe.diet}</p>
          <p className="text-sm text-gray-600">Time: {recipe.cookTime}</p>

          <div className="mt-2">
            <ServingSizeInput servings={servings} onChange={setServings} />
          </div>

          {/* <div className="mt-3">
            <h3 className="font-semibold">Ingredients</h3>
            <ul className="list-disc list-inside text-sm">
              {recipe.ingredients.map((ing, idx) => (
                <li key={idx}>
                  {ing.name}: {(ing.quantity * factor).toFixed(2)} {ing.unit}
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
