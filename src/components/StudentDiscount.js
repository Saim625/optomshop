import React from "react";

const StudentDiscountsPage = () => {
  return (
    <div className="bg-gray-50 py-12 px-6 lg:px-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-customBlue mb-4">
          Student Discounts
        </h1>
        <p className="text-gray-700">
          Optometry Instruments and Optician Equipment - Large Order Discounts
        </p>
      </header>

      {/* Large Order Discounts Section */}
      <section className="mb-12 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-customBlue mb-4">
          Large Order Discounts
        </h2>
        <p className="text-gray-700 leading-relaxed">
          We can offer individuals, groups, or companies a discount if they
          need to buy in larger quantities. For a quote, simply tel/fax/email us
          with your order details.
        </p>
      </section>

      {/* Students Section */}
      <section className="mb-12 bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-customBlue mb-4">Students</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Optom Shop recognises that all optometry students will need certain
          equipment during their refraction clinics at university or during
          pre-registration. We’re happy to offer discounts tailored just for
          you.
        </p>
        <div className="bg-gray-100 p-4 rounded-md mb-6">
          <h3 className="font-semibold text-lg mb-2 text-customBlue">How It Works</h3>
          <ul className="list-disc pl-6 text-gray-700">
            <li>
              Gather your classmates to make a group purchase for bigger
              discounts. The larger the order, the larger the discount.
            </li>
            <li>
              If purchasing individually, enjoy normal prices, which are already
              among the lowest in the market.
            </li>
          </ul>
        </div>
        <p className="text-gray-700">
          Here’s a suggested list of commonly needed items for optometry
          students:
        </p>
        <ul className="list-disc pl-6 text-gray-700 mb-4">
          <li>Binocular confirmation flipper (0.25 & 0.50)</li>
          <li>Two lens twirl (0.25 & 0.50)</li>
          <li>Cross cylinder (0.25, 0.50, 0.75, 1.00)</li>
          <li>Universal trial frame</li>
          <li>Kid's trial frame</li>
          <li>Direct Ophthalmoscope</li>
          <li>20 base prism</li>
          <li>Occluder</li>
          <li>Prism bar set</li>
        </ul>
        <p className="text-gray-700">
          Once you’ve decided on quantities, contact us with your order, your
          university, your name, and your GOC student registration number.
        </p>
      </section>

      {/* Contact Section */}
      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold text-customBlue mb-4">Contact Us</h2>
        <div className="text-gray-700">
          <p>
            <strong>Phone:</strong> +44 (0)7515789661
          </p>
          <p>
            <strong>Fax:</strong> +44 (0)870 838 1365
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:support@optomshop.com"
              className="text-customBlue underline"
            >
              support@optomshop.com
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default StudentDiscountsPage;
