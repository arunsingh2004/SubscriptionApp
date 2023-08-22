import React from "react";
import Login from "./login";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "../components/paymentform";
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <Elements stripe={stripePromise}>
        <PaymentForm />
      </Elements>
    </>
  );
};

export default App;
