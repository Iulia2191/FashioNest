import React from 'react';
import './Product.scss';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BalanceIcon from '@mui/icons-material/Balance';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import useFetch from '../../hooks/useFetch';
import { useParams } from 'react-router-dom';

const Product = () => {
  const id = useParams().id;
  const [selectImg, setSelectImg] = React.useState("img");
  const [quantity, setQuantity] = React.useState(1);

  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  if (loading) {
    return "Loading...";
  }

  if (error || !data || !data.attributes) {
    return "Error loading product details.";
  }

  const product = data.attributes;

  return (
    <div className='product'>
      {loading ? "Loading..." :(<><div className='left'>
        <div className='images'>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL +data.attributes?.img?.data?.attributes?.url} alt='' onClick={() => setSelectImg("img")} />
          <img src={import.meta.env.VITE_APP_UPLOAD_URL +data.attributes?.img2?.data?.attributes?.url} alt='' onClick={() => setSelectImg("img2")} />
        </div>
        <div className='mainImg'>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL +data.attributes[selectImg].data?.attributes?.url} alt='' />
        </div>
      </div>
      <div className='right'>
        <h1>{data.attributes?.title}</h1>
        <span className='price'>$ {data.attributes?.price}</span>
        <p>
        {data.attributes?.desc}
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
        <div className="info">
          <span>DESCRIPTION</span>
          <hr/>
          <span>ADDITIONAL INFO</span>
          <hr/>
          <span>FAQ</span>
        </div>
      </div></>)}
    </div>
  )
}

export default Product
