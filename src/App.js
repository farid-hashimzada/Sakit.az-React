
import './components/header/header.css';
import './components/navTop/style.css';
import './components/about-work/work.css';
import './components/solve-problem/solve.css';
import { NavTop } from './components/navTop/navTop.jsx';
import { Header } from './components/header/header.jsx';
import { Bam } from './bam/bam';
import { Work } from './components/about-work/work';
import  Solve  from './components/solve-problem/solve';






function App() {
  return (
    <>
      <NavTop />
      <Header />
      <Bam />
      <Work />
      <Solve/>
    </>
  );
}

export default App;
