import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./components/CheckoutFrom";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <section>
      <h1> PayMe </h1>
      {/* <LandingPage></LandingPage> */}
      <StripeProvider apiKey="pk_test_jSGnscJeo0pSlsqrTBlpNfFX00w04GKHar">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm />
          </Elements>
        </div>
      </StripeProvider>
    </section>
  );
}

export default App;
