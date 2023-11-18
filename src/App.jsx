import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import ProductList from "./Pages/ProductList";
import AboutUs from "./Pages/AboutUs";
import ContactUs from "./Pages/ContactUs";
import ScrollToTopButton from "./components/ScrollToTopButton";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <main className="relative dark:bg-gray-800">
                <Home />
              </main>
            }
          />
          <Route path="/products" element={<ProductList />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
        <ScrollToTopButton />
      </BrowserRouter>
    </>
  );
};

export default App;
