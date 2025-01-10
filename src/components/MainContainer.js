import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { PRODUCTS } from "../utils/productdata";
import CategoryRow from "./CategoryRow";

const MainContainer = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      // Scroll to the category after the page has loaded
      scrollToCategory(location.state.scrollTo);
    }
  }, [location.state]);

  const scrollToCategory = (categoryId) => {
    const targetElement = document.getElementById(categoryId.toLowerCase());
    if (targetElement) {
      // Adjust this logic for header height as needed
      const headerHeight = window.innerWidth <= 768 ? 400 : 74;
      const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container mx-auto px-4 bg-gray-50">
      {Object.keys(PRODUCTS).map((category,index) => (
        <div
          key={category}
          id={category.toLowerCase().replace(/\s+/g, "-")}
        >
          <CategoryRow categoryName={category} products={PRODUCTS[category]} isFirstRow={index === 0}/>
        </div>
      ))}
    </div>
  );
};

export default MainContainer;
