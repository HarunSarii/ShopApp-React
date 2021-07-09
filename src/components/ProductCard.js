import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductCard = ({ product }) => {
  const [badgeCount, setBadgeCount] = useState(1);

  const history = useHistory();
  const viewDetails = () => {
    history.push({
      pathname: "/detailPage",
      product: product,
    });
  };
  return (
    <div className="product">
      <img src={product?.image} alt="product" />
      <div className="product-info">
        <p>{product?.title}</p>
        <p>{product?.price}$</p>
        <h1>{badgeCount}</h1>
        <IconButton
          to="/DetailPage"
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon
            onClick={() => {
              setBadgeCount(badgeCount + 1);
            }}
          />
        </IconButton>
        <button onClick={viewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
