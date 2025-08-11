import Footer from "@/components/landing/Footer";
import MainContent from "@/components/landing/MainContent";
import Navbar from "@/components/landing/Navbar";

const Landing = () => {
  document.body.classList.add("dark");
  return (
    <main className="flex flex-col h-full text-white w-screen min-h-screen bg-slate-950">
      <Navbar />
      <MainContent />
      <Footer />
    </main>
  );
};

export default Landing;
