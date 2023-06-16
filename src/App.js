
import './components/header/header.css';
import './components/navTop/style.css';
import './components/about-work/work.css';
import './components/solve-problem/solve.css';
import './components/instagramFeed/instagramFeed.css';
import './components/ReactMultiCarousel/reactMultiCarousel.css';
import './components/calculator/Calculator.css'
import './components/SpecialOffer/SpecialOffer.css'
import './components/ProyektExample/ProyektExample.css'
import PageContainer from './components/pageContainer/pageContainer';
import { BrowserRouter, Routes } from 'react-router-dom';
import { Routing } from './Routing/Routing';





function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
