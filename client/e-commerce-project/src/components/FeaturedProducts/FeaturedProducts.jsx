import React from 'react';
import './FeaturedProducts.scss';
import Card from '../Card/Card';
import useFetch from '../../hooks/useFetch';

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eqi]=${type}`
  );

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
        {error ? "Something went wrong!" : (loading
          ? 'Loading'
          : data && data.map(item => <Card item={item} key={item.id} />))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
