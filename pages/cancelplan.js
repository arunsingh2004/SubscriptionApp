import React from "react";
import Link from "next/link";
const CancelPlan = () => {
  return (
    <>
      <p className="font-bold px-24 text-3xl py-6">
        5. Selected Plan screen (Cancelled State)
      </p>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-blue-400 m-24">
        <div class="w-full max-w-sm bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
          <div class="flex justify-end px-4 pt-4"></div>
          <div class="flex flex-col items-center pb-10">
            <h5 class=" text-xl mb-2 font-medium text-white-900 px-6 ">
              Current Plan Details{" "}
              <span className=" text-red-400 text-sm bg-red-200">
                Cancelled
              </span>
            </h5>
            <span class="text-sm text-white-500 dark:text-white-400">
              Basic+Tablet
            </span>

            <h2 className="font-bold">Rs: 2,000/yr</h2>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/plan1"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Choose Plan
              </a>
            </div>
            <p className="m-2 p-4 text-sm">
              Your subscription was can cancelled and you will loose access to
              services on Aug
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelPlan;
