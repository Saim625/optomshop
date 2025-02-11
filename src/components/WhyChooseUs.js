import React, { useEffect, useState } from "react";
import {
  FaTruck,
  FaCheckCircle,
  FaMoneyBillWave,
  FaGlobe,
  FaHandHoldingUsd,
} from "react-icons/fa";
import { BsCashStack } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";

const WhyChooseUs = () => {

  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);  

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint is 640px
    };

    // Initialize on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Decide how many points to show initially (e.g., 3 on small screens)
  const initialVisibleCount = 3;

  const points = [
    {
      icon: <FaTruck />,
      title: "Free Delivery",
      description: "FREE delivery in the UK.",
    },
    {
      icon: <FaCheckCircle />,
      title: "1-Year Warranty",
      description: "All our optical equipment is NEW with a 1-year warranty.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Affordable Prices",
      description: "One of the lowest-priced suppliers in the UK.",
    },
    {
      icon: <BsCashStack />,
      title: "Multiple Payment Options",
      description: "Pay via credit/debit card, PayPal, or bank transfer.",
      link: "How to Pay?",
      href: `${process.env.PUBLIC_URL}/payment-options`,
    },
    {
      icon: <IoMdMail />,
      title: "Next Day Delivery",
      description: (
        <span>
          {" "}
          Next Day Special Delivery available ({" "}
          <a
            href="mailto:info@optomshop.co.uk"
            className="text-blue-500 underline"
          >
            email
          </a>{" "}
          first).{" "}
        </span>
      ),
    },
    {
      icon: <FaCheckCircle />,
      title: "NHS Purchase Orders",
      description:
        "We accept NHS purchase orders (minimum order value applies).",
    },
    {
      icon: <FaHandHoldingUsd />,
      title: "Student Discounts",
      description: "Large order discounts available for students.",
      link: "CLICK",
      href: "/student-discount",
    },
    {
      icon: <FaGlobe />,
      title: "Worldwide Delivery",
      description: (
        <span>
          {" "}
          We deliver worldwide.({" "}
          <a
            href="mailto:info@optomshop.co.uk"
            className="text-blue-500 underline"
          >
            Email us
          </a>{" "}
          for a quote.).{" "}
        </span>
      ),
    },
    {
      icon: <FaCheckCircle />,
      title: "Sell Your Items",
      description: "Sell your used optical instruments/books for",
      link: "FREE.",
      href: "https://www.theoptom.com/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
  ];

  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-customBlue mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show all points on desktop or limited points on mobile */}
          {points
            .slice(0, isMobile && !showAll ? initialVisibleCount : points.length)
            .map((point, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-lg p-6 flex flex-col items-center justify-between h-full"
              >
                <div className="text-customSeaGreen text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold text-customBlue mb-3">{point.title}</h3>
                <p className="text-gray-600 text-sm">
                  {point.description}{" "}
                  {point.link && (
                    <a href={point.href} className="text-blue-500 underline" target={point.target} rel={point.rel}>
                      {point.link}
                    </a>
                  )}
                </p>
              </div>
            ))}
        </div>
        {/* Show See More or See Less Button on Mobile Only */}
        {isMobile && points.length > initialVisibleCount && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="mt-6 text-customSeaGreen mx-auto underline text-sm font-semibold block"
          >
            {showAll ? "See Less" : "See More"}
          </button>
        )}
      </div>
    </section>
  );
};

export default WhyChooseUs;
