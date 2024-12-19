import React, { useState } from "react";

const CustomerDetailForm = ({ onSubmit }) => {
  const [customerDetails, setCustomerDetails] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(customerDetails); // Pass customer details to parent
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 shadow-lg rounded-lg max-w-lg mx-auto"
    >
      <h3 className="text-xl font-bold text-gray-700 mb-4">Shipping Details</h3>
      <div className="space-y-4">
        <input
          type="text"
          name="name"
          value={customerDetails.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="email"
          name="email"
          value={customerDetails.email}
          onChange={handleInputChange}
          placeholder="Email"
          className="w-full px-4 py-2 border rounded-lg"
          required
        />
        <input
          type="tel"
          name="phone"
          value={customerDetails.phone}
          onChange={handleInputChange}
          placeholder="Phone Number"
          className="w-full px-4 py-2 border rounded-lg"
        />
        <textarea
          name="address"
          value={customerDetails.address}
          onChange={handleInputChange}
          placeholder="Address"
          className="w-full px-4 py-2 border rounded-lg"
          rows="3"
          required
        ></textarea>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="city"
            value={customerDetails.city}
            onChange={handleInputChange}
            placeholder="City"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="state"
            value={customerDetails.state}
            onChange={handleInputChange}
            placeholder="State"
            className="w-full px-4 py-2 border rounded-lg"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="zip"
            value={customerDetails.zip}
            onChange={handleInputChange}
            placeholder="Zip Code"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="country"
            value={customerDetails.country}
            onChange={handleInputChange}
            placeholder="Country"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded text-center font-semibold"
      >
        Confirm Order
      </button>
    </form>
  );
};

export default CustomerDetailForm;
