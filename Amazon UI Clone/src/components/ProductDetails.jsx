/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";
import ProductBadge from "./ProductBadge";
import ProductRatings from "./ProductRatings";

const ProductDetails = ({ product, ratings }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1">
        {product.title}
      </div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500">{product.brand}</span>
      </div>
      {ratings && (
        <div className="text-sm xl:text-base mb-1">
          <ProductRatings
            avgRating={product.avgRating}
            ratings={product.ratings}
          />
        </div>
      )}
      <div className="text-xs xl:text-sm font-bold mb-1">
        {product.attribute}
      </div>
      <div>
        <ProductBadge badge={product.badge} />
      </div>
    </div>
  );
};

// Prop types validation
ProductDetails.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    brand: PropTypes.string,
    avgRating: PropTypes.number,
    ratings: PropTypes.number,
    attribute: PropTypes.string,
    badge: PropTypes.string,
  }),
  ratings: PropTypes.bool, // Assuming ratings is a boolean, adjust as needed
};

export default ProductDetails;
