import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import AppRouter from "./router/Router";
import { ProductContext } from "./context/ProductContext";
import HomePage from "./pages/HomePage";

const FEATURED_API = "https://fakestoreapi.com/products";

function App() {
  const [products, setProducts] = useState([]);
  console.log("products are:", products);

  const getProducts = (API) => {
    axios.get(API).then((res) => {
      setProducts(res.data);
      console.log("products:::", setProducts(res.data));
    });
  };

  useEffect(() => {
    getProducts(FEATURED_API);
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      <div className="App">
        <AppRouter />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
