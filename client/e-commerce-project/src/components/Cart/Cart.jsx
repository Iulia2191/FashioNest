import DeleteIcon from '@mui/icons-material/Delete';
function Cart () {
  const data = [
    {
      id: 1,
      img: './img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
      img2: './img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
      title: 'Orange Skirt',
      desc: 'Orange Skirt',
      isNew: false,
      oldPrice: 78,
      price: 50
    },
    {
      id: 2,
      img: './img/wonderful-young-woman-with-happy-smile-posing-bright-purple-background.jpg',
      img2: './img/romantic-girl-stylish-purple-outfit-posing-with-shy-smile-studio.jpg',
      title: 'Purple fur coat',
      desc: 'Purple fur coat',
      isNew: true,
      oldPrice: 95,
      price: 70
    }
  ]
  return (
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map(item => (
        <div className='item' key={item.id}>
          <img src={item.img} alt='' />
          <div className='details'>
            <h1>{item.title}</h1>
            <p>{item.desc.subString(0,100)}</p>
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
