/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import PropTypes from "prop-types";

const ProductBadge = ({ badge }) => {
  if (badge === "choice") {
    return (
      <span className="text-xs xl:text-sm bg-slate-800 text-white p-1">
        Amazon's
        <span className="text-orange-500">&nbsp; Choice</span>
      </span>
    );
  } else if (badge === "seller") {
    return (
      <span className="text-xs xl:text-sm bg-orange-500 text-white p-1">
        1# Best Seller's
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="text-xs xl:text-sm bg-red-500 text-white p-1">
        Limited Time Deal
      </span>
    );
  }

  return null;
};

ProductBadge.propTypes = {
  badge: PropTypes.oneOf(["choice", "seller", "limited"]).isRequired,
};

export default ProductBadge;
