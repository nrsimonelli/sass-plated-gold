import React from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import Footer from '../Footer/Footer';

const App = () => {
  return (
    <div className='min-h-screen w-full'>
      <Nav />
      <div className='bg-blue-500 text-blue-100 dark:bg-blue-900 dark:text-green-500'>
        Hello World
      </div>
      <Hero />
      <Footer />
    </div>
  );
};

export default App;
