import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white pt-12 pb-5">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 md:space-x-8">
        {/* Left Section: Links */}
        <div className="flex flex-col space-y-2 text-sm md:text-base">
          <Link
            to="/payment-options"
            className="hover:underline hover:text-gray-300
"
          >
            Payment Options
          </Link>
          <Link
            to="/terms-and-conditions"
            className="hover:underline hover:text-gray-300
"
          >
            Terms and Conditions
          </Link>
        </div>

        {/* Center Section: Address */}
        <div className="text-center text-sm md:text-base leading-relaxed">
          <p className="font-semibold">Optom Shop Limited</p>
          <p>81 Clifton Road, IV31 6DP</p>
          <p>Lossiemouth, Scotland</p>
          <p>Tel: +44 (0)7515789661</p>
          <Link to="/contact" className="hover:underline">
            Email Us
          </Link>
        </div>

        {/* Right Section: Categories */}
        <div className="flex flex-col space-y-2 text-sm md:text-base">
          <Link
            to="/category/laboratory-products"
            className="hover:underline hover:text-gray-300
"
          >
            Laboratory Products
          </Link>
          <Link
            to="/category/refraction-products"
            className="hover:underline hover:text-gray-300
"
          >
            Refraction Products
          </Link>
          <Link
            to="/category/test-room-products"
            className="hover:underline hover:text-gray-300
"
          >
            Test Room Products
          </Link>
          <Link
            to="/category/miscellaneous-products"
            className="hover:underline hover:text-gray-300
"
          >
            Miscellaneous Products
          </Link>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="mt-8 text-center text-xs border-t border-gray-500 pt-4">
        &copy; 2024 Optom Shop Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
