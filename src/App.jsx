
import './App.css';
import About from './components/About/About';
import Advert from "../../components/Advert";
import BestSellers from "./components/BestSeller";
import Carousel from "./components/Carousel";
import FeaturedPost from "./components/FeaturedPost";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";


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
