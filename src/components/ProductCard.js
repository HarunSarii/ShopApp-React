import React, { useState, useHistory } from "react";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const ProductCard = ({ title, price, image, product }) => {
  const [badgeCount, setBadgeCount] = useState(1);

  // const history = useHistory();
  // const viewDetails = () => {
  //   history.push({
  //     pathname: "/detailPage",
  //     product: product,
  //   });
  // };
  return (
    <div className="product">
      <img src={image} alt="product" />
      <div className="product-info">
        <p>{title}</p>
        <p>{price}$</p>
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
        {/* <button onClick={viewDetails}>View Details</button> */}
      </div>
    </div>
  );
};

export default ProductCard;
