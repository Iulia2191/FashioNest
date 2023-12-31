
import "./footer.scss"

const Footer = () => {
  return (
    <div className='footer'>
      <div className='top'>
        <div className='item item1'>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className='item item1'>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className='item item2'>
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </span>
        </div>
        <div className='item item2'>
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum.
          </span>
        </div>
      </div>
      <div className='bottom'>
        <div className="left">
            <span className="logo">FashioNest</span>
            <span className="copyright">
            © Copyright 2023. All Rights Reserved
            </span>
        </div>
        <div className="right">
            <img src='/img/payment.png' alt='Payment methods'/>
        </div>
      </div>
    </div>
 
  )
}

export default Footer
