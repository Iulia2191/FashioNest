import React from 'react'
import Card from '../Card/Card'

function Trending() {
    const data = [
        {
          id: 1,
          img: './img/full-shot-man-posing-with-different-clothes-collage.jpg',
          img2: './img/full-shot-man-posing-with-different-clothes-collage (1).jpg',
          title: 'Men collection',
          
          
        },
        {
          id: 2,
          img: './img/full-shot-woman-posing-with-different-clothes-collage (1).jpg',
          img2: './img/full-shot-woman-posing-with-different-clothes-collage (2).jpg',
          title: 'Pants collection',
          
        },
        {
          id: 3,
          img: './img/full-shot-woman-posing-with-different-clothes-collage (5).jpg',
          img2: './img/full-shot-woman-posing-with-different-clothes-collage.jpg',
          title: 'Women collection',
         
         
        },
        {
          id: 4,
          img:"./img/full-shot-woman-posing-with-different-clothes-collage (3).jpg",
          img2: './img/full-shot-woman-posing-with-different-clothes-collage (4).jpg',
          title: 'Tops collection',
         
         
        }
      ]
      return (
        <div className='featuredProducts'>
          <div className='top'>
            <h1>Popular Categories</h1>
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
                <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
      )
    }
  

export default Trending