import { useState, useEffect } from 'react'
import SearchIcon from '@mui/icons-material/Search'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import MenuIcon from '@mui/icons-material/Menu'
import { Link } from 'react-router-dom'
import Cart from '../Cart/Cart'
import './Navbar.scss'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Navbar = () => {
  const [openCart, setOpenCart] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const products = useSelector(state => state.cart.products)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }
  useEffect(() => {
    if (menuOpen) {
      const closeMenuOnOutsideClick = (e) => {
        if (!e.target.closest('.navbar')) {
          
          setMenuOpen(false);
        }
      };

      document.addEventListener('click', closeMenuOnOutsideClick);
      return () => {
        document.removeEventListener('click', closeMenuOnOutsideClick);
      };
    }
  }, [menuOpen]);
  return (
    <div className={`navbar ${menuOpen ? 'menu-open' : ''}`}>
      <div className='menu-icon' onClick={toggleMenu}>
        <MenuIcon />
      </div>

      <div className='center'>
        <Link className='link' to='/'>
          FashioNest
        </Link>
      </div>
      <div className={`right ${menuOpen ? 'menu-open' : ''}`}>
        <div className='icons'>
          <div className='icon'>
            <SearchIcon />
          </div>
          <div className='icon'>
            <PersonOutlineIcon />
          </div>
          <Link className='link' to='/favorite'>
            <div className='icon'>
              <FavoriteBorderIcon />
            </div>
          </Link>
          <div className='cartIcon' onClick={() => setOpenCart(!openCart)}>
            <ShoppingCartIcon />
            <span>{products.length}</span>
          </div>
        </div>
      </div>
      <div className={`menu-items ${menuOpen ? 'menu-open' : ''}`}>
        <div className='left'>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Women
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/2'>
              Men
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Children
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/products/1'>
              Accessories
            </Link>
          </div>
        </div>
        <div className='right'>
          <div className='item'>
            <Link className='link' to='/'>
              Home
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              About
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Contact
            </Link>
          </div>
          <div className='item'>
            <Link className='link' to='/'>
              Stores
            </Link>
          </div>
        </div>
      </div>
       {menuOpen && (
        <div
          className='background'
          onClick={toggleMenu}
        ></div>
      )}
      {openCart && <Cart />}
    </div>
  )
}

export default Navbar
