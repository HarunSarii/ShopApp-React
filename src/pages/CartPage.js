import React from "react";

const CartPage = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>
            <div className="cart-info">
              <div>
                <img src={product.imageURL} alt="" />
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default CartPage;
