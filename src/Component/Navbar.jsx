import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="lg:px-0 sticky top-0 left-0 right-0 z-50 bg-[#c4342b] text-white">
      <div className="mx-3 max-w-5xl lg:mx-auto flex justify-between items-center py-4">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          <h1 className="text-xl">
            <span className="font-semibold">Restau</span>rant
          </h1>
          <div className="hidden lg:flex space-x-6 ml-10 text-white">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/clients">Clients</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <button className="bg-[#febf00] text-black font-medium px-4 py-2 rounded">
            Book a Table
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden shadow-md z-10 absolute bg-[#c4342b] w-full">
          <div className="flex flex-col space-y-2 p-5">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About
            </Link>
            <Link to="/portfolio" onClick={toggleMenu}>
              Portfolio
            </Link>
            <Link to="/clients" onClick={toggleMenu}>
              Clients
            </Link>
            <Link to="/blog" onClick={toggleMenu}>
              Blog
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
