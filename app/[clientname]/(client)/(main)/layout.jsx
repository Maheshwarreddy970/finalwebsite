import { Footer } from "@/components/navbar/Footer";
import React from "react";

const MainLayout = ({ children }) => {

  return (
    <>
      <div className="container mx-auto my-8">
        {children}
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
