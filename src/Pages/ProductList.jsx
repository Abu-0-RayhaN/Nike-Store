import PopularProductCard from "../components/PopularProductCard";
import { all_products as products } from "../constants";
const ProductList = () => {
  return (
    <>
      <section className="padding dark:bg-gray-800">
        <section id="products" className="max-container max-sm:mt-12 my-20">
          <div className="flex flex-col justify-center gap-5">
            <h2 className="text-4xl font-palanquin font-bold ">
              <span className="dark:text-gray-200">Our</span>{" "}
              <span className="text-coral-red">Popular</span>{" "}
              <span className="dark:text-gray-200">Porducts</span>
            </h2>
            <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray dark:text-gray-100">
              Experience top-notch quality and style with our sough-after
              selections. Discover a world of comfort, design, and value.
            </p>
          </div>
          <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 sm:gap-4 mx-[20%] sm:mx-auto">
            {products.map((product) => (
              <PopularProductCard key={product.name} {...product} />
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default ProductList;
