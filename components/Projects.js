// components/Projects.js
import Image from 'next/image';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    { 
      title: "GoRentall - Aplikasi Sewa Kendaraan", 
      description: "GoRentAll adalah sistem sewa kendaraan yang dibuat sebagai Final Project. Proyek ini dikerjakan tim dengan pembagian tugas antara backend dan frontend. Sistem terdiri dari aplikasi mobile untuk penyewa (Ionic/Angular) dan backend API dengan Laravel yang juga menyediakan panel admin web.", 
      image: "/projects/project1.png",
      githubLink: "https://github.com/your-username/project1-repo"
    },
    { 
      title: "Zein Persada - Website Pesan Tiket Tour & Travel", 
      description: "Zein Persada adalah website untuk memesan tiket tour dan travel. Website ini dibuat menggunakan native PHP dengan database MySQL. Fitur utama meliputi penyediaan paket tour, pemesanan tiket, dan manajemen user.", 
      image: "/projects/project2.png",
      githubLink: "https://github.com/your-username/project2-repo" 
    },
    { 
      title: "Studio Music Tracker", 
      description: "Studio Musik Tracker adalah aplikasi web sederhana yang dibangun menggunakan Laravel 10 untuk mencatat, melacak, dan memvisualisasikan data pemesanan (booking) studio musik. Aplikasi ini dirancang untuk memberikan gambaran cepat mengenai pendapatan dan frekuensi sewa studio dalam rentang waktu yang fleksibel.", 
      image: "/projects/project3.png",
      githubLink: "https://github.com/your-username/project3-repo" 
    },
    // Tambahkan proyek lainnya di sini
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Proyek Saya</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project) => (
            <div 
              key={project.title} 
              className="bg-gray-700 rounded-lg overflow-hidden shadow-lg 
                         transform hover:-translate-y-2 transition-transform duration-300
                         flex flex-col" // Mengubah kartu menjadi flex container vertikal
            >
              {/* 1. Area Gambar (Tempat Efek Hover) */}
              <div className="relative group h-56 w-full">
                {/* Gambar Proyek dengan efek zoom saat hover */}
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-110 transition-transform duration-300"
                />

                {/* Overlay Deskripsi & Tombol GitHub */}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center 
                             p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <p className="text-gray-300 mb-4 text-sm">{project.description}</p>
                  
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center bg-gray-600 hover:bg-gray-700 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm"
                    >
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  )}
                </div>
              </div>

              {/* 2. Area Judul (Selalu Terlihat) */}
              <div className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;