import './Card.scss'
import { Link } from 'react-router-dom'

const Card = ({ item }) => {
  return (
    <Link className='link' to={`/product/${item.id}`}>
      <div className='card'>
        <div className='image'>
        {item && item.attributes && item.attributes.isNew && <span>New Season</span>}


          <img src={item.img} alt='' className='mainImg' />
          <img src={item.img2} alt='' className='secondImg' />
        </div>
        <h2>{item && item.attributes && item.attributes.title}</h2>

        <div className='prices'>
         <h3 className='old'>${item.oldPrice ||item && item.attributes && item.attributes.price + 20}</h3>
         <h3 >${item && item.attributes && item.attributes.price}</h3>
            
      
          
        </div>
      </div>
    </Link>
  )
}

export default Card
