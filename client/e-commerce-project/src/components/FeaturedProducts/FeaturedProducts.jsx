import React from 'react'
import './FeaturedProducts.scss'
import Card from '../Card/Card'

const FeaturedProducts = ({type}) => {
  const data = [
    {
      id: 1,
      img: 'https://img.freepik.com/free-photo/wonderful-young-woman-with-happy-smile-posing-bright-purple-background_197531-7087.jpg?w=996&t=st=1695657003~exp=1695657603~hmac=30147bdf26b3d3046cf67d4c6fd4c79092d374c058f49e68141c8b1c8d88efcd',
      img2: 'https://img.freepik.com/free-photo/shapely-dark-haired-girl-purple-fur-coat-having-fun-studio_197531-7110.jpg?w=1380&t=st=1695655972~exp=1695656572~hmac=bef9bc035b17ca201b3b6aa817d9a149af04ff73fbadb6dc037550b0522cac13',
      title: 'Purple fur coat',
      isNew: true,
      oldPrice: 95,
      price: 70
    },
    {
      id: 2,
      img: 'https://img.freepik.com/free-photo/young-woman-dressed-summer-outfit-out-city_1303-15913.jpg?w=996&t=st=1695657049~exp=1695657649~hmac=a72ce2f80b1bf495cd2ad7fa8c8f043f738bc89004fea1096b50ee323959e8e4',
      img2: 'https://img.freepik.com/free-photo/young-woman-dressed-summer-outfit-out-city_1303-15912.jpg?t=st=1695655892~exp=1695656492~hmac=80d9acc618391686f1934151737e2082da37b27dd804bb3854a79ae685407939',
      title: 'White Shirt',
      isNew: true,
      oldPrice: 45,
      price: 30
    },
    {
      id: 3,
      img: 'https://img.freepik.com/free-photo/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress_197531-9980.jpg?w=1380&t=st=1695656208~exp=1695656808~hmac=5b42595c8b47fee659305fcd04d68ca958585f4ac50096b26a4f7e0765aad5cd',
      img2: 'https://img.freepik.com/free-photo/young-girl-with-brown-eyes-poses-with-suitcase-brunette-striped-midi-dress-laughs_197531-9986.jpg?w=1380&t=st=1695656222~exp=1695656822~hmac=abee7c6a68874945f786d5ee75ced320c2f67bd078f0f05753a201d7fd09ae8f',
      title: 'Pink Dress',
      isNew: false,
      oldPrice: 58,
      price: 32
    },
    {
      id: 4,
      img: 'https://img.freepik.com/free-photo/full-length-portrait-romantic-beautiful-lady-orange-skirt-stylish-carefree-girl-jumping-yellow_197531-11066.jpg?w=1380&t=st=1695656286~exp=1695656886~hmac=c6d0d46b12301abd3c874ee2005330f37853670813b2e0b06108d5d8ee7a006c',
      img2: 'https://img.freepik.com/free-photo/full-length-portrait-amazing-girl-bright-summer-outfit-blithesome-brunette-woman-posing-yellow-with-surprised-smile_197531-11061.jpg?w=1380&t=st=1695656297~exp=1695656897~hmac=6b08aeeeb01774a54940695eb2a4f5c922b6e5704f126674ef6bc01eb88e1ab3',
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
