import React from "react";

const DetailPage = (product) => {
  return (
    <div className="details">
      <h1>Product Details</h1>
      <div className="image-container">image</div>
      <div className="detail-container">
        <p>{product.title}</p>
        <p>price</p>
        <p>category</p>
        <button>Add to Chart</button>
      </div>
    </div>
  );
};

export default DetailPage;
