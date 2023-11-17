// import React from 'react'

import Button from "../components/Button";

const Subscribe = () => {
  return (
    <>
      <section className="padding-x sm:py-32 py-16 w-full">
        <section
          className="max-container flex justify-between items-center max-lg:flex-col gap-10 "
          id="contact us"
        >
          <h3 className="text-4xl leading-[48px] lg:max-w-md font-palanquin font-bold">
            <span className="dark:text-gray-200">Sign Up for</span>{" "}
            <span className="text-coral-red">Updates</span>
            <span className="dark:text-gray-200"> & Newsletter</span>
          </h3>
          <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input
              type="text"
              placeholder="subscribe@nike.com"
              className="input dark:bg-gray-800"
            />
            <div className="flex max-sm:justify-end items-center max-sm:w-full">
              <Button label="Sign Up" fullWidth />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Subscribe;
