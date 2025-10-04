// components/About.js
import Image from 'next/image';
import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp} from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/foto-profil.jpeg" // Pastikan nama file sesuai
                alt="Foto Profil [Nama Anda]"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4">Halo, saya Akhdan Subagja</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
                Mahasiswa Teknik Informatika dengan minat dalam pengembangan perangkat lunak dan antusias membangun solusi teknologi yang efisien, aman, dan ramah pengguna. Berpengalaman mengerjakan proyek berbasis web dan mobile menggunakan framework modern serta memiliki pemahaman kuat dalam perancangan database dan arsitektur sistem.
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a href="https://www.linkedin.com/in/akhdan-subagja-372a99272/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 text-3xl"><FaLinkedin /></a>
              <a href="https://github.com/akhdansubagja" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-3xl"><FaGithub /></a>
              <a href="https://www.instagram.com/akhdan125/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-pink-400 text-3xl"><FaInstagram /></a>
              <a href="https://wa.me/6283815819330" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-green-400 text-3xl"><FaWhatsapp /></a>
            </div>
            <a 
              href="/cv-saya.pdf"
              target ="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105"
            >
              Lihat CV Saya
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;