// components/Footer.js
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-lg font-semibold">Eco Fashion</h3>
            <p className="text-sm">An eco-fashion destination, proudly crafted by ABDU.</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} All Rights Reserved. ABDU</p>
        </div>
        {/* Social Media Links */}
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://github.com/ABDU73" // Replace with your GitHub link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-slate-600"
          >
            <FaGithub className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdu-gl-15537b334" // Replace with your LinkedIn link
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-slate-600"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
