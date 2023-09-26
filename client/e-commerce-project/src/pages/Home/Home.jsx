
import Slider from '../../components/Slider/Slider'
import "./Home.scss"
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'
import Trending from '../../components/Trending/Trending'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <Trending />
      <Categories/>
      <FeaturedProducts type="Featured" />
      <Contact/>
    </div>
  )
}

export default Home
