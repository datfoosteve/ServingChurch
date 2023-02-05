import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('./https://i.imgur.com/2KtmLpH.jpeg')` }}>
        
      </div>
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;