import React, { Component } from "react";
import { CardElement, injectStripe } from "react-stripe-elements";

// class CheckoutForm extends Component

function CheckoutForm({ injectStripe }) {
  const { complete, setComplete } = React.useState(false);

  const submit = async ev => {
    let { token } = await injectStripe.stripe.createToken({
      name: "Name"
    });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!" && setComplete(true));
  };

  return (
    <div className="checkout">
      <p>Would you like to complete the purchase?</p>
      <CardElement />
      <button onClick={submit}>Purchase</button>
    </div>
  );
}

export default injectStripe(CheckoutForm);
