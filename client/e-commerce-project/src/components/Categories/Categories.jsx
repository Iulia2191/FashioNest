import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

function Categories () {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/1'}>
              Women
            </Link>
          </button>
        </div>
        <div className='row'>
          {' '}
          <img
            src='https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/1'}>
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/1'}>
              Shoes
            </Link>
          </button>
        </div>
      </div>

      <div className='col col-l'>
        <div className='row'>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link className='link' to={'/products/1'}>
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className='col'>
            <div className='row'>
              <img
                src='https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
              />
              <button>
                <Link className='link' to={'/products/1'}>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='https://images.pexels.com/photos/837140/pexels-photo-837140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/1'}>
              Men
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
