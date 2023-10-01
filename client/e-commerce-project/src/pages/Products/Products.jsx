import { useState } from 'react'
import './Products.scss'
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'

const Products = () => {
  const catId = parseInt(useParams().id)
  const [maxPrice, setMaxPrice] = useState(500)
  const [sort, setSort] = useState(null)

  const [selectetdSubCats, setSelectetdSubCats] = useState([])

  const { data, loading, error } = useFetch(
    `/sub-categories?[filters][categories][id][$eqi]=${catId}`
  )
  const handleChange = e => {
    const value = e.target.value
    const isChecked = e.target.checked
  
    setSelectetdSubCats(
      isChecked
        ? [...selectetdSubCats, value]
        : selectetdSubCats.filter(item => item !== value)
    )
  }
  

  console.log(selectetdSubCats);
  
  return (
    <div className='products'>
      <div className='left'>
        <div className='filterItem filter1'>
          <h2>Product Categories</h2>
          {data?.map(item => (
            <div className='inputItem' key={item.id} onChange={handleChange}>
              <input type='checkbox' id={item.id} value={item.id}></input>
              <label htmlFor={item.id}>{item.attributes.title}</label>
            </div>
          ))}
        </div>

        <div className='filterItem filter2'>
          <h2>Filter by price</h2>
          <div className='inputItem'>
            <span>0</span>
            <input
              type='range'
              className='range'
              min={0}
              max={300}
              onChange={e => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className='filterItem filter3'>
          <h2>Sort by </h2>
          <div className='inputItem'>
            <input
              type='radio'
              id='asc'
              value='asc'
              name='price'
              onChange={e => setSort('asc')}
            />
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className='inputItem'>
            <input
              type='radio'
              id='desc'
              value='desc'
              name='price'
              onChange={e => setSort('desc')}
            />
            <label htmlFor='asc'>Price (Hightest first)</label>
          </div>
        </div>
      </div>
      <div className='right'>
        <img
          className='catImage'
          src='../img/concept-search-young-stylish-girl-detective-clothing-looking-through-magnifying-glass-big-eye.jpg'
          alt=''
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectetdSubCats} />
      </div>
    </div>
  )
}

export default Products
