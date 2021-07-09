import "./App.css";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/sidebar/Sidebar";
import DetailPage from "./components/DetailPage";
import AppRouter from "./router/Router";
// import ResponsiveDrawer from "./components/drawer/Drawer";

function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <HomePage />
      <Footer />
      <Sidebar />
      <DetailPage /> */}
      <AppRouter />
      {/* <ResponsiveDrawer /> */}
    </div>
  );
}

export default App;
