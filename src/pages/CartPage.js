import React from "react";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

import { ProductContext } from "../context/ProductContext";

const CartPage = ({ product }) => {
  const { products, removeProduct } = React.useContext(ProductContext);
  console.log(product)
  return (
    <div>
      <table>
        <tr>
          <th><h3>Title</h3></th>
          <th><h3>Category</h3></th>
          <th><h3>Price</h3></th>
        </tr>
        {products?.map((product) => {
          return (
            <tr>
              <td>{product.title}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td><Button
                onClick={() => removeProduct(product.id)}

                variant="contained"
                color="secondary"
                // className={classes.button}
                startIcon={<DeleteIcon />}
              >
                Remove
              </Button></td>

            </tr>
          );
        })}
      </table>


    </div>
  );
};

export default CartPage;
