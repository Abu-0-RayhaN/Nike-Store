import { Link } from "react-router-dom";
import { arrowRight, star } from "../assets/icons";
import Button from "./Button";
const PopularProductCard = ({ imgURL, name, price, ListPage = false, id }) => {
  return (
    <>
      <div
        className={`flex flex-1 flex-col w-full max-sm:w-full ${
          ListPage ? "border border-solid border-blue-500 p-3 rounded-2xl" : ""
        }`}
      >
        <img
          src={imgURL}
          alt={name}
          className="w-[280px] h-[280px] transition duration-500 hover:opacity-90 mx-auto"
        />
        <div className="mt-8 flex justify-center gap-2.5">
          <img src={star} alt="rating" width={24} height={24} />
          <p className="text-xl font-montserrat leading-normal text-slate-gray">
            4.5
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin text-center dark:text-gray-200">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-2xl leading-normal text-coral-red text-center">
          {price}
        </p>
        {ListPage ? (
          <Link to={`/products/${id}`}>
            <Button label="Details" iconURL={arrowRight} />
          </Link>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default PopularProductCard;
