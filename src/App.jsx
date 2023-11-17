// import React from 'react'
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav";
const App = () => {
  return (
    <main className="relative dark:bg-gray-800">
      <Nav />
      <section className="">
        <Hero />
      </section>
      <section className="">
        <PopularProducts />
      </section>
      <section className="">
        <SuperQuality />
      </section>
      <section className="">
        <Services />
      </section>
      <section className="">
        <SpecialOffer />
      </section>
      <section className="">
        <CustomerReviews />
      </section>
      <section className="">
        <Subscribe />
      </section>
      <section className="">
        <Footer />
      </section>
    </main>
  );
};
export default App;
