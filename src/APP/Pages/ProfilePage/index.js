import React             from "react";
import ListedItemSection from "./ListedItemSection";
import ProductSection    from "./ProductSection";
import StoreSection      from "./StoreSection";
import HeaderSection     from "./HeaderSection";
import { Routes, Route } from "react-router-dom";

function ProfilePage(){
  return (
    <div>
      <HeaderSection />
      <Routes> 
        <Route path="/"         element={<StoreSection />} />
        <Route path="stores/:id/products"  element={<ProductSection />} />
        <Route path="stores/:id/products/:id"  element={<ListedItemSection />} />
        <Route path="*"         element={<h1>404 Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default ProfilePage;
