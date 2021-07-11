import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import { ProductContext } from "../context/ProductContext";

const CartPage = ({ product }) => {
  // const { product } = useContext(ProductContext);
  const { products, addProduct } = React.useContext(ProductContext);

  return (
    <div>
      <table>
        <tr>
          <th>Title</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        {products?.map((product) => {
          return (
            <tr>
              <td>{product.title}</td>
              <td></td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </table>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Remove Item
      </Button>
    </div>
  );
};

export default CartPage;
