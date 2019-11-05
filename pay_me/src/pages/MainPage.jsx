import React from "react";
const stripe = require("stripe")("sk_test_Lrec5tgvoIe7BWQoCQ5F5Fuv00jWUwlspm");

export default function MainPage() {
  (async () => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 1000,
      currency: "gbp",
      payment_method_types: ["card"],
      receipt_email: "jenny.rosen@example.com"
    });
  })();

  return (
    <section>
      <h1> This is where stripe will go</h1>
      <p> paymentIntent </p>
    </section>
  );
}

// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
