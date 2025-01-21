import React, { useEffect } from "react";
import emailjs from "emailjs-com";

// PayPalButton component
const PayPalButton = ({ totalPrice, checkoutItems }) => {
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
                  value: totalPrice.toFixed(2), // Total order value
                  breakdown: {
                    item_total: {
                      value: totalPrice.toFixed(2), // Total value of items
                      currency_code: "GBP",
                    },
                  },
                },
                description: "saim 1",
                description: "saim 1",
                items: checkoutItems.map((item) => ({
                  id: item.name,
                  name: item.name,
                  unit_amount: {
                    value: item.price.toFixed(2), // Price per item
                    currency_code: "GBP",
                  },
                  quantity: item.quantity.toString(),
                  // description: item.description, // Add custom category
                  sku: item.description,
                })),
              },
            ],
          });
        },

        onApprove: function (data, actions) {
          return actions.order
            .capture()
            .then(function (details) {
              console.log("Details:", details); // Log the details object
              
              // Define order details
              const orderDetails = {
                orderId: details.id,
                buyerName: details.payer.name.given_name + " " + details.payer.name.surname,
                buyerEmail: details.payer.email_address,
                items: details.purchase_units[0].items.map((item) => ({
                  name: item.name,
                  variant_name: item.sku || "N/A", // Handle variant name if available
                  quantity: item.quantity,
                  unit_price: `${item.unit_amount.currency_code} ${item.unit_amount.value}`,
                  total_price: `${item.unit_amount.currency_code} ${
                    parseFloat(item.unit_amount.value) * parseInt(item.quantity, 10)
                  }`,
                })),
               address : {
                  address_line_1: details.purchase_units[0].shipping.address.address_line_1,
                  address_line_2: details.purchase_units[0].shipping.address.address_line_2,
                  admin_area_1: details.purchase_units[0].shipping.address.admin_area_1,
                  admin_area_2: details.purchase_units[0].shipping.address.admin_area_2,
                  country_code: details.purchase_units[0].shipping.address.country_code,
                  postal_code: details.purchase_units[0].shipping.address.postal_code,
                },
                orderDate: new Date(details.create_time).toLocaleString(),
                orderTotal: `${details.purchase_units[0].amount.value} ${details.purchase_units[0].amount.currency_code}`,
                currencyCode: details.purchase_units[0].amount.currency_code,
              };
        
              console.log("Order Details Object:", orderDetails); // Log the structured orderDetails object
              
              // Function to send email
              const sendEmail = (recipientEmail, subject, templateId) => {
                emailjs
                  .send(
                    "service_4wl7p0k", // Replace with your EmailJS service ID
                    templateId,
                    {
                      subject: subject,
                      to_email: recipientEmail,
                      seller_name: "Optom Shop Team", // Replace with dynamic seller name if available
                      order_id: orderDetails.orderId,
                      buyer_name: orderDetails.buyerName,
                      buyer_email: orderDetails.buyerEmail,
                      order_date: orderDetails.orderDate,
                      order_total: orderDetails.orderTotal,
                      currency_code: orderDetails.currencyCode,
                      items: orderDetails.items,
                      address_line_1: orderDetails.address.address_line_1,
                      address_line_2: orderDetails.address.address_line_2,
                      admin_area_1: orderDetails.address.admin_area_1,
                      admin_area_2: orderDetails.address.admin_area_2,
                      country_code: orderDetails.address.country_code,
                      postal_code: orderDetails.address.postal_code,
                    },
                    "jDUcVKaKZjzqfsr2x" // Replace with your EmailJS user ID
                  )
                  .then(
                    (response) => console.log("Email sent successfully:", response),
                    (error) => console.error("Email sending failed:", error)
                  );
              };
        
              // Send email to the seller
              const sellerEmail = "saimsaeed625@gmail.com"; // Replace with seller's email
              const sellerTemplateId = "template_hu326ca"; // Replace with your actual EmailJS seller template ID
              sendEmail(sellerEmail, "New Order Received", sellerTemplateId);
        
              // Send email to the purchaser orderDetails.buyerEmail
              const purchaserEmail = "saimsaeed526@gmail.com"; // Dynamic purchaser's email
              const purchaserTemplateId = "template_seg67ob"; // Replace with your actual EmailJS purchaser template ID (could be a different template)
              sendEmail(purchaserEmail, "Order Confirmation", purchaserTemplateId);
        

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
  }, [totalPrice]); // Re-render PayPal button if the amount changes

  return <div id="paypal-button-container"></div>;
};

export default PayPalButton;
