import React, { useEffect } from "react";

// PayPalButton component
const PayPalButton = ({ amount }) => {

  useEffect(() => {
    // PayPal Buttons will be rendered once the script is loaded
    const paypalContainer = document.getElementById('paypal-button-container');
    if (window.paypal && !paypalContainer.hasChildNodes()) {
      window.paypal.Buttons({
        createOrder: function (data, actions) {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                },
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order
            .capture()
            .then(function (details) {
              // Successful payment
              alert("Payment completed by " + details.payer.name.given_name);
            })
            .catch((err) => {
              console.error("Error capturing payment", err);
              alert("There was an error with the payment. Please try again later.");
            });
        },

        onError: function (err) {
          console.error("PayPal Checkout Error", err);
          alert("Payment failed, please try again.");
        },
      }).render("#paypal-button-container");
    }
  }, [amount]); // Re-render PayPal button if the amount changes

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
