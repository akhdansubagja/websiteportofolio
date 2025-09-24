// app/page.js
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-20"> {/* Padding top agar konten tidak tertutup Navbar */}
        {/* Hero Section sederhana bisa ditaruh di sini jika mau */}
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
      </main>
      <Footer />
    </div>
  );
}