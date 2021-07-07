import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const FEATURED_API = "https://limitless-lake-55070.herokuapp.com/product/";
const SEARCH_API = "https://limitless-lake-55070.herokuapp.com/product/";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log("products are:", products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts(FEATURED_API);
  }, []);

  const getProducts = () => {
    axios
      .get("https://limitless-lake-55070.herokuapp.com/product/")
      .then((res) => {
        setProducts(res.data);
        console.log("products:::", setProducts(res.data));
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getProducts(SEARCH_API + searchTerm);
      setSearchTerm("");
    }
  };
  return (
    <>
      <form onSubmit={handleSearch}>
        <input
          type="search"
          className="search-input"
          placeholder="Seach a product..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
      <div className="product-container">
        {products?.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
