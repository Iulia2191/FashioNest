import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

function Categories () {
  return (
    <div className='categories'>
      <div className='col'>
        <div className='row'>
          <img
            src='./img/women.jpg'
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
            src='./img/kids-having-fun-with-colorful-shapes.jpg'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/3'}>
              Children
            </Link>
          </button>
        </div>
      </div>
      <div className='col'>
        <div className='row'>
          <img
            src='./img/shoes.jpg'
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
                src='./img/shoes-cat.jpg'
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
                src='./img/accessories.jpg'
                alt=''
              />
              <button>
                <Link className='link' to={'/products/4'}>
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className='row'>
          <img
            src='./img/men-cat1.jpg'
            alt=''
          />
          <button>
            <Link className='link' to={'/products/2'}>
              Men
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Categories
