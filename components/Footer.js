// components/Footer.js
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            <a href="https://www.linkedin.com/in/akhdan-subagja-372a99272/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-3xl"><FaLinkedin /></a>
            <a href="https://github.com/akhdansubagja" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-3xl"><FaGithub /></a>
            <a href="https://www.instagram.com/akhdan125/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 text-3xl"><FaInstagram /></a>
            <a href="https://wa.me/6283815819330" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 text-3xl"><FaWhatsapp /></a>
        </div>
        <p>&copy; {new Date().getFullYear()} Akhdan Subagja.</p>
      </div>
    </footer>
  );
};
export default Footer;