import React from "react";
import Link from "next/link";
import PaymentForm from "../components/paymentform";
const Plan1 = () => {
  return (
    <>
      <p className="font-bold py-4 text-2xl">
        1.Monthly Pricing (Select Monthly by default)
      </p>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container mx-auto p-6 overflow-x-auto">
          <table className="w-full">
            <caption className="sr-only font-bold">
              Pricing plan comparison
            </caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col ">
                  <div className="bg-blue-400 h-24">
                    <h2 className="px-2 text-lg font-medium">Mobile</h2>
                  </div>
                </th>
                <th scope="col">
                  <div className="bg-blue-500 h-24">
                    <h2 className="px-2 text-lg font-medium">Basic</h2>
                  </div>
                </th>
                <th scope="col">
                  <div className="bg-blue-500 h-24">
                    <h2 className="px-2 text-lg font-medium">Standard</h2>
                  </div>
                </th>
                <th scope="col">
                  <div className="bg-blue-500 h-24">
                    <h2 className="px-2 text-lg font-medium">Premium</h2>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y divide-gray-700">
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Monthly Price</h3>
                </th>
                <td>
                  <span className="block text-sm">Rs:100</span>
                </td>
                <td>
                  <span className="block text-sm">Rs:200</span>
                </td>
                <td>
                  <span className="block text-sm">Rs:500</span>
                </td>
                <td>
                  <span className="block text-sm">Rs:700</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Video Quality</h3>
                </th>
                <td>
                  <span className="block text-sm">Good</span>
                </td>
                <td>
                  <span className="block text-sm">Good</span>
                </td>
                <td>
                  <span className="block text-sm">Better</span>
                </td>
                <td>
                  <span className="block text-sm">High</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Resolution</h3>
                </th>
                <td>480p</td>
                <td>480p</td>
                <td>1080p</td>
                <td>4k+HDR</td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">Divice you can use to watch</h3>
                </th>
                <td>Phone</td>
                <td>Phone</td>
                <td>Phone</td>
                <td>Phone</td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3"></h3>
                </th>
                <td>Tablet</td>
                <td>Tablet</td>
                <td>Tablet</td>
                <td>Tablet</td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3"></h3>
                </th>
                <td></td>
                <td>TV</td>
                <td>TV</td>
                <td>TV</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <a href="/currentplan">
        <div className=" px-96 m-12 ">
          <button className="bg-blue-500 px-12 text-5xl p-6 ">Next</button>
        </div>
      </a>
    </>
  );
};

export default Plan1;
