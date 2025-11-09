import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeatureCards from './components/FeatureCards';
import CTASection from './components/CTASection';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f0d]">
      <Navbar />
      <Hero />
      <FeatureCards />
      <CTASection />
      <footer className="border-t border-white/10 py-10 text-center text-white/70 bg-[#0b0f0d]">
        <p>
          © {new Date().getFullYear()} Build Buddy — Made for students. Colors: #344e41 #3a5a40 #588157 #a3b18a #dad7cd
        </p>
      </footer>
    </div>
  );
}

export default App;
