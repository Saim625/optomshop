import React, { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PRODUCTS1 } from "../utils/productdata";
import AddOns from "./detail_page/AddOns";
import FormOrderLink from "./detail_page/FormOrderLink";
import ProductSpecificationList from "./detail_page/ProductSpecificationList";
import DropdownVariants from "./detail_page/DropDownVariants";
import DropdownPDVariants from "./detail_page/DropdownPDVariants";
import PurchaseOptions from "./detail_page/PurchaseOptions";
import IshiharaVarients from "./detail_page/IshiharaVarients";
import MagnifierPurchaseOptions from "./detail_page/MagnifierPurchaseOPtions";
import { areSelectionsComplete } from "../utils/areSelectionsCompleted";
import { CartContext } from "../utils/CartContext";
import { toast } from "react-toastify";
import ProductDescription from "./detail_page/ProductDescription";

const ProductDetailPage = () => {
  const [userSelections, setUserSelections] = useState({});

  const [error, setError] = useState("");

  const { addToCart } = useContext(CartContext);

  const productErrorMessages = {
    default: "Please make all required selections before adding to the cart.",
    8: "Please select lens power.",
    12: "Please select lens power.",
    17: "Please select PD.",
    30: "Please select an Ishihara plate variant.",
  };

  const { productId: productIdParam } = useParams();
  const productId = parseInt(productIdParam, 10);

  const product = PRODUCTS1[productId];
  if (!product) {
    return <p>Product not found.</p>;
  }
  const handleAddToCart = () => {
    if (!areSelectionsComplete(product, userSelections)) {
      const errorMessage =
        productErrorMessages[productId] || productErrorMessages.default;
      setError(errorMessage);
      return;
    }

    setError(""); // Clear any existing error

    const productToAdd = {
      ...product, // Spread the original product object
      userSelections: { ...userSelections }, // Attach the userSelections state
    };

    addToCart(productToAdd); // Proceed with adding to cart

    toast.success("Product added!", {
      position: "top-center",
      autoClose: 1000, // Toast will close after 1 second
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      theme: "light",
    });
  };

  const handleSelectionChange = (key, value) => {
    setUserSelections((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="p-10 bg-gray-50">
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center mb-10 bg-white p-4 md:p-6 shadow-[0_0_10px_rgba(0,0,0,0.1)] rounded-lg">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end items-center md:items-center mb-4 md:mb-0">
          <div>
            <img
              src={product.imageURL}
              alt={product.name}
              className="object-contain max-w-full h-auto"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex flex-col w-full md:w-1/2 px-4 md:px-10">
          <h1 className="text-2xl md:text-4xl font-bold text-customBlue mb-2 md:mb-4">
            {product.name}
          </h1>
          {product.productCode && (
            <p className="text-sm md:text-base text-gray-500 mb-2">
              Product Code: {product.productCode}
            </p>
          )}
          {product.inStock && (
            <p
              className={`mb-2 text-sm md:text-base ${
                product.inStock ? "text-green-600" : "text-red-600"
              }`}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </p>
          )}
          <p className="text-lg md:text-xl text-customSeaGreen font-semibold mb-4">
            {product.range && product.range.length > 0
              ? `£${product.range[0].minprice} - £${product.range[0].maxprice}`
              : `£${product.price}`}
          </p>

          {/* Conditional Components */}
          {product.variants && (
            <DropdownVariants
              variants={product.variants}
              selectedValue={userSelections.variants || ""}
              onSelectionChange={(value) =>
                handleSelectionChange("variants", value)
              }
            />
          )}
          {product.purchaseOptions && (
            <MagnifierPurchaseOptions
              options={product.purchaseOptions}
              onSelectionChange={(value) =>
                handleSelectionChange("purchaseOptions", value)
              }
            />
          )}
          {product.options && <PurchaseOptions options={product.options} />}
          {product.ishiharaVariants && (
            <IshiharaVarients
              variants={product.ishiharaVariants}
              selectedValue={userSelections.ishiharaVariants || ""}
              onSelectionChange={(value) => 
                handleSelectionChange("ishiharaVariants", value)
              }
            />
          )}
          {product.pdVariants && (
            <DropdownPDVariants
              variants={product.pdVariants}
              selectedValue={userSelections.pdVariants || ""}
              onSelectionChange={(value) =>
                handleSelectionChange("pdVariants", value)
              }
            />
          )}
            {product.addOns && <AddOns addOns={product.addOns} setSelectedAddOns={(value) =>
                handleSelectionChange("addOns", value)
              }  />}
      {/* Description Section */}
          {error && <p className="mb-2 text-sm text-red-500">{error}</p>}

          {/* Add to Cart Button */}
          {product.specialOrder && product.specialOrder.required ? (
            <FormOrderLink
              instructions={product.specialOrder.instructions}
              orderFormLink={product.specialOrder.orderFormLink}
            />
          ) : (
            <button
              className="w-full md:w-48 px-4 py-2 bg-customSeaGreen text-white rounded-lg hover:bg-customBlue transition-colors mb-3"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          )}

          <p className="text-sm md:text-base text-gray-700">
            Delivery Time:{" "}
            <span className="font-semibold">{product.deliveryTime}</span>
          </p>
        </div>
      </div>

      {product.description && (
        <ProductDescription description={product.description}/>
      )}
      {product.specifications && (
        <ProductSpecificationList specifications={product.specifications} />
      )}
    </div>
  );
};

export default ProductDetailPage;
