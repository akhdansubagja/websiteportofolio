// components/Experience.js
const Experience = () => {
  const experiences = [
    { role: "Operator/Staff", company: "Studio Musik Madagazkar", period: "2020 - Sekarang", 
      desc: "Bertanggung jawab dalam melayani pelanggan dan memastikan studio siap digunakan, termasuk mengoperasikan serta menjaga kebersihan dan kenyamanan ruangan. Selain itu, saya melakukan maintenance pada alat musik agar selalu dalam kondisi baik, mengatur dan mengurus jadwal booking studio, serta mengembangkan sistem pembayaran online menggunakan QRIS untuk memudahkan transaksi pelanggan." },

  ];

  return (
    <section id="experience" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Pengalaman</h2>
        <div className="relative">
          {/* Garis waktu vertikal */}
          <div className="absolute left-1/2 w-0.5 h-full bg-gray-600 hidden md:block"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              <div className="hidden md:block w-5/12"></div>
              <div className="z-10 bg-blue-500 rounded-full w-4 h-4 hidden md:block"></div>
              <div className="bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-5/12">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <p className="text-blue-400 mb-2">
                  {exp.company} | {exp.period}
                </p>
                <p className="text-gray-300">{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
