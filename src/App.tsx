import { usePageEffects } from "./hooks/usePageEffects";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MemorySection from "./components/MemorySection";
import TimerSection from "./components/TimerSection";
import LetterSection from "./components/LetterSection";
import ClosingSection from "./components/ClosingSection";
import Footer from "./components/Footer";

export default function App() {
  usePageEffects();
  return <>
    <div className="reading-progress" aria-hidden="true"><span id="progressBar" /></div>
    <div className="cursor-glow" aria-hidden="true" />
    <main>
      <HeroSection />
      <AboutSection />
      <MemorySection />
      <TimerSection />
      <LetterSection />
      <ClosingSection />
    </main>
    <Footer />
  </>;
}
