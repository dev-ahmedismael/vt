import ContractSteps from "@/components/ar/contract/ContractSteps";
import React from "react";

const contractLayout = ({ children }) => {
  return (
    <>
      <ContractSteps />
      {children}
    </>
  );
};

export default contractLayout;
