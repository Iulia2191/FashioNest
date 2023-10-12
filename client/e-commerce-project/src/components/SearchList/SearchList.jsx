
import React, { useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Card from '../Card/Card';
import './SearchList'

const SearchList = ({ subCats, maxPrice, sort, catId, searchTerm }) => {
  const subCatFilters = subCats.map((item) => `&[filters][sub_categories][id][$in]=${item}`).join('');
  const sortParam = `sort=price:${sort}`;
  const searchFilter = searchTerm ? `&[filters][title][$contains]=${searchTerm}` : '';

  const apiUrl = `/products?populate=*&[filters][categories][id]=${catId}${subCatFilters}&[filters][price][$lte]=${maxPrice}${searchFilter}&${sortParam}`;

  const { data, loading, error } = useFetch(apiUrl);

  return (
    <div className='list'>
      {loading ? 'Loading...' : data ? data.map((item) => <Card item={item} key={item.id} />) : 'No products found'}
    </div>
  );
};

export default SearchList;
