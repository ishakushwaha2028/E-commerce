import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <main>
        <h1>Welcome to Our Store</h1>
        <div className="product-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
export default Home;