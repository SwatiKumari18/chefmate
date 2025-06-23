import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import RecipeCard from '../components/RecipeCard';
import SearchBar from '../components/SearchBar';
import FilterPanel from '../components/FilterPanel';
import LoadingSpinner from '../components/LoadingSpinner';
import Pagination from '../components/Pagination';
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, dietFilter, page]);

  // Reset to page 1 whenever filters/search change
  useEffect(() => {
    setPage(1);
  }, [query, dietFilter]);

  return (
    <div>
      <Header />
      <div className="p-4 space-y-4">
        <SearchBar onSearch={setQuery} />
        <FilterPanel dietFilter={dietFilter} onChange={setDietFilter} />

        {loading && <LoadingSpinner />}

        {!loading && recipes.length === 0 && (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {recipes.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ))}
</div>


        {/* Pagination */}
        {!loading && (
          <Pagination
            page={page}
            total={total}
            pageSize={PAGE_SIZE}
            onPageChange={setPage}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
