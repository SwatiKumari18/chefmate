import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import LoadingSpinner from '../components/LoadingSpinner';
import { getRecipeById } from '../api/spoonacular';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const data = await getRecipeById(id);
      setRecipe(data);
      setLoading(false);
    };
    fetchDetail();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (!recipe) return <p className="text-center mt-6">Recipe not found.</p>;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <Link to="/" className="text-green-600 text-xl hover:underline">
        ← Back to search
      </Link>

      <h1 className="text-3xl font-bold mt-4">{recipe.title}</h1>
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full rounded mt-4"
      />

      <p className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: recipe.summary }} />

      <h2 className="text-xl font-semibold mt-6">Ingredients</h2>
      <ul className="list-disc list-inside">
        {recipe.ingredients.map((ing, i) => (
          <li key={i}>
            {ing.name}: {ing.quantity} {ing.unit}
          </li>
        ))}
      </ul>

      <h2 className="text-xl font-semibold mt-6">Steps</h2>
      <ol className="list-decimal list-inside space-y-1">
        {recipe.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetail;
