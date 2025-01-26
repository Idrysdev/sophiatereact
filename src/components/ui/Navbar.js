import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-500 hover:underline">
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-500 hover:underline">
            À propos
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-blue-500 hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;