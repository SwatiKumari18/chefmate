import React, { useState } from 'react';
import { Search } from 'lucide-react';          // ► run: npm i lucide-react

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-md mx-auto">
      <input
        type="text"
        placeholder="Search recipes…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="flex-grow px-3 py-2 border rounded-l-md focus:outline-none"
      />
      <button
        type="submit"
        className="bg-green-600 px-4 py-2 text-white rounded-r-md hover:bg-green-700 flex items-center"
      >
        <Search size={18} className="mr-1" />
        Search
      </button>
    </form>
  );
};

export default SearchBar;
