// components/Skills.js
import Image from 'next/image'; // Import komponen Image dari Next.js

const Skills = () => {
  const skillsList = [
    { name: "HTML", logo: "/logos/html.svg" },
    { name: "CSS", logo: "/logos/css.svg" },
    { name: "JavaScript", logo: "/logos/javascript.svg" },
    { name: "Bootstrap", logo: "/logos/bootstrap.svg" },
    { name: "PHP", logo: "/logos/php.svg" },
    { name: "Laravel", logo: "/logos/laravel.svg" },
    { name: "Angular", logo: "/logos/angular.svg" },
    { name: "Ionic", logo: "/logos/ionic.svg" },
    { name: "Node.js", logo: "/logos/nodejs.svg" },
    { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
    { name: "MySQL", logo: "/logos/mysql.svg" },
    { name: "Git", logo: "/logos/git.svg" },
    { name: "Postman", logo: "/logos/postman.svg" },
    // Tambahkan skill lainnya di sini dengan path logo yang sesuai
    // Contoh: { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
    // Pastikan Anda sudah punya file `public/logos/postgresql.svg`
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Keahlian Saya</h2>
        <div className="flex flex-wrap justify-center gap-8"> {/* Sedikit perbesar gap */}
          {skillsList.map((skill) => (
            <div 
              key={skill.name} 
              className="
                w-36 h-36  {/* INI KUNCINYA: Menetapkan lebar & tinggi yang sama */}
                bg-gray-800 
                rounded-xl 
                flex flex-col items-center justify-center 
                gap-2 
                p-4  {/* Tambah padding agar konten tidak terlalu mepet */}
                transform hover:scale-105 hover:bg-gray-700
                transition-all duration-300
                shadow-lg"
            >
              <Image 
                src={skill.logo} 
                alt={`${skill.name} Logo`} 
                width={48} // Ukuran logo sedikit diperbesar
                height={48}
              />
              <span className="font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;