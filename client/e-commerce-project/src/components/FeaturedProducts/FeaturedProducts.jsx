import './FeaturedProducts.scss'
import Card from '../Card/Card'
import { useEffect, useState } from 'react'
import axios from 'axios'

const FeaturedProducts = ({ type }) => {
  

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
   
      try {
        const res= await axios.get(import.meta.env.VITE_APP_API_URL + '/products?populate=*', {
          headers: { Authorization: 'bearer ' + import.meta.env.VITE_APP_API_TOKEN }
        })
        setData(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, [])
  console.log(data);

  return (
    <div className='featuredProducts'>
      <div className='top'>
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet.
        </p>
      </div>
      <div className='bottom'>
        {data.map(item => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default FeaturedProducts
