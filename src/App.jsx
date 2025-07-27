import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import ProductListing from "./components/ProductListing";
import LocationSection from "./components/LocationSection";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import SearchResultPage from "./components/SearchResultPage"; 
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <ProductListing />
              <Categories />
              <LocationSection />
              <CTA />
            </>
          }
        />
        <Route path="/buscar/:termino" element={<SearchResultPage />} />
        <Route path="/categoria/:termino" element={<SearchResultPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;




