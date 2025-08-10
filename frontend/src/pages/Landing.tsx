import Footer from "@/components/landing/Footer";
import MainContent from "@/components/landing/MainContent";
import Navbar from "@/components/landing/Navbar";


const Landing = () => {
  document.body.classList.add("dark");
  return (
    <main className="flex flex-col h-full text-white w-screen min-h-screen bg-slate-950">
        <Navbar />
        {/* <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-open-sans font-bold mb-4">Welcome to ShopNex</h1>
            <p className="text-lg mb-6">Your one-stop shop for all your needs.</p>
            <button 
              className="px-6 py-3 font-open-sans bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              onClick={() => window.location.href = '/login'}
            >
              Get Started
            </button>
        </div> */}
        <MainContent />

        {/* Connect, trade, and manage credit in one place. */}
        <Footer />
    </main>
  );
};

export default Landing;