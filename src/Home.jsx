import {
  CustomerReviews,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
const Home = () => {
  return (
    <div>
      <Hero />
      <PopularProducts />

      <SuperQuality />

      <Services />

      <SpecialOffer />

      <CustomerReviews />

      <Subscribe />
    </div>
  );
};
export default Home;
