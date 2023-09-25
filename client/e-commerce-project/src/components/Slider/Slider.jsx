import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import "./Slider.scss"
const Slider = () => {

  const data = [
    "./img/model-wears-beige-trench-coat-from-brand-new-collection.jpg",
    "./img/fashion-portrait-young-elegant-woman.jpg",
    "./img/cute-young-girl-with-dark-wavy-hairstyle-bright-makeup-silk-dress-black-jacket-holding-sunglasses-hands-looking-away-against-beige-building-wall.jpg",
    
  ]  
  return (
    <div className='slider'>
        <div className="container">
            <img src={data[0]} alt="Close-up of a lady"/>
            <img src={data[1]} alt="Curly woman in beret with pink sweater, sunglasses, and green skirt holding a grey handbag"/>
            <img src={data[2]} alt="Woman in black trousers and purple blouse laughing while leaning on a stand with elegant clothes on a pink background"/>
        </div>
        <div className="icons">
            <div className="icon">
                <ArrowBackIcon />
            </div>
            <div className="icon">
                <ArrowForwardIcon/>
            </div>
        </div>
    </div>
  )
}

export default Slider