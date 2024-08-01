import React from "react";

//INTERNAL IMPORT
// import Button from "../components/Button/Button";
import Category from "../components/Category/Category";
import Brand from "../components/Brand/Brand";
import NFTDetailsPage from "../components/NFTDetails/NFTDetailsPage";
const NFTDetails = () => {
  return (
    <div>
      <NFTDetailsPage />
      <Category />
      <Brand />
    </div>
  );
};

export default NFTDetails;
