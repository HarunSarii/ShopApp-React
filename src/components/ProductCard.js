import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ product }) => {
  const { addProduct } = React.useContext(ProductContext);

  const history = useHistory();
  const viewDetails = () => {
    history.push({
      pathname: "/detailPage",
      product: product,
    });
  };

  React.useEffect(() => {
  }, []);

  const addToCart = () => {
    addProduct(product);
  };

  return (
    <div className="product">
      <img src={product?.image} alt="product" />
      <div className="product-info">
        <p>{product?.title}</p>
        <p>{product?.price}$</p>
        <IconButton
          to="/DetailPage"
          color="primary"
          aria-label="add to shopping cart"
        >
          <AddShoppingCartIcon onClick={addToCart} />
        </IconButton>
        <button onClick={viewDetails}>View Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
