import DeleteIcon from '@mui/icons-material/Delete';
import './Cart.scss'
function Cart () {
  const data = [
    {
      id: 1,
      img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
      title: 'Orange Skirt',
      desc: 'Orange Skirt',
      isNew: false,
      oldPrice: 78,
      price: 50
    },
    {
      id: 2,
      img: '../img/wonderful-young-woman-with-happy-smile-posing-bright-purple-background.jpg',
      title: 'Purple fur coat',
      desc: 'Purple fur coat',
      isNew: true,
      oldPrice: 95,
      price: 70
    }
  ]
  return (
    <div className='cart'>
      <h2>Products in your cart</h2>
      {data?.map(item => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
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
