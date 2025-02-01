import React from "react";
import { Link } from "react-router-dom";
import { LucidePhone, LucideMail, LucideMapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-customBlue text-white pt-12 pb-6">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: Quick Links */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-300 pb-2 mb-4 text-left">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/payment-options"
                className="hover:underline hover:text-gray-300"
              >
                Payment Options
              </Link>
            </li>
            <li>
              <Link
                to="/terms-and-conditions"
                className="hover:underline hover:text-gray-300"
              >
                Terms and Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2: Contact Information */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-300 pb-2 mb-4 text-left">
            Contact Information
          </h3>
          <div className="flex items-start space-x-3 mb-4">
            <LucideMapPin className="w-5 h-5 mt-1" />
            <div>
              <p>81 Clifton Road, IV31 6DP</p>
              <p>Lossiemouth, Scotland</p>
            </div>
          </div>
          <div className="flex items-center space-x-3 mb-4">
            <LucidePhone className="w-5 h-5" />
            <p>+44 (0)7515789661</p>
          </div>
          <div className="flex items-center space-x-3">
            <LucideMail className="w-5 h-5" />
            <img
            src={process.env.PUBLIC_URL + "/footerEmail.png"}
            alt="info@optomshop.co.uk"
          />
          </div>
        </div>

        {/* Column 3: Custom Message or Branding */}
        <div>
          <h3 className="font-semibold text-lg border-b border-gray-300 pb-2 mb-4 text-left">
            Optom Shop Limited
          </h3>
          <p className="text-sm leading-relaxed">
            Delivering precision and quality in optical instruments since 2006.
          </p>
          <p className="mt-4 font-semibold text-sm">
            Supporting professionals worldwide.
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 text-center text-xs border-t border-gray-500 pt-4">
        &copy; 2024 Optom Shop Limited. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
