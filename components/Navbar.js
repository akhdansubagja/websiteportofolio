// components/Navbar.js
import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { name: "Tentang Saya", href: "#about" },
    { name: "Keahlian", href: "#skills" },
    { name: "Proyek", href: "#projects" },
    { name: "Pengalaman", href: "#experience" },
    { name: "Sertifikasi", href: "#certifications" },
  ];

  return (
    <nav className="bg-gray-900 bg-opacity-50 backdrop-blur-lg fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
          Akhdan Subagja
        </Link>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile menu button can be added here later */}
      </div>
    </nav>
  );
};

export default Navbar;