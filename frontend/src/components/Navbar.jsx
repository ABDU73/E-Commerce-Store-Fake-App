import { useState } from "react";
import { ShoppingCart, UserPlus, LogIn, LogOut, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { FaBars, FaTimes } from "react-icons/fa"; // Mobile menu icons

const Navbar = () => {
  const { user, logout } = useUserStore();
  const isAdmin = user?.role === "admin";
  const { cart } = useCartStore();
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-800 bg-opacity-90 backdrop-blur-md shadow-lg z-40 transition-all duration-300 border-b border-gray-700">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-3xl line-through font-thin dark:text-blue-500/80">
            Eco Fashion
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8 items-center">
            {/* Home Link */}
            <Link 
              to="/" 
              className="text-gray-300 hover:text-gray-100 transition duration-300 relative group"
            >
              Home
              {/* Underline Animation */}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300 ease-in-out"></span>
            </Link>

          {/* Cart Link */}
          <Link 
            to="/cart" 
            className="relative group text-gray-300 hover:text-gray-100 transition duration-300"
          >
            <ShoppingCart className="inline-block mr-1 group-hover:text-gray-100" size={20} />
            <span className="hidden sm:inline">Cart</span>

             {/* Underline Animation */}
             <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-900 group-hover:w-full transition-all duration-300 ease-in-out"></span>
           
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-500 text-white rounded-full px-2 py-0.5 text-xs group-hover:bg-emerald-400">
                {cart.length}
              </span>
            )}
          </Link>

            {/* Admin Dashboard Link */}
            {isAdmin && (
              <Link
                to="/secret-dashboard"
                className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded-md font-medium flex items-center"
              >
                <Lock className="inline-block mr-1" size={18} />
                <span className="hidden sm:inline">Dashboard</span>
              </Link>
            )}

            {/* User Auth Links */}
            {user ? (
              <button
                className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md flex items-center"
                onClick={logout}
              >
                <LogOut size={18} />
                <span className="hidden sm:inline ml-2">Log Out</span>
              </button>
            ) : (
              <>
                <Link
                  to="/signup"
                  className="bg-gray-600 hover:bg-gray-500 text-white py-2 px-4 rounded-md flex items-center"
                >
                  <UserPlus className="mr-2" size={18} />
                  Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-gray-500 hover:bg-gray-400 text-white py-2 px-4 rounded-md flex items-center"
                >
                  <LogIn className="mr-2" size={18} />
                  Login
                </Link>
              </>
            )}
          </nav>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-3xl text-slate-300">
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-700 text-white mt-4 px-4 py-6 rounded-lg`}>
        <ul className="font-medium flex flex-col space-y-4">
          <li>
            <Link
              to="/"
              className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
            >
              Home
            </Link>
          </li>
          {user && (
            <li>
              <Link
                to="/cart"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
              >
                Cart
              </Link>
            </li>
          )}
          {isAdmin && (
            <li>
              <Link
                to="/secret-dashboard"
                className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
              >
                Dashboard
              </Link>
            </li>
          )}
          {user ? (
            <li>
              <button
                className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
                onClick={logout}
              >
                Log Out
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link
                  to="/signup"
                  className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="block py-2 px-3 text-white rounded hover:text-gray-300 transition duration-300"
                >
                  Login
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
