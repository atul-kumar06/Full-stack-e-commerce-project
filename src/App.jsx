// Browser routes
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Toaster function
import { Toaster } from "sonner";
// Pages
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPages from "./pages/CollectionPages.jsx";
import ProductDetail from "./components/Products/ProductDetail.jsx";
import Checkout from "./components/Cart/Checkout.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/collections/:collections"
            element={<CollectionPages />}
          />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>

        {/* Admin Layout */}
        <Route></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
