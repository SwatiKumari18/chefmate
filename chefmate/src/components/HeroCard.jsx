import React from 'react';
import { Link } from 'react-router-dom';

const HeroCard = ({ recipe }) => (
  <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-xl mb-6">
    <img
      src={recipe.image}
      alt={recipe.title}
      onError={() => setShow(false)}
      className="w-full h-full object-cover brightness-90"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    <div className="absolute bottom-4 left-6 text-white max-w-lg">
      <h1 className="text-3xl font-bold">{recipe.title}</h1>
      <Link
        to={`/recipe/${recipe.id}`}
        className="inline-block mt-2 px-4 py-2 bg-black hover:bg-gray-800 rounded"
      >
        View Recipe →
      </Link>
    </div>
  </div>
);

export default HeroCard;
