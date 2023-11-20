import { useParams, useNavigate } from "react-router-dom";
import { all_products } from "../constants";
const Product_Details = () => {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const history = useNavigate();
  // Find the service object in the services array based on the id
  const selectedProduct = all_products.find(
    (product) => product.id === productId
  );
  // Check if the service with the given id exists
  if (!selectedProduct) {
    return <div className="text-red-500">Service not found.</div>;
  }
  return (
    <section className="padding dark:bg-gray-800">
      <section id="products" className="max-container max-sm:mt-12 my-20">
        <div className="flex flex-col justify-center gap-5">
          <button
            onClick={() => history(-1)}
            className="p-5 rounded-lg dark:bg-white bg-red-500 font-bold text-lg text-slate-200 dark:text-gray-900"
          >
            Go Back
          </button>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <img
              src={selectedProduct.imgURL}
              alt={selectedProduct.name}
              className="w-[50%] lg:w-[45%] h-[55%] mb-4 rounded-lg"
            />
            <div>
              <p>{selectedProduct.name}</p>
              <p>{selectedProduct.price}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Product_Details;
