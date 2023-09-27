import { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Product = () => {
  const [selectImg, setSelectImg] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const images = [
    'https://images.pexels.com/photos/17433865/pexels-photo-17433865/free-photo-of-young-woman-in-a-red-dress-and-a-hat-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/17433863/pexels-photo-17433863/free-photo-of-young-woman-in-a-red-dress-and-a-hat-posing-in-studio.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
  ]

  return (
    <div className='product'>
      <div className='left'>
        <div className='images'>
          <img src={images[0]} alt='' onClick={() => setSelectImg(0)} />
          <img src={images[1]} alt='' onClick={() => setSelectImg(1)} />
        </div>
        <div className='mainImg'>
          <img src={images[selectImg]} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>Long Red Dress</h1>
        <span className='price'>$189</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat ut
          quod ipsam delectus dolorem cupiditate tempora nobis qui voluptas
          dolores? Error animi perferendis exercitationem magnam nostrum illo
          voluptates, blanditiis rem.
        </p>
        <div className='quantity'>
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev -1))}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon />ADD TO CART
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon/>ADD TO FAVORITES
          </div>
          <div className="item">
            <BalanceIcon/>ADD TO COMPARE
          </div>
        </div>
        <div className="info">
          <span>Vendor: Jane</span>
          <span>Product type: Dress</span>
          <span>Tag: Dress, Women</span>
        </div>
        <hr/>
        <div className="details">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFO</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product
