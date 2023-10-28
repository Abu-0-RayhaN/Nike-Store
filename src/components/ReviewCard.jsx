// import React from 'react'

import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <>
      <div className="flex justify-center items-center flex-col shadow-md p-5 rounded-2xl hover:shadow-xl transition-shadow dark:bg-gray-500">
        <img
          src={imgURL}
          alt="customer"
          className="rounded-full object-cover  h-40"
        />
        <p className="mt-6 max-w-sm text-center info-text dark:text-gray-100">
          {feedback}
        </p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img
            src={star}
            alt=""
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <p className="text-xl font-montserrat text-slate-gray dark:text-gray-100">
            {rating}
          </p>
        </div>
        <h1 className="mt-1 font-palanquin text-3xl text-center font-bold dark:text-gray-200">
          {customerName}
        </h1>
      </div>
    </>
  );
};

export default ReviewCard;
