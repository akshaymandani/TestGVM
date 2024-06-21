import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Carousel from './components/CarouselSection/carousel';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <Carousel />
      </main>
    </div>
  );
}

export default App;
