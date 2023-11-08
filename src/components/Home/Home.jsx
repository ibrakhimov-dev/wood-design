import React from 'react';
import Banner from './Banner/Banner';
import Articles from './Articles/Articles';
import Product from './Product/Product';
import Advantages from './Advantages/Advantages';
import Feedback from './Feedback/Feedback';
import Connect from './Connect/Connect';

function Home() {
  return (
    <main className='home'>
      <Banner />
      <Articles />
      <Product />
      <Advantages />
      <Feedback />
      <Connect />
    </main>
  )
}

export default Home