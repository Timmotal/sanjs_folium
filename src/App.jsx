import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Tech, Navbar, Works, StarsCanvas, Footer, WorkText } from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-10 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Tech />
        <WorkText />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
