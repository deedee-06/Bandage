
import './App.css';
import About from './components/About/About';
import Advert from "./components/Advert/Advert";
import BestSellers from "./components/BestSeller/BestSeller";
import Carousel from "./components/Carousel/Carousel";
import FeaturedPost from "./components/FeaturedPost/FeaturedPost";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Navbar/Navbar";


function App() {
  return (
    <>
      <NavBar />
      <div className="App">
        <Carousel />
        <BestSellers />
        <FeaturedPost />
        <About />
        <Advert />
        <Footer />
      </div>
    </>
  );
}

export default App
