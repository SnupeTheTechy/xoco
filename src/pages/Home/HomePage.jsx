import "./homepage.css";
import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/HeroSection/Hero";
import BestSellers from "../../components/BestSellers/BestSellers";
import Products from "../../components/Products/Products";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/gallery/Gallery";

function Home() {
  return (
    <div className="home">
      <header>
        <NavBar />
      </header>
      <main>
        <Hero />
        <BestSellers />
        <Gallery />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
