import React, { useEffect } from "react";

// PayPalButton component
const PayPalButton = ({ totalPrice, checkoutItems }) => {
  useEffect(() => {
    // PayPal Buttons will be rendered once the script is loaded
    const paypalContainer = document.getElementById("paypal-button-container");
    if (window.paypal && !paypalContainer.hasChildNodes()) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    currency_code: "GBP",
                    value: totalPrice.toFixed(2), // Total order value
                    breakdown: {
                      item_total: {
                        value: totalPrice.toFixed(2), // Total value of items
                        currency_code: "GBP",
                      },
                    },
                  },
                  items: checkoutItems.map((item) => ({
                    id: item.name,
                    name: item.name,
                    unit_amount: {
                      currency_code: "GBP",
                      value: item.price.toFixed(2), // Price per item
                    },
                    quantity: item.quantity.toString(),
                    // description: item.description, // Add custom category
                    sku: item.description,
                  })),
                },
              ],
              application_context: {
                locale: "en-GB", // Sets the language and defaults to UK for country
              },
            });
          },
          onApprove: function (data, actions) {
            return actions.order
                .capture()
                .then(function (details) {
                    try {
                        // Define order details
                        const orderDetails = {
                            orderId: details.id,
                            buyerName: details.payer.name.given_name + " " + details.payer.name.surname,
                            buyerEmail: details.payer.email_address,
                            items: details.purchase_units[0].items ? details.purchase_units[0].items.map((item) => ({
                                name: item.name,
                                variant_name: item.sku || "N/A", // Handle variant name if available
                                quantity: item.quantity,
                                unit_price: `${item.unit_amount.currency_code} ${item.unit_amount.value}`,
                                total_price: `${item.unit_amount.currency_code} ${
                                    parseFloat(item.unit_amount.value) * parseInt(item.quantity, 10)
                                }`,
                            })) : [],
                            address: details.purchase_units[0].shipping ? {
                                address_line_1: details.purchase_units[0].shipping.address.address_line_1 || "N/A",
                                address_line_2: details.purchase_units[0].shipping.address.address_line_2 || "N/A",
                                admin_area_1: details.purchase_units[0].shipping.address.admin_area_1 || "N/A",
                                admin_area_2: details.purchase_units[0].shipping.address.admin_area_2 || "N/A",
                                country_code: details.purchase_units[0].shipping.address.country_code || "N/A",
                                postal_code: details.purchase_units[0].shipping.address.postal_code || "N/A",
                            } : null,
                            orderDate: new Date(details.create_time).toLocaleString(),
                            orderTotal: `${details.purchase_units[0].amount.value} ${details.purchase_units[0].amount.currency_code}`,
                            currencyCode: details.purchase_units[0].amount.currency_code,
                        };
                
                        // Notify user of successful payment
                        alert("Payment completed by " + details.payer.name.given_name);
        
                        // Clear the cart from local storage
                        localStorage.removeItem("cartItems"); // Ensure this key matches your storage key
                    } catch (error) {
                        console.error("Error processing order details:", error);
                        alert("There was an error processing your order. Please contact support.");
                    }
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
        })
        .render("#paypal-button-container");
    }
  }, [totalPrice]); // Re-render PayPal button if the amount changes

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
