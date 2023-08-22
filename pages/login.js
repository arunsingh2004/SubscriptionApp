import React from "react";
import Link from "next/link";

import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");

  const createSubscription = async () => {
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      if (response.ok) return alert("Login unsuccessful!");
      const data = await response.json();
    } catch (err) {
      console.error(err);
      alert("Login Successfully");
    }
  };
  return (
    <>
      <p className="font-bold px-24 text-3xl py-6">Login Screen</p>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-blue-400 m-24">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                for="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <Link href={"/forgot"}>
                    <div className="font-semibold text-blue-600 hover:text-blue-500">
                      Forgot password?
                    </div>
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autocomplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <Link href={"/plan1"}>
                <button
                  onClick={createSubscription}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
                >
                  Login
                </button>
              </Link>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link
              href={"/signup"}
              className="font-semibold leading-6 text-blue-600 hover:text-blue-500"
            >
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
