import React from 'react';
import AboutUs from './AboutUs';
import Contact from './Contact';

const HomePage = () => {
  return (
    <div>
      <div className="bg-cover bg-center h-64" style={{ backgroundImage: `url('./your-image-url.jpg')` }}>
        {/* Add your content here */}
      </div>
      <AboutUs />
      <Contact />
    </div>
  );
};

export default HomePage;