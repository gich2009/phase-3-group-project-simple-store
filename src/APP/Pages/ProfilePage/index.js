import React from "react";
import HeaderSection from "./HeaderSection";
import ListedItemSection from "./ListedItemSection";
import ProductSection from "./ProductSection";
import StoreSection from "./StoreSection";
import { Routes, Route } from "react-router-dom";

function ProfilePage(){
  return (
    <div>
      <HeaderSection />
      <Routes> 
        <Route exact path="/"   element={<StoreSection />} />
        <Route path="/products" element={<ProductSection />} />
        <Route path="/item:id"  element={<ListedItemSection />} />
        <Route path="*"  element={<h1>404 Page not found</h1>} />
      </Routes>
    </div>
  );
}

export default ProfilePage;