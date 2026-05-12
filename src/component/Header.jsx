import Logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export  function Heading() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
            <img src={Logo} alt="Star Tech Logo" className="w-10 h-10 rounded-xl" />
            <h1 className="text-2xl font-bold text-blue-700 tracking-tight">Star Tech</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
            <span 
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={() => navigate('/')}>
              Home
            </span>
            <span 
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={() => navigate('/about')}>
              About
            </span>
            <span 
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={() => navigate('/clients')}>
              Clients
            </span>
            <span 
              className="hover:text-blue-600 transition cursor-pointer"
              onClick={() => navigate('/service')}>
              Services
            </span>
          </div>

          {/* Search + Join Button */}
          <div className="hidden lg:flex items-center gap-4">
            <input
              type="text"
              placeholder="Search courses, skills..."
              className="border border-gray-200 px-5 py-2.5 rounded-2xl w-72 focus:outline-none focus:border-blue-400 transition bg-gray-50"
            />
            
            <button
              onClick={() => navigate("/apply")}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-2xl font-semibold transition-all active:scale-95 shadow-md shadow-blue-500/30"
            >
              Join For Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-2xl text-gray-700 focus:outline-none"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t py-6 px-6 shadow-lg">
            <div className="flex flex-col space-y-5 text-lg font-medium text-gray-700">
              <span onClick={() => { navigate('/'); setMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">
                Home
              </span>
              <span onClick={() => { navigate('/about'); setMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">
                About
              </span>
              <span onClick={() => { navigate('/clients'); setMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">
                Clients
              </span>
              <span onClick={() => { navigate('/service'); setMenuOpen(false); }} className="hover:text-blue-600 cursor-pointer">
                Services
              </span>

              <div className="pt-4 border-t">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full border border-gray-200 px-4 py-3 rounded-2xl focus:outline-none focus:border-blue-400"
                />
              </div>

              <button
                onClick={() => { navigate("/apply"); setMenuOpen(false); }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-2xl font-semibold mt-2"
              >
                Join For Free
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer to prevent content overlap with fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}