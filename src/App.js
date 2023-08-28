import Hero from './Components/Hero';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import MobileNavigation from './Components/MobileNavigation';
import { useMediaQuery } from 'react-responsive';

const App = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  return (
    <div>
      {isMobile && <MobileNavigation />}
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default App;
