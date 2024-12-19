import React from "react";

const PaymentOptions = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 md:px-12 lg:px-20">
      <div className="container mx-auto max-w-5xl">
        {/* Page Heading */}
        <h1 className="text-3xl font-bold text-customBlue text-center mb-6">
          Payment Options
        </h1>

        {/* Section Wrapper */}
        <div className="space-y-8">
          {/* Credit or Debit Card */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Credit or Debit Card
            </h2>
            <div className="flex items-center mb-3">
              <img
                src="/images/cc_visa.gif"
                alt="Visa"
                className="w-12 h-8 object-contain"
              />
              <img
                src="/images/cc_electron.gif"
                alt="Electron"
                className="w-12 h-8"
              />
              <img
                src="/images/cc_delta.gif"
                alt="Delta"
                className="w-12 h-8"
              /> 
              <img
                src="/images/cc_amex.gif"
                alt="Amex"
                className="w-12 h-8 object-contain"
              /> 
              <img
                src="/images/cc_solo.gif"
                alt="Solo"
                className="w-12 h-8 "
              /> 
              <img
                src="/images/cc_maestro_switch.gif"
                alt="Maestro_switch"
                className="w-24 h-8"
              /> 
              {/* Add more card images as needed */}
            </div>
            <p className="text-gray-700">
              Order online and pay securely and instantly. Simple.
            </p>
            <p className="text-gray-700 mt-2">
              If having trouble paying online by credit/debit card,{" "}
              <a
                href="/images/pay-online.jpg"
                className="underline text-blue-500 hover:text-blue-700"
              >
                click here
              </a>{" "}
              or call us.
            </p>
          </div>

          {/* PayPal */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">PayPal</h2>
            <p className="text-gray-700">
              If you have a PayPal account, you can select to pay by this option
              when ordering online.
            </p>
          </div>

          {/* Cheque */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Cheque</h2>
            <p className="text-gray-700">
              Payable to <strong>'Optom Shop Limited'</strong> and send with
              completed order form (
              <a
                href="/docs/Word_OrderForm.doc"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Word doc
              </a>{" "}
              OR{" "}
              <a
                href="/docs/OrderForm.pdf"
                className="text-blue-500 underline hover:text-blue-700"
                download
              >
                PDF
              </a>
              ).
            </p>
          </div>

          {/* BACS */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">BACS</h2>
            <p className="text-gray-700">
              Please email us the details of your order and submit your payment
              to:
            </p>
            <ul className="text-gray-700 ml-4 list-disc space-y-1">
              <li>
                <strong>Optom Shop Ltd</strong>
              </li>
              <li>Sort code: <strong>089250</strong></li>
              <li>Account no.: <strong>68744337</strong></li>
            </ul>
            <p className="text-gray-700 mt-2">
              Please use your email or name as the reference. Or send a
              completed order form (
              <a
                href="/docs/Word_OrderForm.doc"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Word doc
              </a>{" "}
              OR{" "}
              <a
                href="/docs/OrderForm.pdf"
                className="text-blue-500 underline hover:text-blue-700"
                download
              >
                PDF
              </a>
              ) and make payment.
            </p>
          </div>

          {/* Purchase Orders */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Purchase Orders
            </h2>
            <p className="text-gray-700">
              We accept official NHS purchase orders.
            </p>
          </div>

          {/* International Orders */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              International Orders
            </h2>
            <p className="text-gray-700">
              <a
                href="mailto:info@optomshop.co.uk"
                className="text-blue-500 underline hover:text-blue-700"
              >
                Email Us
              </a>{" "}
              for a quote.
            </p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            If you have any questions about the payment methods:
          </p>
          <p className="text-gray-800 mt-2 font-medium">
            Tel: +44 (0)7515789661
          </p>
          <p>
            <a
              href="mailto:info@optomshop.co.uk"
              className="text-blue-500 underline hover:text-blue-700"
            >
              Email Us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
