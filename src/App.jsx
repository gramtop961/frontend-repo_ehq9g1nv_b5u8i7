import Hero from './components/Hero.jsx';
import AnimatedChart from './components/AnimatedChart.jsx';
import NormsSection from './components/NormsSection.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero />
      <main>
        <AnimatedChart />
        <NormsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
