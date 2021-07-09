import React from "react";

const DetailPage = (props) => {
  console.log(props.location.product);
  const product = props.location.product;
  return (
    <div className="details">
      <h1>Product Details</h1>
      <div className="image-container">
        <img src={product?.image} alt="" />
      </div>
      <div className="detail-container">
        <p>{product?.title}</p>
        <p>price</p>
        <p>category</p>
        <p>description</p>
        <button>Add to Chart</button>
      </div>
    </div>
  );
};

export default DetailPage;
