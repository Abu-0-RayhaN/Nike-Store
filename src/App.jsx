// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Nav from "./components/Nav";
import Footer from "./sections/Footer";
import CardList from "./sections/CardList";

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
          <Route path="/products" element={<CardList />} />
          {/* Add more routes if needed */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
