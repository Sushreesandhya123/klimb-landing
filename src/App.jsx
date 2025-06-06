// src/App.jsx
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JourneyTracker from "./components/JourneyTracker";
import QuizLauncher from "./components/QuizLauncher";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <JourneyTracker />
        <QuizLauncher />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default App;