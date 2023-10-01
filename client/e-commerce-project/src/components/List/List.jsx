import React from 'react'
import './List.scss'
import Card from '../Card/Card'
import useFetch from '../../hooks/useFetch'

const List = ({ subCats, maxPrice, sort, catId }) => {
 
  const subCatsQuery = subCats
    .map(item => `&[filters][sub_categories][id][$eqi]=${item}`)
    .join('')

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${subCatsQuery}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  )

  return (
    <div className='list'>
      {loading
        ? 'Loading...'
        : data
        ? data.map(item => <Card item={item} key={item.id} />)
        : 'No products found'}
    </div>
  )
}

export default List
