import React from "react";
import { PRODUCTS } from "../utils/productdata"; 
import CategoryRow from "./CategoryRow";

const MainContainer = () => {
  return (
    <div className="container mx-auto px-4 bg-gray-50">
      {Object.keys(PRODUCTS).map((category) => (
        <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
          <CategoryRow
            categoryName={category}
            products={PRODUCTS[category]}
          />
        </div>
      ))}
    </div>
  );
};




export default MainContainer;
