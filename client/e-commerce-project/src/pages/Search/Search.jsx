// Search.js
import React, { useState, useEffect } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchList from '../../components/SearchList/SearchList';
import './Search.scss'

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const subCats = [];
  const maxPrice = 1000;
  const sort = 'asc';

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="search">
		<div className='image'>
			<img src="../img/concept-search-young-stylish-girl-detective-clothing-looking-through-magnifying-glass-big-eye.jpg" alt="" />
		</div>
		<div className='searchBar'>
      <SearchBar onSearch={handleSearch} />
	  </div>
	  <div className='lists'>
		<h2>Women Category</h2>
      <SearchList subCats={subCats} maxPrice={maxPrice} sort={sort} catId={1} searchTerm={searchTerm} />
      <h2>Men Category</h2>
	  <SearchList subCats={subCats} maxPrice={maxPrice} sort={sort} catId={2} searchTerm={searchTerm} />
      <h2>Children Category</h2>
	  <SearchList subCats={subCats} maxPrice={maxPrice} sort={sort} catId={3} searchTerm={searchTerm} />
      <h2>Accessories</h2>
	  <SearchList subCats={subCats} maxPrice={maxPrice} sort={sort} catId={4} searchTerm={searchTerm} />
    </div>
	</div>
  );
};

export default Search;
