import React from 'react'
import "./List.scss"
import Card from '../Card/Card' 

function List() {
    const data = [
        {
            id: 1,
            img: '../img/wonderful-young-woman-with-happy-smile-posing-bright-purple-background.jpg',
            img2: '../img/romantic-girl-stylish-purple-outfit-posing-with-shy-smile-studio.jpg',
            title: 'Purple fur coat',
            isNew: true,
            oldPrice: 95,
            price: 70
          },
          {
            id: 2,
            img: '../img/young-woman-dressed-summer-outfit-out-city (1).jpg',
            img2: '../img/young-woman-dressed-summer-outfit-out-city.jpg',
            title: 'White Shirt',
            isNew: true,
            oldPrice: 45,
            price: 30
          },
          {
            id: 3,
            img: '../img/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress.jpg',
            img2: '../img/girl-with-dimples-her-cheeks-good-mood-is-laughing-posing-portrait.jpg',
            title: 'Pink Dress',
            isNew: false,
            oldPrice: 58,
            price: 32
          },
          {
            id: 4,
            img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
            img2: '../img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
            title: 'Orange Skirt',
            isNew: false,
            oldPrice: 78,
            price: 50
          },
          {
            id: 5,
            img: '../img/wonderful-young-woman-with-happy-smile-posing-bright-purple-background.jpg',
            img2: '../img/romantic-girl-stylish-purple-outfit-posing-with-shy-smile-studio.jpg',
            title: 'Purple fur coat',
            isNew: true,
            oldPrice: 95,
            price: 70
          },
          {
            id: 6,
            img: '../img/young-woman-dressed-summer-outfit-out-city (1).jpg',
            img2: '../img/young-woman-dressed-summer-outfit-out-city.jpg',
            title: 'White Shirt',
            isNew: true,
            oldPrice: 45,
            price: 30
          },
          {
            id: 7,
            img: '../img/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress.jpg',
            img2: '../img/girl-with-dimples-her-cheeks-good-mood-is-laughing-posing-portrait.jpg',
            title: 'Pink Dress',
            isNew: false,
            oldPrice: 58,
            price: 32
          },
          {
            id: 8,
            img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
            img2: '../img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
            title: 'Orange Skirt',
            isNew: false,
            oldPrice: 78,
            price: 50
          },
          {
            id: 9,
            img: '../img/wonderful-young-woman-with-happy-smile-posing-bright-purple-background.jpg',
            img2: '../img/romantic-girl-stylish-purple-outfit-posing-with-shy-smile-studio.jpg',
            title: 'Purple fur coat',
            isNew: true,
            oldPrice: 95,
            price: 70
          },
          {
            id: 10,
            img: '../img/young-woman-dressed-summer-outfit-out-city (1).jpg',
            img2: '../img/young-woman-dressed-summer-outfit-out-city.jpg',
            title: 'White Shirt',
            isNew: true,
            oldPrice: 45,
            price: 30
          },
          {
            id: 11,
            img: '../img/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress.jpg',
            img2: '../img/girl-with-dimples-her-cheeks-good-mood-is-laughing-posing-portrait.jpg',
            title: 'Pink Dress',
            isNew: false,
            oldPrice: 58,
            price: 32
          },
          {
            id: 12,
            img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
            img2: '../img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
            title: 'Orange Skirt',
            isNew: false,
            oldPrice: 78,
            price: 50
          },
          {
            id: 13,
            img: '../img/slender-girl-great-mood-is-having-fun-dancing-with-bag-her-hands-shot-italian-model-wrap-dress.jpg',
            img2: '../img/girl-with-dimples-her-cheeks-good-mood-is-laughing-posing-portrait.jpg',
            title: 'Pink Dress',
            isNew: false,
            oldPrice: 58,
            price: 32
          },
          {
            id: 14,
            img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
            img2: '../img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
            title: 'Orange Skirt',
            isNew: false,
            oldPrice: 78,
            price: 50
          },
          {
            id: 14,
            img: '../img/full-length-portrait-cheerful-ginger-woman-romantic-caucasian-girl-orange-clothes.jpg',
            img2: '../img/full-length-portrait-shy-caucasian-girl-standing-yellow-indoor-shot-winsome-girl-orange-knitted-sweater-skirt.jpg',
            title: 'Orange Skirt',
            isNew: false,
            oldPrice: 78,
            price: 50
          }
      ]
  return (
    <div className='list'>{data.map(item => (
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List