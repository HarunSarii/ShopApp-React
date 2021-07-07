import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import DeleteIcon from "@material-ui/icons/Delete";

const ProductCard = ({ name, price, imageURL }) => {
  const [badgeCount, setBadgeCount] = useState(1);
  return (
    <div className="product">
      <img src={imageURL} alt="product" />
      <div className="product-info">
        <p>{name}</p>
        <p>{price}$</p>
        <IconButton color="primary" aria-label="add to shopping cart">
          <AddShoppingCartIcon
            onClick={() => {
              setBadgeCount(badgeCount + 1);
            }}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCard;
