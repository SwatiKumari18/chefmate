import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
import HeroCard from '../components/HeroCard';
import { searchRecipes } from '../api/spoonacular';

const PAGE_SIZE = 12;

const Home = () => {
  const [query, setQuery] = useState('');
  const [dietFilter, setDietFilter] = useState('all');
  const [page, setPage] = useState(1);
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async () => {
    setLoading(true);
    const { recipes, total } = await searchRecipes(
      query || 'pasta',
      dietFilter,
      page,
      PAGE_SIZE
    );
    setRecipes(recipes);
    setTotal(total);
    setLoading(false);
  };

  useEffect(() => {
    fetchRecipes();
  }, [query, dietFilter, page]);

  useEffect(() => {
    setPage(1);
  }, [query, dietFilter]);

  return (
    <div>
      <Header />
      <div className="p-4 max-w-6xl mx-auto">
        <SearchBar onSearch={setQuery} />
        <FilterPanel dietFilter={dietFilter} onChange={setDietFilter} />

        {loading && <LoadingSpinner />}

        {!loading && recipes.length > 0 && (
          <>
            <HeroCard recipe={recipes[0]} />

            <h2 className="text-2xl font-semibold mt-6 mb-4">
              Latest Recipes
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recipes.slice(1).map((recipe) => (
                <RecipeCard key={recipe.id} recipe={recipe} />
              ))}
            </div>

            <Pagination
              page={page}
              total={total}
              pageSize={PAGE_SIZE}
              onPageChange={setPage}
            />
          </>
        )}

        {!loading && recipes.length === 0 && (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}

        {/* Newsletter Banner */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center my-12">
          <h3 className="text-xl font-semibold mb-2">
            Subscribe for new recipes!
          </h3>
          <input
            type="email"
            placeholder="Your email"
            className="border px-4 py-2 rounded-l-md w-64"
          />
          <button className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-r-md hover:bg-gray">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
