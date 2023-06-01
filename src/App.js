
import './components/header/header.css';
import './components/navTop/style.css';
import { NavTop } from './components/navTop/navTop.jsx';
import { Header } from './components/header/header.jsx';
import { Bam } from './bam/bam';




function App() {
  return (
    <>
      <NavTop />
      <Header />
      <Bam/>
    </>
  );
}

export default App;
