import {
  CardElement,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React, { useState } from "react";

function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();
      const confirm = await stripe.confirmCardPayment(data.clientSecret);
      if (confirm.error) return alert("Payment unsuccessful!");
      alert("Payment Successful! Subscription active.");
    } catch (err) {
      console.error(err);
      alert("Payment failed! " + err.message);
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-row justify-center px-6 py-12 lg:px-8 h-full bg-blue-400 m-24">
        <div className="flex  bg-white m-12  ">
          <div className="mx-12 justify-around space-x-2">
            <span className="font-bold">Name: </span>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
            />
            <br />
            <span className="font-bold ">Email: </span>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
            />
            <br />
            <div className="bg-white block  w-96 rounded-md border-0 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6">
              <CardElement />
            </div>
            <br />
            <button
              className="flex my-4 justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
              onClick={createSubscription}
            >
              Confirm Payment
            </button>
          </div>
        </div>

        <div className="flex flex-col  bg-slate-50">
          <h2 className="font-bold m-2">Order Summary</h2>
          <div className="flex m-12">
            <p className=" justify-between font-bold"> Plan Name</p>{" "}
            <span className="px-12 justify-between font-bold">Basic</span>
          </div>
          <div className="flex m-12">
            <p className=" justify-between font-bold"> Billing cycle</p>{" "}
            <span className="px-12 justify-between font-bold">Monthly</span>
          </div>
          <div className="flex m-12">
            <p className=" justify-between font-bold"> Plan price</p>{" "}
            <span className="px-12 justify-between font-bold">Rs:200/mo</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaymentForm;
