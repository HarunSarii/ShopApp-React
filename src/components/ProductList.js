import React from "react";

const ProductList = ({ product }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Image</th>
          <th>Product</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <div>
                <img src={product.image} alt="" />
                <p>{product.title}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default ProductList;
