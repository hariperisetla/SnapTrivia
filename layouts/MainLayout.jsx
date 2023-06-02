import { Header } from "@/components/layouts/main";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default MainLayout;
