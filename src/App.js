import React from "react";
import DashBoard from "./components/DashBoard";
import Portal from "./components/Portal";
import User from "./components/User";
import Product from "./components/Product";
import "./css/sb-admin-2.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateUser from "./components/CreateUser";
import Login from "./components/Login";
import UserView from "./components/UserView";
import UserEdit from "./components/UserEdit";
import ProductEdit from "./components/ProductEdit";
import ProductView from "./components/ProductView";
import CreateProduct from "./components/CreateProduct";
import { UserProvider } from "./components/userContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/portal" element={<Portal />}>
              <Route path="dashboard" element={<DashBoard />} />
              <Route path="users" element={<User />} />

              <Route path="create-user" element={<CreateUser />} />
              <Route path="user/view/:id" element={<UserView />} />
              <Route path="user/edit/:id" element={<UserEdit />} />

              <Route path="products" element={<Product />} />

              <Route path="create-product" element={<CreateProduct />} />
              <Route path="product/view/:id" element={<ProductView />} />
              <Route path="product/edit/:id" element={<ProductEdit />} />
            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
