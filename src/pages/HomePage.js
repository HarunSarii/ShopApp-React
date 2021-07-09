import React, { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";

const FEATURED_API = "https://fakestoreapi.com/products";
const SEARCH_API = "https://fakestoreapi.com/products?&query";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  console.log("products are:", products);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getProducts(FEATURED_API);
  }, []);

  const getProducts = (API) => {
    axios.get(API).then((res) => {
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
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
