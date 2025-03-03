import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Nav from './components/Nav';
import Carousel from './components/Carousel';
import About1 from './pages/About1';
import About2 from './pages/About2';
import About3 from './pages/About3';

function App() {
  const slides = [ <About />, <About1 />, <About2 />, <About3 />];
  return (
    <div className="App">
      <Nav />
      <Home />
      <Carousel slides={slides} />
    </div>
  );
}

export default App;
