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
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import OrderDetails from "./pages/OrderDetails.jsx";
import MyOrdersPage from "./pages/MyOrderspage.jsx";
import AdminLayout from "./components/Admin/AdminLayout.jsx";
import AdminHomePage from "./components/Products/AdminHomePage.jsx";
import UserManagment from "./components/Admin/UserManagment.jsx";
import ProductManagment from "./components/Admin/ProductManagment.jsx";
import EditProductPage from "./components/Admin/EditProductPage.jsx";
import OrderManagment from "./components/Admin/OrderManagment.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        {/* User Layout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route
            path="collections/:collections"
            element={<CollectionPages />}
          />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="order-confirmation" element={<OrderConfirmation />} />
          <Route path="order/:id" element={<OrderDetails />} />
          <Route path="my-orders" element={<MyOrdersPage />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHomePage />} />
          <Route path="users" element={<UserManagment />} />
          <Route path="products" element={<ProductManagment />} />
          <Route path="products/:id/edit" element={<EditProductPage />} />
          <Route path="orders" element={<OrderManagment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
