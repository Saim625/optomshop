import React from "react";

const AboutUs = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Header Section */}
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold mb-4 text-customBlue">About Us</h1>
        <p className="text-lg text-gray-700">
          Welcome to Optom Shop Limited, where quality meets convenience in
          ophthalmic equipment.
        </p>
      </header>

      {/* Company Overview */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-customBlue">
          Our Story
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Optom Shop Limited was founded in 2006 with the aim of creating a
          simple yet innovative ophthalmic equipment company for the industry.
          Our goal is to offer quality products in a convenient way, by allowing
          you to buy online, making it fast and simple. Furthermore, this model
          allows us to reduce costs and pass on those savings to you.
        </p>
      </section>

      {/* Quality Assurance */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-customBlue">
          Our Commitment to Quality
        </h2>
        <p className="text-gray-700 leading-relaxed">
          All our optician equipment complies with British and International
          standards and comes with a 1-year warranty. Not to mention, we often
          test (i.e., play) with all the gadgets to make sure we’re happy with
          them.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We are flexible and happy to offer large order discounts for
          individuals, groups, companies, and students.{" "}
          <a
            href="/student-discount"
            className="text-blue-500 underline font-medium"
          >
            Click Here
          </a>
          .
        </p>
      </section>

      {/* Sustainability and Giving Back */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-customBlue">
          Sustainability and Giving Back
        </h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Recycling and re-use of packaging when possible</li>
          <li>Offsetting CO2 emissions for equipment ordered from overseas</li>
          <li>Donating 10% of annual profit from sales to charity</li>
          <li>Providing ophthalmic equipment for vision charity work</li>
        </ul>
      </section>

      {/* Contact Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-customBlue">
          Get in Touch
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions or would like further information, feel free
          to reach out to us:
        </p>
        <ul className="mt-4 space-y-2 text-gray-700">
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+447515789661" className="text-blue-500 underline">
              +44 (0)7515 789 661
            </a>
          </li>
          <li className="flex">
            <strong>Email:</strong>{" "}
            <img
              src="email.jpg"
              alt="info@optomshop.co.uk"
            />
          </li>
          <li>
            <strong>Address:</strong> Optom Shop Limited, 81 Clifton Road, IV31
            6DP, Lossiemouth, Scotland.
          </li>
        </ul>
      </section>

      {/* Company Details */}
      <footer className="border-t pt-4 mt-8 text-center text-gray-600">
        <p>Company No. 311743</p>
      </footer>
    </div>
  );
};

export default AboutUs;
