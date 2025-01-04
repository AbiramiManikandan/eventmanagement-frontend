import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-xl font-bold">EventMaster</Link>
        <div>
          <Link to="/events" className="text-white mx-4">Events</Link>
          <Link to="/login" className="text-white mx-4">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
