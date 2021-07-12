import React, { useState, useEffect, useContext } from "react";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import Sidebar from "../components/sidebar/Sidebar";
import { ProductContext } from "../context/ProductContext";
import loadingGif from "../assets/loading.gif";
const FEATURED_API = "https://fakestoreapi.com/products";
// const SEARCH_API = "https://fakestoreapi.com/products?&query";
const HomePage = () => {
  // const { product } = useContext(ProductContext);
  const [products, setProducts] = useState([]);
  console.log("products are:", products);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getProducts(FEATURED_API);
  }, [setProducts]);
  const getProducts = (API) => {
    setLoading(true);
    axios.get(API).then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  };
  return (
    <div>
      {loading ? (
        <img src={loadingGif} alt="loading" />
      ) : (
        <div className="product-container">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};
export default HomePage;

// import React, { useState, useEffect, useContext } from "react";
// import ProductCard from "../components/ProductCard";
// import axios from "axios";
// import Sidebar from "../components/sidebar/Sidebar";
// import { ProductContext } from "../context/ProductContext";

// const FEATURED_API = "https://fakestoreapi.com/products";
// // const SEARCH_API = "https://fakestoreapi.com/products?&query";

// const HomePage = () => {
//   // const { product } = useContext(ProductContext);

//   const [products, setProducts] = useState([]);
//   console.log("products are:", products);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     getProducts(FEATURED_API);
//   }, [products]);

//   const getProducts = (API) => {
//     axios.get(API).then((res) => {
//       setProducts(res.data);
//     });
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // if (searchTerm) {
//     //   getProducts(SEARCH_API + searchTerm);
//     //   setSearchTerm("");
//     // }
//   };
//   return (
//     <>
//       <form onSubmit={handleSearch}>
//         <input
//           type="search"
//           className="search-input"
//           placeholder="Seach a product..."
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </form>

//       <div className="product-container">
//         {products?.map((product) => (
//           <ProductCard key={product.id} product={product} 

//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default HomePage;
