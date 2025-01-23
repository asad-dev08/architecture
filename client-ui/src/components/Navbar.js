import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our services",
      path: "/services",
      dropdown: [
        {
          name: "Residential Interior",
          path: "/services/residential-interior",
        },
        { name: "Commercial Interior", path: "/services/commercial-interior" },
        {
          name: "Architectural Consultancy",
          path: "/services/architectural-consultancy",
        },
      ],
    },
    {
      name: "Our works",
      path: "/works",
    },
    {
      name: "How we work",
      path: "/process",
    },
    {
      name: "Who we are",
      path: "/about",
      dropdown: [
        { name: "About us", path: "/about" },
        { name: "Career", path: "/about/career" },
        { name: "News & Blogs", path: "/about/news" },
      ],
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <img
                src="assets/logo/logo_text.jpeg"
                alt="VisionextBD"
                className="w-24 h-10"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={item.path}
                  className="text-gray-600 tracking-normal hover:text-gray-900 flex items-center"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 w-4 h-4" />}
                </Link>
                {item.dropdown && activeDropdown === item.name && (
                  <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-md py-2 mt-0">
                    <div className="absolute h-2 -top-2 left-0 right-0 bg-transparent"></div>
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            {navItems.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.path}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4">
                    {item.dropdown.map((dropItem) => (
                      <Link
                        key={dropItem.path}
                        to={dropItem.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                        onClick={() => setIsOpen(false)}
                      >
                        {dropItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
