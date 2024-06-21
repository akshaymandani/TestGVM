import './App.css';
import Header from './components/Header/header';
import Service from './components/Expandservice/expandService';
// import Feature from './components/Features/feature';
import Carousel from './components/CarouselSection/carousel';
import ArtEventsPage from './components/ArtEventsPage/ArtEventsPage';
import CarouselPage from './components/carouselPage/carouselPage';
import Footer from './components/Footer/footer';
import Feature from './components/Features/feature';
import JoinMasterPieces from './components/JoinMasterPieces/joinMasterPieces';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        {/* <Feature /> */}
        <Carousel />
        <Service />
        <CarouselPage />
        <ArtEventsPage />
        <JoinMasterPieces />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
