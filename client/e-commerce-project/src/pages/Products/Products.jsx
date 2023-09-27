import { useState } from 'react'
import "./Products.scss"
import List from '../../components/List/List'
import { useParams } from 'react-router-dom'

const Products = () => {

const catId = parseInt(useParams().id)
const [maxPrice, setMaxPrice] = useState(1000)
const [sort, setSort] = useState(null)

  return (
    <div className='products'>
      <div className="left">
        <div className="filterItem filter1">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1}></input>
            <label htmlFor='1'>Shoes</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2}></input>
            <label htmlFor='1'>Tops</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3}></input>
            <label htmlFor='1'>Skirts</label>
          </div>
        </div>
        <div className="filterItem filter2">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input type='range'className='range' min={0} max={1000} onChange={(e) => setMaxPrice(e.target.value)}/>
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem filter3">
          <h2>Sort by </h2>
          <div className="inputItem">
            <input type='radio' id='asc' value="asc" name='price'  onChange={e => setSort("asc")}/>
            <label htmlFor='asc'>Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input type='radio' id='desc' value="desc" name='price' onChange={e => setSort("desc")}/>
            <label htmlFor='asc'>Price (Hightest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img className='catImage' src='../img/concept-search-young-stylish-girl-detective-clothing-looking-through-magnifying-glass-big-eye.jpg' alt=''/>
      <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}

export default Products