import React from 'react';
import './Favorite.scss';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFavorite, resetFavorite } from '../../redux/favoriteReducer';
import { useParams } from 'react-router-dom';
import { addToCart, removeItem } from '../../redux/cartReducer';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import useFetch from '../../hooks/useFetch';

function Favorite() {
  const id = useParams().id;
  const { data, loading, error } = useFetch(`/products/${id}?populate=*`);

  const products = useSelector((state) => state.favorite.products) || [];
  const dispatch = useDispatch();

  return (
    <div className='favorite'>
      <h2>Favorite Products</h2>
      <div className='wrapper'>
        {products.length === 0 ? ( 
            
          <p>You do not have favorite products.</p>
        ) : (
          products.map((item) => (
            <div className='item' key={item.id}>
              <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt='' />
              <div className='details'>
                <h3>{item.title}</h3>
                <div className='price'>$ {item.price}</div>
              </div>
              <button
                className='add'
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      desc: item.desc,
                      price: item.price,
                      img: item.img,
                      quantity: 1,
                    })
                  )
                }
              >
                <AddShoppingCartIcon /> ADD TO CART
              </button>

              <button
                className='delete'
                onClick={() => dispatch(removeItemFavorite(item.id))}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
      <span className='reset' onClick={() => dispatch(resetFavorite())}>
        Reset Favorites
      </span>
    </div>
  );
}

export default Favorite;
