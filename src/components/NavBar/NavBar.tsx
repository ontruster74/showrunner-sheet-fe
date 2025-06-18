// src/components/NavBar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavBar: React.FC = () => {
  const location = useLocation();

  const linkClass = (path: string) =>
    `text-white font-semibold px-3 py-2 rounded-md hover:bg-gray-700 transition ${
      location.pathname === path ? 'bg-gray-700' : ''
    }`;

  return (
    <nav className="bg-gray-800 p-4 shadow">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">MyApp</div>
        <div className="flex space-x-4">
          <Link to="/" className={linkClass('/')}>
            Home
          </Link>
          <Link to="/about" className={linkClass('/about')}>
            About
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
