import React             from "react";
import ListedItemSection from "./ListedItemSection";
import ProductSection    from "./ProductSection";
import StoreSection      from "./StoreSection";
import HeaderSection     from "./HeaderSection";
import { Routes, Route } from "react-router-dom";

function ProfilePage(){
  return (
    <div className="profile-page">
      <div>
        <HeaderSection />
      </div>
      <div>
        <Routes> 
          {/* <HeaderSection /> */}
          <Route path="/"         element={<StoreSection />} />
          <Route path="products"  element={<ProductSection />} />
          <Route path="products/item/:id"  element={<ListedItemSection />} />
          <Route path="*"         element={<h1>404 Page not found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default ProfilePage;
