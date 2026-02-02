import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Delivery from "./pages/Delivery";
import Contact from "./pages/Contact";
import Cakes from "./pages/Cakes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cakes" element={<Cakes />} />
        <Route path="/flower-bouquets" element={<Products />} />
        <Route path="/shop" element={<Products />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}
export default App;