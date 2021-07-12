import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { ProductContext } from "../context/ProductContext";

const CartPage = ({ product }) => {
  // const [products, setProducts] = useState([])
  // const { product } = useContext(ProductContext);
  const { products, addProduct, setProducts } = React.useContext(ProductContext);

  const removeProduct = () => {
    setProducts(products.filter((product) => product.id !== product.id ));
  };
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
              variant="contained" color="secondary">
        Remove Item
      </Button></td>
              
            </tr>
          );
        })}
      </table>
      
      
    </div>
  );
};

export default CartPage;
