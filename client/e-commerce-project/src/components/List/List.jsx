import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'
import Products from '../../pages/Products/Products'

const List = ({ subCats, maxPrice, sort, catId }) => {
  const subCatFilters = subCats.map(item => `&[filters][sub_categories][id][$in]=${item}`).join('');

  const sortParam = `sort=price:${sort}`;

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatFilters}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className='list'>
      {loading
        ? 'Loading...'
        : data
        ? data.map(item => <Card item={item} key={item.id} />)
        : 'No products found'}
    </div>
  );
}

export default List;



