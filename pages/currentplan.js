import React from "react";
import Link from "next/link";
const CurrentPlan = () => {
  return (
    <>
      <div className=" m-44 px-44 bg-blue-400 flex min-h-full h-full flex-col justify-center  py-12 lg:px-8 ">
        <div class="w-full max-w-sm bg-white border border-white-200 rounded-lg shadow dark:bg-white-800 dark:border-white-700">
          <div class="flex justify-end px-4 pt-4">
            <Link href={"/cancelplan"}>
              <button
                id="dropdownButton"
                data-dropdown-toggle="dropdown"
                class="inline-block text-white-500 dark:text-white-400 hover:bg-white-100 dark:hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-white-700 rounded-lg text-sm p-1.5"
                type="button"
              >
                Cancel
              </button>
            </Link>
          </div>
          <div class="flex flex-col items-center pb-10">
            <h5 class=" text-xl mb-2 font-medium text-white-900 px-6 ">
              Current Plan Details{" "}
              <span className=" text-blue-300 text-sm bg-blue-200">Active</span>
            </h5>
            <span class="text-sm text-white-500 dark:text-white-400">
              Basic+Tablet
            </span>

            <h2 className="font-bold">Rs: 2,000/yr</h2>
            <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="/"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Confrim Plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentPlan;
