import React from 'react';
import logo from '../assets/images/logo.png'

const Header = () => {
  return (
    <div className="bg-black text-white py-4 shadow-md">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center">
          <img
            src={logo}
            alt="Chefmate Logo"
            className="h-[70px] w-auto"
          />
          ChefMate
        </h1>
        <p className="text-md text-gray-300 hidden sm:block">
          Discover smart recipes for your lifestyle
        </p>
      </div>
    </div>
  );
};

export default Header;
