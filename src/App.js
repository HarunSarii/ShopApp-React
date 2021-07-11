import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

import AppRouter from "./router/Router";
import { ProductContextProvider } from "./context/ProductContext";
import HomePage from "./pages/HomePage";
import { Drawer } from "@material-ui/core";
// import Sidebar from "./components/sidebar/Sidebar";

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
    <ProductContextProvider>
      <div className="App">
        {/* <Drawer /> */}
        <AppRouter />
        {/* <Sidebar /> */}
      </div>
    </ProductContextProvider>
  );
}

export default App;
