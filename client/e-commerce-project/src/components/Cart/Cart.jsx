import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector';
function Cart () {
  const products = useSelector(state=>state.cart.products)
  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {products?.map(item => (
        <div className='item' key={item.id}>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h3>{item.title}</h3>
            <p>{item.desc.substring(0,100)}</p>
            <div className="price">
                1 x {item.price}
            </div>
          </div>
          <DeleteIcon className='delete'/>
        </div>
      ))}
     <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
     </div>
     <button>PROCEED TO CHECKOUT</button>
     <span className='reset'>Reset Cart</span>
    </div>
  )
}

export default Cart
