// components/Certifications.js
import Image from 'next/image';

const Certifications = () => {
  const certs = [
    { 
      name: "Huawei ICT Academy - Artificial Intelligence and Applications", 
      issuer: "Huawei", 
      year: "2025",
      image: "/certs/huaweiict.png" // Pastikan nama file sesuai
    },

    // Tambahkan sertifikasi lain di sini
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Sertifikasi</h2>
        <div className="max-w-4xl mx-auto space-y-6"> {/* Menggunakan space-y untuk jarak */}
          {certs.map(cert => (
            <a 
              key={cert.name} 
              href={cert.image} // Link ke gambar sertifikat ukuran penuh
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-700 p-4 rounded-lg flex items-center 
                         transform hover:bg-gray-600 hover:scale-105 
                         transition-all duration-300"
            >
              {/* Thumbnail Gambar Sertifikat */}
              <div className="flex-shrink-0 w-32 h-20 relative rounded-md overflow-hidden">
                <Image
                  src={cert.image}
                  alt={`Sertifikat ${cert.name}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Info Teks */}
              <div className="ml-6 flex-grow">
                <h3 className="text-xl font-semibold">{cert.name}</h3>
                <p className="text-gray-400">{cert.issuer}</p>
              </div>

              {/* Tahun */}
              <span className="font-mono text-gray-300 text-lg ml-4">{cert.year}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;