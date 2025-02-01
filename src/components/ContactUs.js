import React from "react";

const ContactUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-customBlue">
        Contact Us
      </h1>

      <section className="text-center mb-10">
        <p className="text-lg text-gray-700">
          We're here to assist you with any inquiries or support you may need.
          Feel free to get in touch using the information below.
        </p>
      </section>

      <section className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Phone</h2>
          <p className="text-lg text-black">+44 (0)7515 789 661</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-2 text-customBlue">Email</h2>
          <img
            src={process.env.PUBLIC_URL + "/email.jpg"}
            alt="info@optomshop.co.uk"
            className="w-auto h-6"
          />
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
