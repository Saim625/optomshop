import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { hasRequiredSelections } from "../utils/hasRequiredSelection";
import PopupModal from "../utils/PopupModal";
import { CartContext } from "../utils/CartContext";
import { toast } from "react-toastify";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (hasRequiredSelections(product)) {
      setIsModalOpen(true);
      return;
    }

    addToCart(product);
    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      theme: "light",
    });
  };

  const handleCloseModal = () => setIsModalOpen(false);
  const handleGoToDetails = () => {
    navigate(`/product/${product.id}`);
  };
  return (
    <div className="product-card p-4">
      {/* Image Section */}
      <NavLink
        className="relative h-40 flex items-center justify-center"
        to={`/product/${product.id}`}
      >
        <img
          src={product.imageURL}
          alt={product.name}
          className="max-h-full w-auto object-contain"
        />
       {!product.inStock && (
  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
    Out of Stock
  </span>
)}
      </NavLink>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h2
          className="text-sm font-semibold text-customBlue truncate"
          title={product.name}
        >
          {product.name}
        </h2>
        <p className="mt-1 text-lg font-bold text-customSeaGreen">
          {product.range && product.range.length > 0
            ? `£${product.range[0].minprice} - £${product.range[0].maxprice}`
            : `£${product.price}`}
        </p>
        <Link
          to={`/product/${product.id}`}
          className="block mt-2 text-sm text-customBlue hover:underline"
        >
          View Details
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="mt-4">
  <button
    className={`w-full px-3 py-2 ${
      product.inStock ? "bg-customSeaGreen md:hover:bg-customBlue" : "bg-gray-400 cursor-not-allowed"
    } text-white text-sm font-medium rounded transition-colors`}
    onClick={product.inStock ? handleAddToCart : null}
    disabled={!product.inStock}
  >
    {product.inStock ? "Add to Cart" : "Out of Stock"}
  </button>
</div>

      {/* Popup Modal */}
      {isModalOpen && (
        <PopupModal
          isOpen={isModalOpen}
          title={
            product.specialOrder
              ? "Special Order Required"
              : "Additional Selections Required"
          }
          message={
            product.specialOrder
              ? "This product requires special instructions. Please review the details and download the order form."
              : "Please make the required selections before adding this product to the cart."
          }
          onClose={handleCloseModal}
          onGoToDetails={handleGoToDetails}
        />
      )}
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    imageURL: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    oldPrice: PropTypes.string,
    isOnSale: PropTypes.bool,
  }).isRequired,
};

export default ProductCard;
