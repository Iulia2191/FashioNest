import DeleteIcon from '@mui/icons-material/Delete'
import './Cart.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { removeItem, resetCart } from '../../redux/cartReducer'
import { useDispatch } from 'react-redux'



function Cart () {
  const products = useSelector(state => state.cart.products)
  const totalPrice = () => {
    let total = 0
    products.forEach(item => {
      total += item.quantity * item.price
   
    })
    return total.toFixed(2)
  }
  const dispatch = useDispatch();

  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {products?.map(item => (
        <div className='item' key={item.id}>
          <img src={import.meta.env.VITE_APP_UPLOAD_URL + item.img} alt='' />
          <div className='details'>
            <h3>{item.title}</h3>
            <p>{item.desc.substring(0, 100)}</p>
            <div className='price'>
              {item.quantity} x {item.price}
            </div>
          </div>
          <DeleteIcon className='delete'  onClick={() => dispatch(removeItem(item.id))} />
        </div>
      ))}
      <div className='total'>
        <span>SUBTOTAL</span>
        <span>$ {totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className='reset' onClick={() => dispatch(resetCart())}>Reset Cart</span>
    </div>
  )
}

export default Cart
