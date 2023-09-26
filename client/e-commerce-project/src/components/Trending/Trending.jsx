import React from 'react'

function Trending() {
    const data = [
        {
          id: 1,
          img: './img/full-shot-man-posing-with-different-clothes-collage.jpg',
          img2: './img/full-shot-man-posing-with-different-clothes-collage (1).jpg',
          title: 'Purple fur coat',
          isNew: true,
          oldPrice: 95,
          price: 70
        },
        {
          id: 2,
          img: './img/full-shot-woman-posing-with-different-clothes-collage (1).jpg.client',
          img2: './img/young-woman-dressed-summer-outfit-out-city.jpg',
          title: 'White Shirt',
          isNew: true,
          oldPrice: 45,
          price: 30
        },
        {
          id: 3,
          img: './img/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress.jpg',
          img2: './img/girl-with-dimples-her-cheeks-good-mood-is-laughing-posing-portrait.jpg',
          title: 'Pink Dress',
          isNew: false,
          oldPrice: 58,
          price: 32
        },
        {
          id: 4,
          img: './img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
          img2: './img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
          title: 'Orange Skirt',
          isNew: false,
          oldPrice: 78,
          price: 50
        }
      ]
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
                <Card item={item} key={item.id}/>
            ))}
          </div>
        </div>
      )
    }
    
    export default FeaturedProducts
}

export default Trending