import React, { Component } from "react";
import { Elements, StripeProvider } from "react-stripe-elements";
import CheckoutForm from "./components/CheckoutForm";
import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";

import Spinner from "./components/LoadingSpinner";
import Images from "./components/Images";
import Buttons from "./components/Buttons";
import env from "../.env";

function App() {
  const [uploading, setUploading] = React.useState(false);
  const [images, updateImages] = React.useState([]);

  const onChange = e => {
    const files = Array.from(e.target.files);
    setUploading(true);

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    fetch(`http:localhost:3000/image-upload`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(images => {
        setUploading(false);
        updateImages(images);
      });
  };

  const removeImage = id => {
    updateImages(images.filter(image => image.public_id !== id));
  };

  const content = () => {
    switch (true) {
      case uploading:
        return <Spinner />;
      case images.length > 0:
        return <Images images={images} removeImage={removeImage} />;
      default:
        return <Buttons onChange={onChange} />;
    }
  };

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

      <div>
        <div className="buttons">{content()}</div>
      </div>
    </section>
  );
}

export default App;
